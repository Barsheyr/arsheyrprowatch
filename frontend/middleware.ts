// // // import { clerkMiddleware } from "@clerk/nextjs/server";

// // // export default clerkMiddleware();

// // // export const config = {
// // //   matcher: [
// // //     // Skip Next.js internals and all static files, unless found in search params
// // //     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
// // //     // Always run for API routes
// // //     "/(api|trpc)(.*)",
// // //   ],
// // // };
// // import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// // import { NextResponse } from "next/server";

// // const isPublicRoute = createRouteMatcher([
// //   "/",
// //   "/about",
// //   "/brand",
// //   "/watches",
// //   "/products(.*)",
// // ]);

// // export default clerkMiddleware(async (auth, req) => {
// //   const { userId } = await auth(); // Get user ID

// //   // Allow public routes without authentication
// //   if (isPublicRoute(req)) return;

// //   // Restrict access to /cart if user is not signed in
// //   if (req.nextUrl.pathname.startsWith("/cart") && !userId) {
// //     return NextResponse.redirect(new URL("/", req.url)); // Redirect to home
// //   }
// // });

// // export const config = {
// //   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// // };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isPublicRoute = createRouteMatcher([
//   "/",
//   "/about",
//   "/brand",
//   "/watches",
//   "/products(.*)",
// ]);

// export default clerkMiddleware(async (auth, req) => {
//   // ✅ Correctly await auth()
//   const authObject = await auth();
//   const userId = authObject.userId; // Now userId is accessible

//   // ✅ Allow public routes without authentication
//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }

//   // ✅ Restrict access to /cart if user is not signed in
//   if (req.nextUrl.pathname.startsWith("/cart") && !userId) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // ✅ Allow authenticated requests to continue
//   return NextResponse.next();
// });

// // ✅ Improved `matcher` to correctly skip Next.js internals & static files
// export const config = {
//   matcher: [
//     "/((?!_next|static|favicon.ico|.*\\..*).*)",
//     "/",
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPublicRoute = (path: string) => {
  const publicRoutes = ["/", "/about", "/brand", "/watches", "/products(.*)"];

  return publicRoutes.some((route) =>
    new RegExp(`^${route.replace(/\.\*/g, ".*")}$`).test(path)
  );
};

export default clerkMiddleware(async (auth, request: NextRequest) => {
  // Check if the route is public
  if (isPublicRoute(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Protect cart route
  if (request.nextUrl.pathname.startsWith("/cart")) {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Allow other routes to continue
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
