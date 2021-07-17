const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 610) {
        navbar.classList.add('sch');
    } else {
        navbar.classList.remove('sch');
    }
};
    