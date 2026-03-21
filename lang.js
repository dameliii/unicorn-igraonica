const pages = {
    en: '/index.html',
    me: '/languages/me.html',
    tr: '/languages/tr.html',
    ru: '/languages/ru.html'
};

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {

        // 🔥 Проверка: работает ли клик
        console.log("Я работаю");

        // 🔍 Какой язык нажали
        console.log("Выбран язык:", button.dataset.lang);

        // 🔍 Куда идём
        console.log("Переход на:", pages[button.dataset.lang]);

        if (button.classList.contains('active')) return;

        window.location.href = pages[button.dataset.lang];
    });
});




