document.addEventListener("DOMContentLoaded", () => {
    checkAuth()
})

function checkAuth() {
    function get_Cookie(cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }


    let tokenCookie = get_Cookie('hix')
    console.log(tokenCookie);
    if (tokenCookie || tokenCookie.trim().length > 0) {
        return;
    } else {
        window.location.href = "login.html"
    }


}

