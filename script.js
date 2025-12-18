function scrollToContact() {
    document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

/* Scroll animation */
const sections = document.querySelectorAll('.hidden');

function revealOnScroll() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* Form validation */
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const out = document.getElementById('formMsg');

    if (name === '' || email === '' || msg === '') {
        out.innerText = 'Please fill all fields';
        out.style.color = 'red';
        return false;
    }

    out.innerText = 'Message sent successfully ✔';
    out.style.color = 'green';
    return false;
}
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
// ===== Typing Animation =====
const roles = ["Java Full Stack Developer", "Java Full Stack Developer", "Java Full Stack Developer"];
let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 100;

function typeRole() {
    const typingElement = document.getElementById("typing");
    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(deleteRole, 1500);
    }
}

function deleteRole() {
    const typingElement = document.getElementById("typing");
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

// Start typing on page load
window.addEventListener("load", typeRole);

const hiddenElements = document.querySelectorAll('.hidden');
const projectCards = document.querySelectorAll('.project-card');

function revealOnScroll() {
    hiddenElements.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('show');
        }
    });

    projectCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Already in script.js
const hiddenElementss = document.querySelectorAll('.hidden');
function revealOnScroll() {
    hiddenElementss.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add('show');
        }
    });
}

/* ===== CERTIFICATE MODAL ===== */
function openCert(src) {
    document.getElementById("certModal").style.display = "flex";
    document.getElementById("certModalImg").src = src;
}

function closeCert() {
    document.getElementById("certModal").style.display = "none";
}