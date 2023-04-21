let loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", login);

function login(e) {
    e.preventDefault();

    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;

    fetch("https://book.afarokhru.ir/api/v1/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.api_token) {
                document.cookie = `api_token=${data.api_token}; path=/`;
                location.replace("../../apps-ecommerce-customers.html");
            } else {
                console.error("Login failed:", data);
            }
        })
        .catch(error => console.error("Login failed:", error));
}

function checkCookie() {
    let api_token = getCookie("api_token");
    if (!api_token) {
        location.replace("../../pages-login.html");
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}





