import BaseService from "@/src/common/service/config/BaseService";

export default class ProfileService extends BaseService {
  async userSignUp() {
    return await this.get(`${this.buildUrl("/user/profile")}`, data);
  }
  async updateProfile(data) {
    return await this.put(`${this.buildUrl("/user/profile/update")}`, data);
  }
  async fetchProfile(username) {
    return await this.get(`${this.buildUrl(`/user/search/${username}`)}`);
  }
  async fetchUserPosts() {
    return await this.get(`${this.buildUrl(`/post/all`)}`);
  }
  async fetchUserData(id) {
    return await this.get(`${this.buildUrl(`/fetchUser/${id}`)}`);
  }
  async fetchUserFollowers(id) {
    return await this.get(`${this.buildUrl(`/fetchFollowers/${id}`)}`);
  }
  async fetchUserFollowing(id) {
    return await this.get(`${this.buildUrl(`/fetchFollowing/${id}`)}`);
  }
  async fetchUserEvents(id) {
    return await this.get(`${this.buildUrl(`/event/myevents`)}`);
  }
}
