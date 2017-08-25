export function get(url){
    return fetch(url,{
        method:'GET',
        credentials:'include',
        headers:{
            accept:'application/json',
        }
    }).then(res => res.json());
}

