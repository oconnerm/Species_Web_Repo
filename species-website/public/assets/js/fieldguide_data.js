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

  //alert(display_species);

/*

          <h2 id="display_species" style="visibility: hidden;">Achillea millefolium<h2>
          <h2 id="display_common_name" style="visibility: hidden;">Garret common yarrow<h2>
          <h2 id="display_family_name" style="visibility: hidden;">Asteraceae<h2>
          <h2 id="display_synonyms" style="visibility: hidden;">Achillea lanulosa<h2>
          <h3 id="display_growth_form" style="visibility: hidden;">forb<h2>
          <h3 id="display_folower_color" style="visibility: hidden;">white<h2>
          <h3 id="display_flower_shape" style="visibility: hidden;">composite<h2>
          <h3 id="display_habitat" style="visibility: hidden;">dry meadow and wet meadow<h2>
          <h3 id="display_leaf_arrangment" style="visibility: hidden;">alternate<h2>
          <h3 id="display_leaf_shape" style="visibility: hidden;">other<h2>
          <h3 id="display_petal_number" style="visibility: hidden;">NA<h2>
          <h4 id="display_notes" style="visibility: hidden;">NA<h2>
          <h4 id="display_photo_credit" style="visibility: hidden;">JG Smith<h2>

*/

  var forbs_query = firebase.database().ref("speciesid/field_guide/forbs").orderByKey();
  forbs_query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {

        var speciesName = childSnapshot.val().species_name;
        var commonName = childSnapshot.val().common_name;
        var familyName = childSnapshot.val().family_name;
        var synonymsName = childSnapshot.val().synonyms;
        var growthForm = childSnapshot.val().growth_form;
        var flowerColor = childSnapshot.val().flower_color;
        var flowerShape = childSnapshot.val().flower_shape;
        var habitatName = childSnapshot.val().habitat;
        var leafArrangement = childSnapshot.val().leaf_arrangement;
        var leafShapeFilter = childSnapshot.val().leaf_shape_filter;
        var petalNumber = childSnapshot.val().petal_number;
        var notesName = childSnapshot.val().notes;
        var photoCredit = childSnapshot.val().photo_credit;

        //var plantCode = getParent(childSnapshot);

        var h6 = document.createElement('h6');
        var text = document.createTextNode(speciesName);
        h6.appendChild(text);
        document.body.appendChild(h6);

        h6.onclick = function () {
          var display_species = parent.document.getElementById("display_species");
          var display_common_name = parent.document.getElementById("display_common_name");
          var display_family_name = parent.document.getElementById("display_family_name");
          var display_synonyms = parent.document.getElementById("display_synonyms");
          var display_growth_form = parent.document.getElementById("display_growth_form");
          var display_folower_color = parent.document.getElementById("display_folower_color");
          var display_flower_shape = parent.document.getElementById("display_flower_shape");
          var display_habitat = parent.document.getElementById("display_habitat");
          var display_leaf_arrangement = parent.document.getElementById("display_leaf_arrangement");
          var display_leaf_shape = parent.document.getElementById("display_leaf_shape");
          var display_petal_number = parent.document.getElementById("display_petal_number");
          var display_notes = parent.document.getElementById("display_notes");
          var display_photo_credit = parent.document.getElementById("display_photo_credit");

          display_species.textContent = speciesName;
          display_common_name.textContent = commonName;
          display_family_name.textContent = familyName;
          display_synonyms.textContent = synonymsName;
          display_growth_form.textContent = growthForm;
          display_folower_color.textContent = flowerColor;
          display_flower_shape.textContent = flowerShape;
          display_habitat.textContent = habitatName;
          display_leaf_arrangement.textContent = leafArrangement;
          display_leaf_shape.textContent = leafShapeFilter;
          display_petal_number.textContent = petalNumber;
          display_notes.textContent = notesName;
          display_photo_credit.textContent = photoCredit;          
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
          var display_species = parent.document.getElementById("display_species");
          display_species.textContent = speciesName;
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
          var display_species = parent.document.getElementById("display_species");
          display_species.textContent = speciesName;
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
          var display_species = parent.document.getElementById("display_species");
          display_species.textContent = speciesName;
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
          var display_species = parent.document.getElementById("display_species");
          display_species.textContent = speciesName;
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
          var display_species = parent.document.getElementById("display_species");
          display_species.textContent = speciesName;
        };

        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });

}());
