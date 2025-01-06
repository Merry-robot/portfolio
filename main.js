const dynamicText = document.querySelector('.dynamic-text');
const roles = ['Programmer', 'Web Developer', 'Air Traffic Enthusiast'];
let roleIndex = 0;

function changeText() {
    dynamicText.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeText, 3000);

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-projects");
    const projectList = document.querySelector(".project-list");

    toggleButton.addEventListener("click", function() {
        projectList.style.display = projectList.style.display === "block" ? "none" : "block";
    });
});
