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
function Validatesignup() {
  if (
    validateEmail("signupEmail") &&
    validateMobile("signupMobile") &&
    validatePassword("signupPassword")
  ) {
    closeModal('signupModal');
    alert("Thanks for creating an account!");
    return false;
  }
}
function validateEmail(id) {
  const input = document.getElementById(id);
  const value = input.value;
  if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
    alert("Invalid email address. Please include '@' and '.' characters.");
    input.focus();
    return false;
  }
  return true;
}
function validateMobile(id) {
  const input = document.getElementById(id);
  const value = input.value;
  if (!/^[0-9]{10}$/.test(value)) {
    alert("Invalid mobile number. Please enter a 10-digit mobile number.");
    input.focus();
    return false;
  }
  return true;
}
function validatePassword(id) {
  const input = document.getElementById(id);
  const value = input.value;
  if (value.length < 6) {
    alert("Password must be at least 6 characters long.");
    input.focus();
    return false;
  }
  return true;
}
function Validateslogin() {
  if (
    validateEmail("loginEmail") &&
    validatePassword("loginPassword")
  ) {
    closeModal('loginModal');
    alert("Login successful!,Welcome Back");
    return false;
  }
  return false;
}