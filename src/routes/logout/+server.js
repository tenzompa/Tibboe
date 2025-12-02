import { redirect } from "@sveltejs/kit";

export async function POST({ cookies }) {
  cookies.delete("userId", { path: "/" });
  throw redirect(303, "/");
}
