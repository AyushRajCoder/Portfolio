let menu = document.querySelector('#Menu-icons');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Mernstack Developer'],
    typeSpeed: 80,
    backspeed: 80,
    backdelay: 1200,
    loop: true,
  });