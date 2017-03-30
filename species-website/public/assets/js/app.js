(function() {

  // Get elements
  const forgot_password_text = document.getElementById('forgot_password_text');
  const forgot_password_input = document.getElementById('forgot_password_input');
  const forgot_password_submit = document.getElementById('forgot_password_submit');

  const have_account_txt = document.getElementById('have_account_txt');
  const txtEmail_login = document.getElementById('txtEmail_login');
  const txtPassword_login = document.getElementById('txtPassword_login');
  const btnLogin = document.getElementById('btnLogin');
  const forgot_password_btn = document.getElementById('forgot_password_btn');

  const dont_have_account_txt = document.getElementById('dont_have_account_txt');
  const txtUsername_create = document.getElementById('txtUsername_create');
  const txtEmail_create = document.getElementById('txtEmail_create');
  const txtPassword_create = document.getElementById('txtPassword_create');
  const txtPassword_create_2 = document.getElementById('txtPassword_create_2');
  const btnSignUp = document.getElementById('btnSignUp');

  const userName = document.getElementById('user-name');
  const welcome_txt = document.getElementById('welcome_txt');
  const reset_password_txt = document.getElementById('reset_password_txt');
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
  reset_password_txt.addEventListener('click', e => {

    const email = userName.textContent;
    const promise = auth.sendPasswordResetEmail(email);

    alert("Please check your email");

  });

  // Add reset password
  forgot_password_submit.addEventListener('click', e => {

    const email = forgot_password_input.value;
    const promise = auth.sendPasswordResetEmail(email);

    // TODO: Catch error when typing if email
    //promise.catch(e => alert(e.message));

    alert("Please check your email");

    /*
    promise.catch(e => {
      if (e.message) {
        alert(e.message)
      } else {
        alert("Please check your email");
      }
    });
    */

  });

    // Add reset password
  forgot_password_btn.addEventListener('click', e => {

    forgot_password_text.classList.remove('hide');
    forgot_password_input.classList.remove('hide');
    forgot_password_submit.classList.remove('hide');

    userName.classList.add('hide');
    reset_password_txt.classList.add('hide');
    verify_researcher_txt.classList.add('hide');
    btnLogout.classList.add('hide');

    have_account_txt.classList.add('hide');
    txtEmail_login.classList.add('hide');
    txtPassword_login.classList.add('hide');
    btnLogin.classList.add('hide');
    forgot_password_btn.classList.add('hide');

    dont_have_account_txt.classList.add('hide');
    txtUsername_create.classList.add('hide');
    txtEmail_create.classList.add('hide');
    txtPassword_create.classList.add('hide');
    txtPassword_create_2.classList.add('hide');
    btnSignUp.classList.add('hide');

  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){

    if (firebaseUser.emailVerified) {
      console.log('Email is verified');

      // Variables for user name and picture
      const user = txtUsername_create.value;
      const display_Name = firebaseUser.email;
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
      userName.textContent = display_Name;

      console.log(firebaseUser);

      userName.classList.remove('hide');
      welcome_txt.classList.remove('hide');
      reset_password_txt.classList.remove('hide');
      verify_researcher_txt.classList.remove('hide');
      btnLogout.classList.remove('hide');

      have_account_txt.classList.add('hide');
      txtEmail_login.classList.add('hide');
      txtPassword_login.classList.add('hide');
      btnLogin.classList.add('hide');
      forgot_password_btn.classList.add('hide');

      dont_have_account_txt.classList.add('hide');
      txtUsername_create.classList.add('hide');
      txtEmail_create.classList.add('hide');
      txtPassword_create.classList.add('hide');
      txtPassword_create_2.classList.add('hide');
      btnSignUp.classList.add('hide');

    } else {
      // Send email verification
      firebaseUser.sendEmailVerification(); 

      txtUsername_create.value = "Username";
      txtEmail_create.value = "Email";
      txtPassword_create.value = "Password";
      txtPassword_create_2.value = "Retype";

      alert("Please check your email for verification");

    }

	} else {

	  console.log('not logged in');

    userName.classList.add('hide');
    reset_password_txt.classList.add('hide');
    verify_researcher_txt.classList.add('hide');
	  btnLogout.classList.add('hide');

    have_account_txt.classList.remove('hide');
    txtEmail_login.classList.remove('hide');
    txtPassword_login.classList.remove('hide');
    btnLogin.classList.remove('hide');
    forgot_password_btn.classList.remove('hide');

    dont_have_account_txt.classList.remove('hide');
    txtUsername_create.classList.remove('hide');
    txtEmail_create.classList.remove('hide');
    txtPassword_create.classList.remove('hide');
    txtPassword_create_2.classList.remove('hide');
    btnSignUp.classList.remove('hide');
	  }
  });

}());
