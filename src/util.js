export default {
    get: function (key) {
        let val= sessionStorage.getItem(key) || '';

        if(val.startsWith('{') || val.startsWith('[') ){
            val=JSON.parse(val);
        }
        return val;
    },
    set: function (key, val) {
        if (typeof val === 'object') {
            sessionStorage.setItem(key, JSON.stringify(val))
        }
        else {
            sessionStorage.setItem(key, val)
        }
    }
}
