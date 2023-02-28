import BaseService from "./BaseService";

class BaseAuthService extends BaseService {
  get isUserAuthenticated() {}
}

const baseAuthService = new BaseAuthService();
Object.freeze(baseAuthService);

export default baseAuthService;
