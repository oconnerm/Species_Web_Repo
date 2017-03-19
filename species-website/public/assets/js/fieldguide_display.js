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

  // TO DO: Move this to setInterval function

  var storage = firebase.storage();
  var storageRef = storage.ref();
  var tangRef = storageRef.child('field_guide/flower.jpg');

  tangRef.getDownloadURL().then(function(url) {
    document.querySelector('img').src = url;    
  })


}());

setInterval(function (){
  //var display = document.getElementById('display');

  var display_species2 = document.getElementById("display_species");
  var display_common_name2 = document.getElementById("display_common_name");
  var display_family_name2 = document.getElementById("display_family_name");
  var display_synonyms2 = document.getElementById("display_synonyms");
  var display_growth_form2 = document.getElementById("display_growth_form");
  var display_folower_color2 = document.getElementById("display_folower_color");
  var display_flower_shape2 = document.getElementById("display_flower_shape");
  var display_habitat2 = document.getElementById("display_habitat");
  var display_leaf_arrangement2 = document.getElementById("display_leaf_arrangement");
  var display_leaf_shape2 = document.getElementById("display_leaf_shape");
  var display_petal_number2 = document.getElementById("display_petal_number");
  var display_notes2 = document.getElementById("display_notes");
  var display_photo_credit2 = document.getElementById("display_photo_credit");

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

  if(display_species2.textContent === display_species.innerHTML){}
  else
  {
    display_species2.textContent = display_species.innerHTML;
    display_common_name2.textContent = display_common_name.innerHTML;
    display_family_name2.textContent = display_family_name.innerHTML;
    display_synonyms2.textContent = display_synonyms.innerHTML;
    display_growth_form2.textContent = display_growth_form.innerHTML;
    display_folower_color2.textContent = display_folower_color.innerHTML;
    display_flower_shape2.textContent = display_flower_shape.innerHTML;
    display_habitat2.textContent = display_habitat.innerHTML;
    display_leaf_arrangement2.textContent = display_leaf_arrangement.innerHTML;
    display_leaf_shape2.textContent = display_leaf_shape.innerHTML;
    display_petal_number2.textContent = display_petal_number.innerHTML;
    display_notes2.textContent = display_notes.innerHTML;
    display_photo_credit2.textContent = display_photo_credit.innerHTML;
  }

/*
  var wantedOrder = firebase.database().ref('orders').equalTo("My Input Text");
  
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


        var h5 = document.createElement('h5');
        var text2 = document.createTextNode(commonName);
        h5.appendChild(text2);
        document.body.appendChild(h5);

    });

  });
  */

  },50);


