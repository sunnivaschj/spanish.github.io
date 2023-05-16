// Veksle mellom å legge til og fjerne den "responsive" klassen til topnav når brukeren klikker på ikonet
function faBars() {
  var x = document.getElementById("hovedNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


const navbar = document.getElementById("hovedNav");
const navTop = navbar.offsetTop;

function stickyBar() {
  if (window.scrollY >= navTop) {
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
    navbar.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyBar);


