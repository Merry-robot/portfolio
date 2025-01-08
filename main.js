// Dynamic text animation
const dynamicText = document.querySelector('.dynamic-text');
const roles = ['a Web Developer.', 'an Air Traffic Enthusiast.', 'a Musician'];
let roleIndex = 0;

function changeText() {
    dynamicText.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeText, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-projects");
    const sidebar = document.getElementById("sidebar");

    // Show sidebar by default
    sidebar.classList.add("show");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("show");

        if (sidebar.classList.contains("show")) {
            toggleButton.innerHTML = '<i class="fas fa-times"></i> Hide Projects';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-bars"></i> Show Projects';
        }
    });
});
