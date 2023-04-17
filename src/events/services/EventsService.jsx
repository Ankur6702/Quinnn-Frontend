import BaseService from "@/src/common/service/config/BaseService";

export default class EventsService extends BaseService {
  async fetchEventDetails(id) {
    return await this.get(`${this.buildUrl(`/event/fetch/${id}`)}`, data);
  }
}
