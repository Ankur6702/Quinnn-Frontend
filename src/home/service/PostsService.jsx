import BaseService from "@/src/common/service/config/BaseService";

export default class PostsService extends BaseService {
  async getPosts() {
    return await this.get(`https://dummyjson.com/products/`);
  }
}
