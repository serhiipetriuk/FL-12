const user = 'user@gmail.com';
const admin = 'admin@gmail.com';
const passMinLength = 5;
const newPassMinLength = 6;

let email = prompt('Enter your email');
if (email === '' || email === null) {
    alert('Canceled');
} else if (email === user) {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password === 'UserPass') {
        if (confirm('Do you want to change your password?')) {

            let oldpassword = prompt('Enter your old password');

            if (oldpassword === '' || oldpassword === null) {
                alert('You have failed the change.');
            } else if (oldpassword === 'UserPass') {

                let newpass = prompt('Enter new password');
                if (newpass === '' || newpass === null) {
                    alert('Canceled');
                } else if (newpass.length < newPassMinLength) {
                    alert('It’s too short password. Sorry.')
                } else {
                    let newpassConfirm = prompt('Enter new password again');
                    if (newpassConfirm === newpass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }

        } else {
            alert('You have failed the change');
        }
    }
} else if (email === admin) {
    let password = prompt('Enter your password');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (password === 'AdminPass') {
        if (confirm('Do you want to change your password?')) {

            let oldpassword = prompt('Enter your old password');

            if (oldpassword === '' || oldpassword === null) {
                alert('You have failed the change.');
            } else if (password === 'AdminPass') {

                let newpass = prompt('Enter new password');
                if (newpass === '' || newpass === null) {
                    alert('Canceled');
                } else if (newpass.length < newPassMinLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newpassConfirm = prompt('Enter new password again');
                    if (newpassConfirm === newpass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else if (email.length < passMinLength) {
    alert("I don't know any emails having name length less than 5 symbols");
} else {
    alert('I don’t know you');
}