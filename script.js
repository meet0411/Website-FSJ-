// Show image
function showImage() {
  document.getElementById("myImage").style.display = "block";
}

// Toggle menu
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

function toggleMenu() {
  sideMenu.classList.toggle("open");
}
hamburger.addEventListener("click", toggleMenu);

// Modals
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
function searchMovie() {
  let query = document.getElementById("searchInput").value.toLowerCase();
  if(query.trim() === "") {
    alert("Please type a movie name!");
  } else {
    alert("You searched for: " + query);
    // Later you can filter movies or redirect
  }
}
function signup() {
  alert("Thanks for creating an account!");
}
function login() {
  alert("Welcome Back!")
}