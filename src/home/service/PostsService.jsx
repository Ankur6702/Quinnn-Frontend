import BaseService from "@/src/common/service/config/BaseService";

export default class PostsService extends BaseService {
  async getPosts(limit, page, sort) {
    return await this.get(
      `${this.buildUrl(`/posts?limit=${limit}&page=${page}&sort=${sort}`)}`
    );
  }
  async fetchPostData(id) {
    return await this.get(`${this.buildUrl(`/fetchPost/${id}`)}`);
  }
  async getUserPosts(username) {
    return await this.get(`${this.buildUrl(`/fetchPosts/${username}`)}`);
  }
  async deletePost(postId) {
    return await this.delete(`${this.buildUrl(`/post/delete/${postId}`)}`);
  }
  async likePost(postId) {
    return await this.put(`${this.buildUrl(`/post/like/${postId}`)}`);
  }
  async unlikePost(postId) {
    return await this.put(`${this.buildUrl(`/post/unlike/${postId}`)}`);
  }
  async fetchcommments(postId) {
    return await this.get(`${this.buildUrl(`/comment/fetch/${postId}`)}`);
  }
  async createCommment(postId) {
    return await this.get(`${this.buildUrl(`/comment/create/${postId}`)}`);
  }
  async deleteComment(commentId) {
    return await this.delete(
      `${this.buildUrl(`/comment/delete/${commentId}`)}`
    );
  }
  async likeComment(id) {
    return await this.put(`${this.buildUrl(`/comment/like/${id}`)}`);
  }
  async dislikeComment(id) {
    return await this.put(`${this.buildUrl(`/comment/dislike/${id}`)}`);
  }
  async unlikeComment(id) {
    return await this.put(`${this.buildUrl(`/comment/unlike/${id}`)}`);
  }
  async undislikeComment(id) {
    return await this.put(`${this.buildUrl(`/comment/undislike/${id}`)}`);
  }
}
