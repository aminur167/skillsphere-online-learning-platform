import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient();

export async function signInWithGoogle(callbackURL = "/") {
  return authClient.signIn.social({
    provider: "google",
    callbackURL
  });
}

export async function getBetterAuthUser() {
  const session = await authClient.getSession();
  const sessionUser = session?.data?.user || session?.user;

  if (!sessionUser) return null;

  return {
    name: sessionUser.name || "SkillSphere Learner",
    email: sessionUser.email || "",
    photoURL: sessionUser.image || sessionUser.picture || ""
  };
}

export async function signOutBetterAuth() {
  return authClient.signOut();
}
