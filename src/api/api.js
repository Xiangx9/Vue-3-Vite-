import { request } from './axios'
export class Login {       // 登录模块
    static async register(params) {  
        return request('/api/users/register',params, 'post')
    }
}

export class landRelevant {     // 模块二
    static async landList(params) {
        return request('',params, 'get')
    }
}