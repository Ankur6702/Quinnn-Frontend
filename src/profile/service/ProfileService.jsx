import BaseService from "@/src/common/service/config/BaseService";

export default class ProfileService extends BaseService {
  async getProfile() {
    return await this.get(`https://dummyjson.com/products/`);
  }
}
