import BaseService from "@/src/common/service/config/BaseService";

export default class PostsService extends BaseService {
  async deletePost(postId) {
    return await this.delete(`${this.buildUrl(`/post/delete/${postId}`)}`);
  }
  async likePost(postId) {
    return await this.put(`${this.buildUrl(`/post/like/${postId}`)}`);
  }
  async unlikePost(postId) {
    return await this.put(`${this.buildUrl(`/post/unlike/${postId}`)}`);
  }
}
