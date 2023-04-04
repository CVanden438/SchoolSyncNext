export { default } from "next-auth/middleware";
export const config = { matcher: ["/admin/overview"] };

// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       if (req.nextUrl.pathname === "/admin/dashboard/addschool") {
//         return token?.role === "admin";
//       }
//       return !!token;
//     },
//   },
// });

// export const config = { matcher: ["/admin/:path*"] };

// import { getToken } from "next-auth/jwt";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   const { pathname, origin } = req.nextUrl;
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//     secureCookie: process.env.NODE_ENV === "production",
//   });

//   if (!token || token?.user?.role === "USER") {
//     if (pathname.startsWith("/admin")) {
//       return NextResponse.redirect(`${origin}`);
//     }
//   }

//   NextResponse.next();
// }
