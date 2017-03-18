(function() {

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  const userAvatar = document.getElementById('userAvatar');

  const userName = document.getElementById('user-name');

  // Firebase 
  const auth = firebase.auth();
  const database = firebase.database(); // root of database
  const storage = firebase.storage();

  // Add login event
  btnLogin.addEventListener('click', e => {

        // get email and pass
        const email = txtEmail.value;
      	const pass = txtPassword.value;

      	// Sign in
      	const promise = auth.signInWithEmailAndPassword(txtEmail.value, pass);
      	promise.catch(e => alert(e.message));

  });

  // Add logout event
  btnLogout.addEventListener('click', e => { 
        firebase.auth().signOut();
  });

  // Add signup event
  btnSignUp.addEventListener('click', e => {

        // get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => alert(e.message));

  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser){

    // Variables for user name and picture
    const displayName = firebaseUser.email;
    const uid = firebaseUser.uid; // get user uid

    // Write to database when user signs up
    var ref = firebase.database().ref("speciesid")
    function writeUserData(uid) {
      ref.child("accounts").child(uid).update({
          "researcher": false
      });
    }
    writeUserData(uid);

    // Set user name
    userName.textContent = "Welcome, " + displayName;

	  console.log(firebaseUser);

    userName.classList.remove('hide');
	  btnLogout.classList.remove('hide');
    userAvatar.classList.remove('hide');

	  btnSignUp.classList.add('hide');
	  btnLogin.classList.add('hide');
	  txtEmail.classList.add('hide');
	  txtPassword.classList.add('hide');

	} else {

	  console.log('not logged in');

    userName.classList.add('hide');
	  btnLogout.classList.add('hide');
    userAvatar.classList.add('hide');

	  btnSignUp.classList.remove('hide');
    btnLogin.classList.remove('hide');
	  txtEmail.classList.remove('hide');
    txtPassword.classList.remove('hide');
	  }
  });

}());
