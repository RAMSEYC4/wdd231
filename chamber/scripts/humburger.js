/* 
function for toggling hambuger icons  
to show links and not show links
used add event listener  
*/

/* 
  function to toggle between open hamburger
  and closed hambuger.
*/

const bodyElement = document.querySelector('content-body')
const hamburgerOpen = document.querySelector('.fa-bars');
const hamburgerClose = document.querySelector('.fa-x');
const navElement = document.querySelector('.nav-links-parent')
hamburgerOpen.addEventListener('click', togglehamburgerIcon);
hamburgerClose.addEventListener('click', togglehamburgerIcon);
navElement.addEventListener('click', togglehamburgerIcon);

function togglehamburgerIcon() {
  if (getComputedStyle(hamburgerOpen).display === 'block') {
    hamburgerOpen.style.display = 'none';
    hamburgerClose.style.display = 'block';
    navElement.style.display = 'block';
  } else {
    hamburgerOpen.style.display = 'block';
    hamburgerClose.style.display = 'none';
    navElement.style.display = 'none';
  }
}


