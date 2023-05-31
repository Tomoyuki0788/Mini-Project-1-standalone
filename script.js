const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.querySelector(".absolute.right-0");

menuButton.addEventListener("click", function () {
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  dropdownMenu.style.display = expanded ? "none" : "block";
});
let response = fetch(url);
fetch('https://gateway.marvel.com:443/v1/public/characters/4084/comics?noVariants=true&hasDigitalIssue=true&limit=100&apikey=89f7c34bde2d0f71c4189f7a7cc811e4')
  .then((res) => res.json())
  .then((data) => console.log(data));
  var timestamp = $.query.get('ts'); // get a value

  window.location = $.query.set('ts', newValue); // set a value and navigate
  Date.now
