import BaseService from "@/src/common/service/config/BaseService";

export default class BlogService extends BaseService {
  async fetchUsersBlogs() {
    return await this.get(`${this.buildUrl(`/blog/myblogs`)}`);
  }
  async fetchAllBlogs(limit, page, sort) {
    return await this.get(
      `${this.buildUrl(`/blogs?limit=${limit}&page=${page}&sort=${sort}`)}`
    );
  }

  async fetchBlogData(id) {
    return await this.get(`${this.buildUrl(`/blog/fetch/${id}`)}`);
  }
}
