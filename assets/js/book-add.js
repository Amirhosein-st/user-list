function submitForm() {
    const formData = new FormData(document.getElementById("book-form"));
    formData.append("api_token", "5whPujwod0ySAZmBG4B2h0TF0cZVDJt3bbvqsBnd8a6ACBRoX4l87UmvZYkyZhBQCuxzGagFwlO6ZyolGs2dJhHhr33XAutKEw8O");

    fetch("https://book.afarokhru.ir/api/v1/admin/books/create", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}