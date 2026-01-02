document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const header = document.getElementById('header');

    // মোবাইল মেনু ওপেন/ক্লোজ
    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.classList.toggle('active');
    });

    // স্ক্রল করলে হেডার শ্যাডো
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '25px 0';
            header.style.boxShadow = 'none';
        }
    });
});