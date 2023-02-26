import BaseService from "./BaseService";

class AuthService extends BaseService {
  get isAuthenticated() {
    return Boolean(localStorage.getItem("token"));
  }

  get getToken() {
    return localStorage.getItem("token");
  }

  async setToken(authToken) {
    return localStorage.setItem("token", authToken);
  }

  async removeToken() {
    return localStorage.removeItem("token");
  }
}

const authService = new AuthService();
Object.freeze(authService);

export default authService;
