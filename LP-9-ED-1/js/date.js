console.log('Скрипт загружен!');

// Функция для получения даты минус N дней
function getDateMinusDaysInSpanish(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);

    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
}

// Находим все элементы с классом 'time-ago'
const timeAgoElements = document.querySelectorAll(".time-ago");

// Обновляем каждую дату в зависимости от атрибута data-days
timeAgoElements.forEach(function (element) {
    const days = parseInt(element.getAttribute("data-days"), 10); // Получаем значение дней
    element.innerText = getDateMinusDaysInSpanish(days); // Устанавливаем дату
});

function updateTimer() {
    const now = new Date(); // Текущее время
    const midnight = new Date(); // Новая дата для полуночи
    midnight.setHours(24, 0, 0, 0); // Устанавливаем время на 24:00 (полночь)

    // Разница во времени между сейчас и полуночью в миллисекундах
    const difference = midnight - now;

    // Переводим миллисекунды в часы, минуты и секунды
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Форматируем результат в "HH:MM:SS"
    const formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

    // Отображаем время на странице
    document.getElementById("countdown").innerText = formattedTime;

    // Проверяем, если разница достигла 0
    if (difference <= 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerText = "00:00:00";
    }
}

// Обновляем таймер каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

// Вызываем сразу для установки начального значения
updateTimer();

// Функция для плавного скролла
document.querySelectorAll(".scroll-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Находим форму по ID и плавно скроллим к ней
        document.getElementById("form-order").scrollIntoView({
            behavior: "smooth",
        });
    });
});