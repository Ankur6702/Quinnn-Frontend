import BaseService from "@/src/common/service/config/BaseService";

export default class BlogService extends BaseService {
  async fetchBlogs() {
    return await this.get(`${this.buildUrl(`/blog/myblogs`)}`);
  }

  async fetchBlogData(id) {
    return await this.get(`${this.buildUrl(`/blog/fetch/${id}`)}`);
  }
}
