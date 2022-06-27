// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
console.log(handleLogin.handleLogin);
export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/feed",
    });
  },
});
