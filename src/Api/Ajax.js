var headers = {
    Accept: 'text/json',
    'content-type': 'application/json'
};
var baseUrl = process.env.NODE_ENV === 'development' ? 'https://api.github.com' : 'https://api.github.com';
var converParam = function (query) { return query && Object.keys(query).map(function (item) { return item + "=" + query[item]; }).join('&'); };
var $ = {
    get: function (url, query) {
        return new Promise(function (resolve, rejects) {
            fetch(url + "?" + converParam(query), {
                headers: headers,
            }).then(function (res) {
                resolve(res.json());
            });
        });
    },
    post: function (url, query) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                headers: headers,
                method: 'POST',
                body: query ? JSON.stringify(query) : '',
            }).then(function (res) {
                resolve(res.json());
            });
        });
    }
};
export default $;
