import Axios from "axios";

export default class BaseService {
  baseUrl;

  constructor() {
    this.baseUrl = process.env.API_BASE_SERVICE;
  }

  getAxiosConfig() {
    return {
      headers: { token: `${localStorage.getItem("token")}` },
    };
  }

  buildUrl(path) {
    return `${this.baseUrl}/api${path}`;
  }

  async get(url, params) {
    const response = await Axios.get(url, {
      method: "GET",
      params,
      ...this.getAxiosConfig(),
    });
    return response;
  }

  async post(url, body, axiosConfig) {
    const response = await Axios.post(url, body, {
      ...this.getAxiosConfig(),
      ...axiosConfig,
    });
    return response;
  }

  async put(url, body, axiosConfig) {
    const response = await Axios.put(url, body, {
      ...this.getAxiosConfig(),
      ...axiosConfig,
    });
    return response;
  }

  async patch(url, body, axiosConfig) {
    const response = Axios.patch(url, body, {
      ...this.getAxiosConfig(),
      ...axiosConfig,
    });
    return response;
  }

  async delete(url, body) {
    const response = await Axios.delete(url, {
      data: { ...(body || {}) },
      ...this.getAxiosConfig(),
    });
    return response;
  }
}
