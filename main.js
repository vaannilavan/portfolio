var typed = new Typed('.text', {
    strings: ['software engineer','Front-end Developer', 'Back-end Developer','Web Designer', 'UI/UX Designer' ],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true
});


function toggleMode() {
    (document.getElementById('dark-mode')).disabled = !(document.getElementById('dark-mode')).disabled;
}

