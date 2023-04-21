function submitForm() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = {
        name: name,
        email: email,
        password: password
    };

    fetch("https://book.afarokhru.ir/api/v1/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}