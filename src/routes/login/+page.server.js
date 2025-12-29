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
    const password = data.get("password")?.toString();

    if (!email || !password) {
      return fail(400, { error: "Please fill in both fields.", email });
    }

    const user = await db.verifyUser(email, password);
    if (!user) {
      return fail(401, { error: "Invalid email or password.", email });
    }

    cookies.set("userId", user._id.toString(), {
      path: "/",        // MUST be "/" so it works on all routes
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });

    throw redirect(303, "/");
  }
};
