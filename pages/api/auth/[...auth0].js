import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();

// export default handleAuth({
//   async login(req, res) {
//     await handleLogin(req, res, {
//       returnTo: "/feed",
//     });
//   },
// });
