import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { toNextJsHandler } from "better-auth/next-js";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "development-only-secret-change-in-production",
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ...(googleClientId && googleClientSecret
    ? {
      socialProviders: {
        google: {
          clientId: googleClientId,
          clientSecret: googleClientSecret
        }
      }
    }
    : {}),
  plugins: [nextCookies()]
});

export const { GET, POST } = toNextJsHandler(auth);
