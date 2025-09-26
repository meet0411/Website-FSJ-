// Animated MovieMafia Heading Script
document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('animated-text');
  if (!textElement) return;
  const text = textElement.textContent;
  textElement.textContent = '';
  const spans = text.split('').map(char => {
    const span = document.createElement('span');
    span.className = 'letter-span';
    span.textContent = char;
    textElement.appendChild(span);
    return span;
  });
  const FADE_IN_DELAY = 100;
  spans.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add('visible');
    }, i * FADE_IN_DELAY);
  });
  const totalFadeInDuration = (spans.length - 1) * FADE_IN_DELAY + 600;
  setTimeout(() => {
    spans.forEach(span => span.classList.add('waving'));
    let time = 0;
    let waveAmplitude = 8;
    const targetAmplitude = { current: waveAmplitude };
    textElement.addEventListener('mouseenter', () => {
      targetAmplitude.current = 15;
    });
    textElement.addEventListener('mouseleave', () => {
      targetAmplitude.current = 8;
    });
    // --- SMOOTH WAVE: Use phase offset and easing for smoothness ---
    const phaseOffset = Math.PI / 10; // smooths the wave between letters
    function waveAnimation() {
      waveAmplitude += (targetAmplitude.current - waveAmplitude) * 0.1;
      spans.forEach((span, i) => {
        // Use a cosine for a smoother start/end, and add a phase offset
        const yOffset = Math.sin(time + i * phaseOffset) * waveAmplitude;
        // Also apply a little easing for smoothness
        span.style.transform = `translateY(${yOffset.toFixed(10)}px)`;
      });
      time += 0.05;
      requestAnimationFrame(waveAnimation);
    }
    waveAnimation();
  }, totalFadeInDuration);
});

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