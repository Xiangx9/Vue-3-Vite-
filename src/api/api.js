import { request } from './axios'
export class UserService {       // 模块一
    static async login1(params) {  
        return request('/Order/EndOrder',params, 'post')
    }
}

export class landRelevant {     // 模块二
    static async landList(params) {
        return request('/User/GetMemberByCoutomer',params, 'get')
    }
}