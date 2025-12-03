import db from "$lib/db.js";

export async function handle({ event, resolve }) {
  const userId = event.cookies.get("userId");

  if (userId) {
    try {
      const user = await db.getUserById(userId);
      if (user) {
        event.locals.user = {
          _id: user._id.toString(),
          email: user.email,
          username: user.username
        };
      } else {
        event.locals.user = null;
      }
    } catch (e) {
      console.error("Error loading user from cookie:", e);
      event.locals.user = null;
    }
  } else {
    event.locals.user = null;
  }

  return resolve(event);
}
