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
