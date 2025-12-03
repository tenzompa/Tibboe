import { redirect } from "@sveltejs/kit";
import db from "$lib/db.js";

export function load({ locals }) {
  return { user: locals.user ?? null };
}

export const actions = {
  delete: async ({ locals, cookies }) => {
    if (!locals.user?._id) {
      throw redirect(302, "/login");
    }

    await db.deleteUserById(locals.user._id);
    cookies.delete("userId", { path: "/" });

    throw redirect(303, "/");
  }
};
