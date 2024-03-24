const hixConstants = {
    BASE_URL: 'https://portal.hixdm.com',
    USER_PLAN_ID: -1
};

const api = axios.create({
    baseURL: hixConstants.BASE_URL
});

// setCookie ------------------------------------
// setCookie ------------------------------------
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// getCookie
function getCookie(cookieName) {
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
// set-----------------------------------------
// set-----------------------------------------

function getRequest(route) {
    return api.get(`${hixConstants.BASE_URL}/${route}`, {
        headers: {
            'Authorization': `Bearer ` + getCookie('hix'),
            'Content-Type': 'application/json',
        },
    })
}

function postRequest(route, body) {
    return api.post(`${hixConstants.BASE_URL}/${route}`, body, {
        headers: {
            'Authorization': `Bearer ` + getCookie('hix'),
            'Content-Type': 'application/json',
        }
    })
}

function putRequest(route, body) {
    return api.put(`${hixConstants.BASE_URL}/${route}`, body, {
        headers: {
            'Authorization': `Bearer ` + getCookie('hix'),
            'Content-Type': 'application/json',
        }
    })
}

function delRequest(route) {
    return api.delete(`${hixConstants.BASE_URL}/${route}`, {
        headers: {
            'Authorization': `Bearer ` + getCookie('hix'),
            'Content-Type': 'application/json',
        }
    })
}


async function getCurrentUser() {
    let result = -1;

    if (hixConstants.USER_PLAN_ID > -1) {
        console.log(hixConstants.USER_PLAN_ID);
        const response = await getRequest(`api/user_plan/current`)
        if (response.data.data.user) {
            console.log(response.data.data.user);
            if (Number(response.data.data.user.id) > 0) {
                hixConstants.USER_PLAN_ID = Number(response.data.data.user_plan_id);
                result = Number(response.data.data.user_plan_id);
            }
            else {
                hixConstants.USER_PLAN_ID = -1;
                result = -1;
            }
        }
        else {
            hixConstants.USER_PLAN_ID = -1;
            result = -1;
        }
    } else {
        result = hixConstants.USER_PLAN_ID
    }
    console.log(result);
    return result;
}



