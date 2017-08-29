export function get(url){
    return fetch(url,{
        method:'GET',
        credentials:'include',
        headers:{
            accept:'application/json',
        }
    }).then(res => res.json());
}


export function post(url,data){
    return fetch(url,{
        method:'post',
        credentials:'include',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
}