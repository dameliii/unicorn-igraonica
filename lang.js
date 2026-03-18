
const pages = {
    en: 'index.html',
    me: '/languages/me.html',
    tr: 'tr.index',
    ru: 'ru.html'
};

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) return;
        window.location.href = pages[button.dataset.lang];
    });
});



