// I am not all too familiar with Java or JavaScript so I watched a youtube tutorial on how to create a cookie

function setCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // Cookie expires in 7 days
    const expires = "expires=" + d.toUTCString();
    document.cookie = "username=User; " + expires + "; path=/";
    displayCookie();
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function displayCookie() {
    const user = getCookie("username");
    if (user !== "") {
        document.getElementById("cookieDisplay").textContent = "Welcome back, " + user + "!";
    } else {
        document.getElementById("cookieDisplay").textContent = "No cookie set. Click the button to set a cookie.";
    }
}

window.onload = function() {
    displayCookie();
}
