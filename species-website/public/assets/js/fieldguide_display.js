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

/*
  var h2 = document.createElement('h2');
  var text = document.createTextNode("speciesName");
  h2.appendChild(text);
  document.body.appendChild(h2);
  */

}());
