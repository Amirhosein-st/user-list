
let page = 1;

function loadUsers() {
    fetch(`https://book.afarokhru.ir/api/v1/admin/books?api_token=XWIEW9EXAMnxbhmgWVBCd7QEBF4e11uULvj1Tp2rxRNtQAijnfdMCNQxhkFfwEvmmruJZOS7PVFfk775hmgyqgJA6NbR3kZUVZWz&page=${page}`)
        .then(response => response.json())
        .then(data => {
            let books = data.data;
            let list = "";
            for (let i = 0; i < books.length; i++) {
                list += `
                <tr>
                    <td>
                    ${books[i].id}
                    </td>
                    <td>
                        <img src=""
                            alt="book-img" title="contact-img" class="rounded me-3"
                            height="48">
                            
                        <p class="m-0 d-inline-block align-middle font-16">
                            <a href="apps-ecommerce-products-details.html"
                                class="text-body">${books[i].persian_name}</a>
                        </p>
                    </td>
                    <td>
                    ${books[i].english_name}
                    </td>
                    <td>
                    ${books[i].writer}
                    </td>
                    <td>
                    ${books[i].translator}
                    </td>
                    <td>
                    ${books[i].category}
                    </td>
                    <td>
                    ${books[i].summary}
                    </td>
                    <td>
                    ${books[i].slug}
                    </td>
                    <td>
                    ${books[i].status}
                    </td>
                    <td>
                    ${books[i].created_at}
                    </td>
                    <td>
                    ${books[i].updated_at}
                    </td>

                    <td class="table-action">
                        <a href="javascript:void(0);" class="action-icon"> <i
                                class="mdi mdi-eye"></i></a>
                        <a href="#modal" class="action-icon"> <i
                                class="fa-solid fa-pen-to-square" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"></i></a>
                        <a href="javascript:void(0);" class="action-icon"> <i
                                class="fa-solid fa-trash" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"></i></a>
                    </td>
                </tr>`;}

            document.getElementById("book-list").innerHTML = list;
        })
}

document.getElementById("next-page").addEventListener("click", function () {
    page++;
    loadUsers();
});
document.getElementById("perv-page").addEventListener("click", function () {
    page--;
    loadUsers();
});

loadUsers();