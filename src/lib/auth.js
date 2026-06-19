import { createAuthClient } from "better-auth/client";

const appURL = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");

export const authClient = createAuthClient({
  ...(appURL ? { baseURL: `${appURL}/api/auth` } : {})
});

export async function signInWithGoogle(callbackURL = "/") {
  const result = await authClient.signIn.social({
    provider: "google",
    callbackURL
  });

  const redirectURL = result?.data?.url || result?.url;
  if (redirectURL && typeof window !== "undefined") {
    window.location.href = redirectURL;
  }

  return result;
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
