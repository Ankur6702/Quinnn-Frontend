import BaseService from "./baseService";

class BaseAuthService extends BaseService {
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

const baseAuthService = new BaseAuthService();
Object.freeze(baseAuthService);

export default baseAuthService;
