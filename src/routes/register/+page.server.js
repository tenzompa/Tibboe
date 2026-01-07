import db from "$lib/db.js";
import { fail, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  if (locals.user) {
    throw redirect(302, "/");
  }
  return {};
}

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString().trim();
    const username = data.get("username")?.toString().trim();
    const password = data.get("password")?.toString();
    const confirm = data.get("confirm")?.toString();

    if (!email || !username || !password || !confirm) {
      return fail(400, { error: "Please fill in all fields.", email, username });
    }

    //email format check 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return fail(400, { error: "Please enter a valid email address.", email, username });
    }

    if (username.length < 3) {
      return fail(400, { error: "Username must be at least 3 characters.", email, username });
    }

    if (password !== confirm) {
      return fail(400, { error: "Passwords do not match.", email, username });
    }

    if (password.length < 6) {
      return fail(400, { error: "Password must be at least 6 characters.", email, username });
    }

    try {
      const userId = await db.createUser({ email, username, password });

      // set a simple userId cookie (session)
      cookies.set("userId", userId, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
      });
    } catch (err) {
      return fail(400, {
        error: err.message || "Could not create account.",
        email,
        username
      });
    }

    throw redirect(303, "/");
  }
};
