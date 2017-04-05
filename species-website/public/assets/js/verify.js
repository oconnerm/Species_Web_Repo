(function() {

  // Get elements

  const show_verify_text = document.getElementById('show_verify_text');
  const verify_text = document.getElementById('verify_text');
  const email_login_text = document.getElementById('email_login_text');
  const password_login_text = document.getElementById('password_login_text');
  const email_of_user_text = document.getElementById('email_of_user_text');
  const email_verify_text = document.getElementById('email_verify_text');
  const submit_btn = document.getElementById('submit_btn');

  // Firebase 
  const auth = firebase.auth();

  // Add login event
  submit_btn.addEventListener('click', e => {

    // get email and pass
    const email = email_login_text.value;
  	const pass = password_login_text.value;

    const verify_email = email_verify_text.value;

    // TRICKY!!!!! Updating the personal users reseacher value

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));

    firebase.auth().onAuthStateChanged(firebaseUser => {

      if(firebaseUser){

        var update_reseacher = firebase.database().ref("speciesid/accounts/").child(firebaseUser.uid);

        update_reseacher.once('value').then(function(snapshot) {
          var researcher_val = snapshot.val().researcher;
          console.log(snapshot.val().researcher);

          researcher_val = researcher_val + 1;
          console.log("researcher_val = " + researcher_val);

          firebase.database().ref("speciesid/accounts").child(firebaseUser.uid).update({
            "researcher": researcher_val
          });

        });

        show_verify_text.classList.remove('hide');

        verify_text.classList.add('hide');
        email_login_text.classList.add('hide');
        password_login_text.classList.add('hide');
        email_of_user_text.classList.add('hide');
        email_verify_text.classList.add('hide');
        submit_btn.classList.add('hide');

        firebase.auth().signOut();

      }

    });

  });

}());
