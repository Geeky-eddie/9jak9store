import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/api/:path*"],
  ignoredRoutes: ["/products", "/dogs", "/programs", "/shop", "/search", "/", "/cart" , "/banktransfer", "/aboutus"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};