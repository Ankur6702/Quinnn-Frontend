import BaseService from "./BaseService";
import jwt_decode from "jwt-decode";

class AuthService extends BaseService {
  get isAuthenticated() {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token !== null;
    }
    return false;
  }

  get getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  }

  async setToken(authToken) {
    if (typeof window !== "undefined") {
      return localStorage.setItem("token", authToken);
    }
  }

  async removeToken() {
    if (typeof window !== "undefined") {
      return localStorage.removeItem("token");
    }
  }

  async user() {
    return await this.get(this.buildUrl("/user/profile"));
  }
}

const authService = new AuthService();
Object.freeze(authService);

export default authService;
