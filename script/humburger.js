/* 
function for toggling hambuger icons  
to show links and not show links
used add event listener  
*/

/* 
  function to toggle between open hamburger
  and closed hambuger.
*/

let container = document.querySelector('.hamburger-icon-container');
let navBarElements = document.querySelector('.nav-links');
container.addEventListener('click', hamburger);

function hamburger() {
  if (container.classList.contains('open')) {
    container.classList.remove('open');
    navBarElements.classList.remove('nav-links');
    navBarElements.classList.add('nav-closed');
  } else {
    container.classList.add('open');
    navBarElements.classList.add('nav-links');
    navBarElements.classList.remove('nav-closed');
  }
}


