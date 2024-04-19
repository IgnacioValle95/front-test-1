console.log("Nacho");
const menuButton = document.getElementById("buttonNavbar");
const menuList = document.getElementById("listNavbar");
console.log(menuButton);
const menuCloseSVG = document.getElementById("menuClose");
const menuOpenSVG = document.getElementById("menuOpen");
let menuToggle = false;
const apiUrl = "http://localhost:3000/home";
// fetch(apiUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // Work with JSON data here
//     console.log(data);
//     document.getElementById("titulo").innerHTML = data.title;
//   })
//   .catch((err) => {
//     // Do something for an error here
//   });
function showMenu() {
  let menuList = document.getElementById("listNavbar");
  menuList.style.display = "block";
}

function toggleMenu() {
  if (menuToggle === false) {
    menuList.style.display = "block";
    menuCloseSVG.style.opacity = 1;
    menuOpenSVG.style.opacity = 0;
    menuToggle = true;
  } else {
    menuList.style.display = "none";
    menuCloseSVG.style.opacity = 0;
    menuOpenSVG.style.opacity = 1;
    menuToggle = false;
  }
}
menuButton.addEventListener("click", toggleMenu);

/* function showAnyElementSpicy(element) {
  element.style.display = "block";
}

showAnyElementSpicy(menuList); */
