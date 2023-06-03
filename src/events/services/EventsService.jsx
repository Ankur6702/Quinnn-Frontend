import BaseService from "@/src/common/service/config/BaseService";

export default class EventsService extends BaseService {
  async fetchEventDetails(id) {
    return await this.get(`${this.buildUrl(`/event/fetch/${id}`)}`, data);
  }
  async fetchUpcomingEvents() {
    return await this.get(`${this.buildUrl(`/event/upcoming`)}`);
  }
  async fetchOngoingEvents() {
    return await this.get(`${this.buildUrl(`/event/ongoing`)}`);
  }
  async fetchMyevents() {
    return await this.get(`${this.buildUrl(`/event/myevents`)}`);
  }
  async fetchPastevents() {
    return await this.get(`${this.buildUrl(`/event/past`)}`);
  }
}
