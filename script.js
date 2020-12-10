//typing animation script
var type = new Typed(".typing", {
    strings: ["babe.", "girlfriend.", "wife."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
  
const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});