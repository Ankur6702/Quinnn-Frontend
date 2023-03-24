import BaseService from "@/src/common/service/config/BaseService";

export default class AccountsService extends BaseService {
  async userSignUp(data) {
    return await this.post(`${this.buildUrl("/auth/signup")}`, data);
  }
  async userLogin(data) {
    return await this.post(`${this.buildUrl("/auth/login")}`, data);
  }
  async forgotPassword(data) {
    return await this.post(`${this.buildUrl("/auth/forgot-password")}`, data);
  }
  async resetPassword(data, token) {
    return await this.post(
      `${this.buildUrl(`/auth/reset-password/${token}`)}`,
      data
    );
  }
}
