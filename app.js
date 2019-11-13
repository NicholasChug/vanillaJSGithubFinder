// Init Github Class
const github = new Github;

// Init UI Class
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if (userText !== "") {
        // Make HTTP Call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert that User is not Found
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // Clear the Profile
        ui.clearProfile();
    }
})