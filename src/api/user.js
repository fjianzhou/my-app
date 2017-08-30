import {get,post} from './index';
let baseUrl='http://localhost:5000';


export function regs(data){
    return post(`${baseUrl}/register`,data)
}

export function logins(data){
    return post(`${baseUrl}/login`,data)
}

export function auth(){
    console.log('auth')
    return get(`${baseUrl}/auth`)
}
