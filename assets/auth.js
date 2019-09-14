

// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        // referance database
db.collection('recipes').get().then(snapshot => {
    // console.log(snapshot.docs);
    extraAdds(snapshot.docs);
});
        // console.log('user logged in: ', user)
    } else {
        extraAdds([]);
        // console.log('user logged out');
    }
})
//  sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get new user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // console.log (email, password);

    //  sign up the user (asyncronous task that takes time to complete)
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user)
        
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
});

// user log out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        // console.log('user signed out');
    })
})

// user log in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user)

        // close modal and reset form fields
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})