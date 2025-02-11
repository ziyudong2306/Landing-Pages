
document.addEventListener('DOMContentLoaded', function () {
    let currentCount = 923;

    function startCounter() {
        function decrementCounter() {
            if (currentCount > 0) {
                currentCount -= 1;
                document.getElementById('current-count').textContent = currentCount;
                document.querySelector('.timer span[data-timer]').textContent = currentCount;

                // Генерация случайного временного интервала от 200 до 2500 миллисекунд
                const randomInterval = Math.floor(Math.random() * (2500 - 200 + 1)) + 200;

                setTimeout(decrementCounter, randomInterval);
            }
        }

        decrementCounter();
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(document.getElementById('counter-section')) || isElementInViewport(document.querySelector('.sticky-text .timer'))) {
            startCounter();
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
});
