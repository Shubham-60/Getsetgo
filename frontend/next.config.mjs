import { clerkMiddleware } from "@clerk/nextjs/server";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    authInterception: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
};

export const middleware = clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

export default nextConfig;
