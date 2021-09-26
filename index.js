//This is my new javascipt file

window.onload = function() {
    document.getElementById("Main").style.fontSize = '60px'
//document.getElementById("MySidebar").style.visibility = 'hidden';
}

function OpenNav() {
    document.getElementById("MySidebar").style.display = "block";
    //document.getElementById("MySidebar").style.visibility = 'visible';
}

function CloseNav() {
    document.getElementById("MySidebar").style.display = "none";
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}