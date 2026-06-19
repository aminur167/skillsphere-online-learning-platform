import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { toNextJsHandler } from "better-auth/next-js";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const baseURL = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL;
const normalizedBaseURL = baseURL?.replace(/\/$/, "");
const trustedOrigins = [
  "http://localhost:3000",
  normalizedBaseURL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  "https://*.vercel.app"
].filter(Boolean);

const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "development-only-secret-change-in-production",
  baseURL: normalizedBaseURL,
  trustedOrigins,
  ...(googleClientId && googleClientSecret
    ? {
      socialProviders: {
        google: {
          clientId: googleClientId,
          clientSecret: googleClientSecret,
          ...(normalizedBaseURL ? { redirectURI: `${normalizedBaseURL}/api/auth/callback/google` } : {})
        }
      }
    }
    : {}),
  plugins: [nextCookies()]
});

export const { GET, POST } = toNextJsHandler(auth);
