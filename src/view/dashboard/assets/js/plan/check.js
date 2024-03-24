document.addEventListener("DOMContentLoaded", () => {
    checkAuth()
})

function checkAuth() {
    var tokenCookie = getCookie('hix')
    console.log(tokenCookie);
    if (tokenCookie || tokenCookie.trim().length > 0) {
        return;
    } else {
        alert("eoror")
    }
}