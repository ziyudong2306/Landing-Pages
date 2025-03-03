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

// 设置10分钟倒计时
function startCountdown() {
  // 设置倒计时为10分钟（10 * 60 * 1000毫秒）
  const countDownDate = new Date().getTime() + 10 * 60 * 1000;
  
  // 更新倒计时每秒
  const x = setInterval(function() {
    // 获取当前时间
    const now = new Date().getTime();
    
    // 计算剩余时间
    const distance = countDownDate - now;
    
    // 计算分钟和秒
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // 格式化显示
    document.getElementById("countdown").innerHTML = 
      (minutes < 10 ? "0" + minutes : minutes) + ":" + 
      (seconds < 10 ? "0" + seconds : seconds);
    
    // 如果倒计时结束
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "00:00";
    }
  }, 1000);
}

// 页面加载时启动倒计时
document.addEventListener('DOMContentLoaded', startCountdown);

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