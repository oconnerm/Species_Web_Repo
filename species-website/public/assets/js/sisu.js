'use strict';

// Initializes signinSignup.
function signinSignup() {

  this.checkSetup();

  // Shortcuts to DOM Elements.
  this.userPic = document.getElementById('user-pic');
  this.userName = document.getElementById('user-name');
  this.signInButton = document.getElementById('btnLogin');
  this.signOutButton = document.getElementById('btnLogout');
  this.signUpButton = document.getElementById('btnSignUp');

  this.initFirebase();
}

  // Add login event
  signInButton.addEventListener('click', e => {

        // get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

          this.auth = firebase.auth();


        // Sign in
        const promise = auth.signInWithEmailAndPassword(txtEmail.value, pass);
        promise.catch(e => alert(e.message));

  });

  // Add logout event
  signOutButton.addEventListener('click', e => { 
        firebase.auth().signOut();
  });

  // Add signup event
  signUpButton.addEventListener('click', e => {

        // get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => alert(e.message));
  });

// Sets up shortcuts to Firebase features and initiate firebase auth.
signinSignup.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
signinSignup.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.
    var profilePicUrl = user.photoURL;
    var userName = user.displayName;

    // Write to database the users UUID and Researcher : false
    //var currentUser = this.auth.currentUser;
    //this.messagesRef.push({
    //  name: currentUser.displayName,
    //  imageUrl: FriendlyChat.LOADING_IMAGE_URL,
    //  photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
    //});

    // Set the user's profile pic and name.
    this.userPic.style.backgroundImage = 'url(' + (profilePicUrl || 'assets/img/profile_placeholder.png') + ')';
    this.userName.textContent = userName;

    // Show user's profile and sign-out button.
    this.userName.removeAttribute('hidden');
    this.userPic.removeAttribute('hidden');
    this.signOutButton.removeAttribute('hidden');

    // Hide sign-in/sign-up button.
    this.signInButton.setAttribute('hidden', 'true');
    this.signUpButton.setAttribute('hidden', 'true');

  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    this.userName.setAttribute('hidden', 'true');
    this.userPic.setAttribute('hidden', 'true');
    this.signOutButton.setAttribute('hidden', 'true');

    // Show sign-in button.
    this.signInButton.removeAttribute('hidden');
    this.signUpButton.removeAttribute('hidden');
  }
};


// Checks that the Firebase SDK has been correctly setup and configured.
signinSignup.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Cloud Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
  window.friendlyChat = new signinSignup();
};