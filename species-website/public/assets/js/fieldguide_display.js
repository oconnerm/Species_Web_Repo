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
  var display_flower_color2 = document.getElementById("display_flower_color");
  var display_flower_shape2 = document.getElementById("display_flower_shape");
  var display_habitat2 = document.getElementById("display_habitat");
  var display_leaf_arrangement2 = document.getElementById("display_leaf_arrangement");
  var display_leaf_shape_filter2 = document.getElementById("display_leaf_shape_filter");
  var display_petal_number2 = document.getElementById("display_petal_number");
  var display_notes2 = document.getElementById("display_notes");
  var display_photo_credit2 = document.getElementById("display_photo_credit");
  var display_inflorescence2 = document.getElementById("display_inflorescence");
  var display_leaf_blade2 = document.getElementById("display_leaf_blade");
  var display_spike_color2 = document.getElementById("display_spike_color");
  var display_stem_cross_section2 = document.getElementById("display_stem_cross_section");
  var display_awns2 = document.getElementById("display_awns");
  var display_florets_per_spikelet2 = document.getElementById("display_florets_per_spikelet");
  var display_cone2 = document.getElementById("display_cone");
  var display_leaf_margin2 = document.getElementById("display_leaf_margin");
  var display_leaf_shape2 = document.getElementById("display_leaf_shape");
  var display_leaf_type2 = document.getElementById("display_leaf_type");
  var display_needle_apex2 = document.getElementById("display_needle_apex");
  var display_needle_arrangement2 = document.getElementById("display_needle_arrangement");
  var display_needle_per_fascile2 = document.getElementById("display_needle_per_fascile");

  var display_species = parent.document.getElementById("display_species");
  var display_common_name = parent.document.getElementById("display_common_name");
  var display_family_name = parent.document.getElementById("display_family_name");
  var display_synonyms = parent.document.getElementById("display_synonyms");
  var display_growth_form = parent.document.getElementById("display_growth_form");
  var display_flower_color = parent.document.getElementById("display_flower_color");
  var display_flower_shape = parent.document.getElementById("display_flower_shape");
  var display_habitat = parent.document.getElementById("display_habitat");
  var display_leaf_arrangement = parent.document.getElementById("display_leaf_arrangement");
  var display_leaf_shape_filter = parent.document.getElementById("display_leaf_shape_filter");
  var display_petal_number = parent.document.getElementById("display_petal_number");
  var display_notes = parent.document.getElementById("display_notes");
  var display_photo_credit = parent.document.getElementById("display_photo_credit");
  var display_inflorescence = parent.document.getElementById("display_inflorescence");
  var display_leaf_blade = parent.document.getElementById("display_leaf_blade");
  var display_spike_color = parent.document.getElementById("display_spike_color");
  var display_stem_cross_section = parent.document.getElementById("display_stem_cross_section");
  var display_awns = parent.document.getElementById("display_awns");
  var display_florets_per_spikelet = parent.document.getElementById("display_florets_per_spikelet");
  var display_cone = parent.document.getElementById("display_cone");
  var display_leaf_margin = parent.document.getElementById("display_leaf_margin");
  var display_leaf_shape = parent.document.getElementById("display_leaf_shape");
  var display_leaf_type = parent.document.getElementById("display_leaf_type");
  var display_needle_apex = parent.document.getElementById("display_needle_apex");
  var display_needle_arrangement = parent.document.getElementById("display_needle_arrangement");
  var display_needle_per_fascile = parent.document.getElementById("display_needle_per_fascile");

  if(display_species2.textContent === display_species.innerHTML){}
  else
  {
    display_species2.textContent = display_species.innerHTML;
    display_common_name2.textContent = display_common_name.innerHTML;
    display_family_name2.textContent = display_family_name.innerHTML;
    display_synonyms2.textContent = display_synonyms.innerHTML;
    display_growth_form2.textContent = display_growth_form.innerHTML;
    display_flower_color2.textContent = display_flower_color.innerHTML;
    display_flower_shape2.textContent = display_flower_shape.innerHTML;
    display_habitat2.textContent = display_habitat.innerHTML;
    display_leaf_arrangement2.textContent = display_leaf_arrangement.innerHTML;
    display_leaf_shape_filter2.textContent = display_leaf_shape_filter.innerHTML;
    display_petal_number2.textContent = display_petal_number.innerHTML;
    display_notes2.textContent = display_notes.innerHTML;
    display_photo_credit2.textContent = display_photo_credit.innerHTML;
    display_inflorescence2 = display_inflorescence.innerHTML;
    display_leaf_blade2 = display_leaf_blade.innerHTML;
    display_spike_color2 = display_spike_color.innerHTML;
    display_stem_cross_section2 = display_stem_cross_section.innerHTML;
    display_awns2 = display_awns.innerHTML;
    display_florets_per_spikelet2 = display_florets_per_spikelet.innerHTML;
    display_cone2 = display_cone.innerHTML;
    display_leaf_margin2 = display_leaf_margin.innerHTML;
    display_leaf_shape2 = display_leaf_shape.innerHTML;
    display_leaf_type2 = display_leaf_type.innerHTML;
    display_needle_apex2 = display_needle_apex.innerHTML;
    display_needle_arrangement2 = display_needle_arrangement.innerHTML;
    display_needle_per_fascile2 = display_needle_per_fascile.innerHTML;
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


