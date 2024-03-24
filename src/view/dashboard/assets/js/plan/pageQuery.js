const params = {}
const queryString = window.location.search.replace("?", "").split("&");
queryString.forEach(q => {
    let qs = q.split("=")
    params[qs[0]] = qs[1]
})

window.query = function (name) {
    return params[name];
}





