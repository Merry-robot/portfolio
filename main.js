const dynamicText = document.querySelector('.dynamic-text');
const roles = ['Programmer', 'Web Developer', 'Air Traffic Enthusiast'];
let roleIndex = 0;

function changeText() {
    dynamicText.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeText, 3000);
