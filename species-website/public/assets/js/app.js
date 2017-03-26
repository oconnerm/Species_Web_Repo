(function() {

  // Get elements
  const have_account_txt = document.getElementById('have_account_txt');
  const txtEmail_login = document.getElementById('txtEmail_login');
  const txtPassword_login = document.getElementById('txtPassword_login');
  const btnLogin = document.getElementById('btnLogin');
  const forget_password_txt = document.getElementById('forget_password_txt');

  const dont_have_account_txt = document.getElementById('dont_have_account_txt');
  const txtUsername_create = document.getElementById('txtUsername_create');
  const txtEmail_create = document.getElementById('txtEmail_create');
  const txtPassword_create = document.getElementById('txtPassword_create');
  const txtPassword_create_2 = document.getElementById('txtPassword_create_2');
  const btnSignUp = document.getElementById('btnSignUp');

  const userName = document.getElementById('user-name');
  const reset_assword_txt = document.getElementById('reset_assword_txt');
  const change_email_txt = document.getElementById('change_email_txt');
  const verify_researcher_txt = document.getElementById('verify_researcher_txt');
  const btnLogout = document.getElementById('btnLogout');

  // Firebase 
  const auth = firebase.auth();
  const database = firebase.database(); // root of database
  const storage = firebase.storage();

  // Add login event
  btnLogin.addEventListener('click', e => {

    // get email and pass
    const email = txtEmail_login.value;
  	const pass = txtPassword_login.value;

  	// Sign in
  	const promise = auth.signInWithEmailAndPassword(email, pass);
  	promise.catch(e => alert(e.message));

  });

  // Add logout event
  btnLogout.addEventListener('click', e => { 
        firebase.auth().signOut();
  });

  // Add signup event
  btnSignUp.addEventListener('click', e => {

    // get email and pass
    const email = txtEmail_create.value;
    //const auth = firebase.auth();

    function checkPasswordMatch() {
      const pass = txtPassword_create.value;
      const pass_2 = txtPassword_create_2.value;
      if (pass != pass_2) {
        // Tell user passwords don't match
        alert("Your passwords don't match");
      } else {
        // Sign up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => alert(e.message));
      }
    }

    checkPasswordMatch();

  });

  // Add reset password
  forget_password_txt.addEventListener('click', e => {

    function handleResetPassword(auth, actionCode) {
      var accountEmail;
      // Verify the password reset code is valid.
      auth.verifyPasswordResetCode(actionCode).then(function(email) {
        var accountEmail = email;

        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.

        // Save the new password.
        auth.confirmPasswordReset(actionCode, newPassword).then(function(resp) {
          // Password reset has been confirmed and new password updated.

          // TODO: Display a link back to the app, or sign-in the user directly
          // if the page belongs to the same domain as the app:
          auth.signInWithEmailAndPassword(accountEmail, newPassword);

        }).catch(function(error) {
          // Error occurred during confirmation. The code might have expired or the
          // password is too weak.
        });
      }).catch(function(error) {
        // Invalid or expired action code. Ask user to try to reset the password
        // again.
      });
    }

    //handleResetPassword(auth, actionCode);

  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){

    // Variables for user name and picture
    const user = txtUsername_create.value;
    const displayName = firebaseUser.email;
    const uid = firebaseUser.uid; // get user uid

    // Write to database when user signs up
    var ref = firebase.database().ref("speciesid")
    function writeUserData(uid) {
      ref.child("accounts").child(uid).update({
          "researcher": false,
          "username": user
      });
    }
    writeUserData(uid);

    // Set user name
    userName.textContent = "Welcome " + displayName + "!";

	  console.log(firebaseUser);

    userName.style.display='block';
	  reset_assword_txt.style.display='block';
    change_email_txt.style.display='block';
    verify_researcher_txt.style.display='block';
    btnLogout.style.display='block';

    have_account_txt.classList.add('hide');
	  txtEmail_login.classList.add('hide');
	  txtPassword_login.classList.add('hide');
    btnLogin.classList.add('hide');
    forget_password_txt.classList.add('hide');

    dont_have_account_txt.classList.add('hide');
    txtUsername_create.classList.add('hide');
    txtEmail_create.classList.add('hide');
    txtPassword_create.classList.add('hide');
    txtPassword_create_2.classList.add('hide');
    btnSignUp.classList.add('hide');

	} else {

	  console.log('not logged in');

    userName.style.display='none';
    reset_assword_txt.style.display='none';
    change_email_txt.style.display='none';
    verify_researcher_txt.style.display='none';
	  btnLogout.classList.style.display='none';

    have_account_txt.classList.remove('hide');
    txtEmail_login.classList.remove('hide');
    txtPassword_login.classList.remove('hide');
    btnLogin.classList.remove('hide');
    forget_password_txt.classList.remove('hide');

    dont_have_account_txt.classList.remove('hide');
    txtUsername_create.classList.remove('hide');
    txtEmail_create.classList.remove('hide');
    txtPassword_create.classList.remove('hide');
    txtPassword_create_2.classList.remove('hide');
    btnSignUp.classList.remove('hide');
	  }
  });

}());
