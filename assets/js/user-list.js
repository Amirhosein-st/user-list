
let page = 1;

function loadUsers() {
    fetch(`https://book.afarokhru.ir/api/v1/admin/users?api_token=Djc63D9xb2ZxXz2DEZNBvPoVMiZ8lcy4XScnjdpaRQBrg45TW1W01NAXiyjNHr9WA0jsirilyfGycyoJkPx2U7fMLFTsexZPTwbf&page=${page}`)
        .then(response => response.json())
        .then(data => {
            let users = data.data;
            let list = "";
            for (let i = 0; i < users.length; i++) {
                list += `
                <tr>
                    <td>
                        <p>${users[i].id}</p>
                    </td>
                    <td class="table-user">
                        <a href="javascript:void(0);" class="text-body fw-semibold">${users[i].name}</a>
                    </td>
                     <td>
                         937-330-1634
                     </td>
                     <td>
                        ${users[i].email}
                     </td>
                     <td>
                         New York
                     </td>
                     <td>
                        ${users[i].created_at}
                     </td>
                     <td>
                        ${users[i].status}
                     </td>

                     <td>
                         <a href="#modal" class="action-icon"> <i
                                 class="fa-solid fa-pen-to-sqdata-bs-toggle="modal"
                                 data-bs-target="#exampleModal"></i></a>
                          <a href="javascript:void(0);" class="action-i<i
                                class="fa-solid fa-tdata-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"></i></a>
                    </td>
                </tr>
                `;
            }
            document.getElementById("user-list").innerHTML = list;
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