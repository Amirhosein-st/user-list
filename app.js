// Get references to the HTML elements
const nameInput = document.querySelector('.name-add');
const familyInput = document.querySelector('.Family-add');
const phoneInput = document.querySelector('.Phone-add');
const lastVisitInput = document.querySelector('.Visit-add');

const addUserBtn = document.querySelector('.add-user-btn');
const userList = document.querySelector('tbody');

// Load existing users from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Render the existing users
renderUsers();

// Add event listener to the "ثبت کاربر" button
addUserBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the user input values
    const name = nameInput.value.trim();
    const family = familyInput.value.trim();
    const phone = phoneInput.value.trim();
    const lastVisit = lastVisitInput.value.trim();

    // Validate the user input values
    if (name || family || phone || lastVisit) {
        // Create a new user object
        const newUser = {
            name,
            family,
            phone,
            lastVisit
        };

        // Add the new user to the users array
        users.push(newUser);

        // Save the users array to local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Clear the user input fields
        nameInput.value = '';
        familyInput.value = '';
        phoneInput.value = '';
        lastVisitInput.value = '';

        // modal detail
        document.querySelector('.add-user-modal').style.display = "none";
    }

    else if (!name || !family || !phone || !lastVisit) {
        alert('Please enter all the required fields!');
        return;
    }

    // Render the updated user list
    renderUsers();
});

// btn add user top
document.querySelector('.show-user-add-modal').onclick = function () {
    document.querySelector('.add-user-modal').style.display = "flex";
    document.querySelector('.canacle-btn').style.display = "block";

    document.querySelector('.add-user-h1').style.display = "block";
    document.querySelector('.edit-user-h1').style.display = "none";
}
// cancle modal
document.querySelector('.canacle-btn').onclick = function () {
    document.querySelector('.add-user-modal').style.display = "none";
}

function renderUsers() {
    // Clear the existing user list
    userList.innerHTML = '';
  
    // Render the updated user list
    users.forEach((user, index) => {
      const row = document.createElement('tr');
      const rowNumber = index + 1; // calculate the row number
      row.innerHTML = `
        <td>${rowNumber}</td>
        <td>${user.name}</td>
        <td>${user.family}</td>
        <td>${user.phone}</td>
        <td>${user.lastVisit}</td>
        <td>
          <button class="edit-user-btn    badge badge-primary-lighten" data-index="${index}"> <i class="fa-solid fa-pen-to-square"></i> Edit</button>
        </td>
        <td>
          <button class="delete-user-btn    badge badge-danger-lighten" data-index="${index}"> <i class="fa-solid fa-trash"></i> Delete</button>
        </td>
      `;
      userList.appendChild(row);
      // save the user information along with the row number in local storage
      localStorage.setItem(`user_${rowNumber}`, JSON.stringify(user));
    });

    // Add event listeners to the edit buttons
    const editUserBtns = document.querySelectorAll('.edit-user-btn');
    editUserBtns.forEach(editUserBtn => {
        editUserBtn.addEventListener('click', (event) => {
            event.preventDefault();

            // modal detail
            document.querySelector('.add-user-modal').style.display = "flex";
            document.querySelector('.canacle-btn').style.display = "none";

            document.querySelector('.add-user-h1').style.display = "none";
            document.querySelector('.edit-user-h1').style.display = "block";

            // Get the index of the user to be edited
            const index = parseInt(editUserBtn.getAttribute('data-index'));

            // Get the user object to be edited
            const userToEdit = users[index];

            // Populate the user input fields with the user object values
            nameInput.value = userToEdit.name;
            familyInput.value = userToEdit.family;
            phoneInput.value = userToEdit.phone;
            lastVisitInput.value = userToEdit.lastVisit;

            // Remove the user from the users array
            users.splice(index, 1);

            // Save the updated users array to local storage
            localStorage.setItem('users', JSON.stringify(users));

            // Render the updated user list
            renderUsers();
        });
    });

    // Add event listeners to the delete buttons
    const deleteUserBtns = document.querySelectorAll('.delete-user-btn');
    deleteUserBtns.forEach(deleteUserBtn => {
        deleteUserBtn.addEventListener('click', (event) => {
            event.preventDefault();

            // Get the index of the user to be deleted
            const index = parseInt(deleteUserBtn.getAttribute('data-index'));

            // Show a confirmation dialog before deleting the user
            const shouldDelete = confirm("Are you sure you want to delete this user?");

            if (shouldDelete) {
                // Remove the user from the users array
                users.splice(index, 1);

                // Save the updated users array to local storage
                localStorage.setItem('users', JSON.stringify(users));

                // Render the updated user list
                renderUsers();
            }
        });
    });
}


const nameSearchInput = document.querySelector('.name-search');
const familySearchInput = document.querySelector('.Family-search');
const phoneSearchInput = document.querySelector('.Phone-search');

nameSearchInput.addEventListener('input', () => {
    const nameSearchValue = nameSearchInput.value.trim().toLowerCase();

    users.forEach((user, index) => {
        const name = user.name.toLowerCase();

        if (name.includes(nameSearchValue)) {
            // Show the user in the table
            userList.children[index].style.display = '';
        } else {
            // Hide the user from the table
            userList.children[index].style.display = 'none';
        }
    });
});

familySearchInput.addEventListener('input', () => {
    const familySearchValue = familySearchInput.value.trim().toLowerCase();

    users.forEach((user, index) => {
        const family = user.family.toLowerCase();

        if (family.includes(familySearchValue)) {
            // Show the user in the table
            userList.children[index].style.display = '';
        } else {
            // Hide the user from the table
            userList.children[index].style.display = 'none';
        }
    });
});
phoneSearchInput.addEventListener('input', () => {
    const phoneSearchValue = phoneSearchInput.value.trim().toLowerCase();

    users.forEach((user, index) => {
        const phone = user.phone;

        if (phone.includes(phoneSearchValue)) {
            // Show the user in the table
            userList.children[index].style.display = '';
        } else {
            // Hide the user from the table
            userList.children[index].style.display = 'none';
        }
    });
});

