/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

(function() {

  document.body.style.backgroundColor = "#384452";

  var forbs_query = firebase.database().ref("speciesid/field_guide/forbs").orderByKey();
  forbs_query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;

        //console.log(species_name);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          alert(speciesName);
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

  var graminoids_query_one = firebase.database().ref("speciesid/field_guide/graminoids/cyperaceae").orderByKey();
  graminoids_query_one.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;

        //console.log(species_name);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          alert(speciesName);
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

  var graminoids_query_two = firebase.database().ref("speciesid/field_guide/graminoids/juncaceae").orderByKey();
  graminoids_query_two.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;

        //console.log(species_name);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          alert(speciesName);
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

  var graminoids_query_three = firebase.database().ref("speciesid/field_guide/graminoids/poaceae").orderByKey();
  graminoids_query_three.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;

        //console.log(species_name);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          alert(speciesName);
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

  var woody_query_one = firebase.database().ref("speciesid/field_guide/woody/deciduous").orderByKey();
  woody_query_one.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;

        //console.log(species_name);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          alert(speciesName);
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

  var woody_query_two = firebase.database().ref("speciesid/field_guide/woody/needle").orderByKey();
  woody_query_two.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;

        //console.log(species_name);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          alert(speciesName);
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

}());
