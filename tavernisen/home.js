let text = document.getElementById('text');
let tonneau = document.getElementById('tonneau');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    tonneau.style.left = value * -1.3 + 'px';
});