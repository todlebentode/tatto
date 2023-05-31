const slider = document.getElementById('slider');
const slides = slider.getElementsByTagName('img');
let currentSlide = 0;

function showSlide() {
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = 'none';
}
slides[currentSlide].style.display = 'block';
}

function nextSlide() {
currentSlide++;
if (currentSlide >= slides.length) {
currentSlide = 0;
}
showSlide();
}

function prevSlide() {
currentSlide--;
if (currentSlide < 0) {
currentSlide = slides.length - 1;
}
showSlide();
}

// Добавляем обработчик события "load" для первого изображения
slides[0].addEventListener("load", function() {
setInterval(nextSlide, 3000); // автоматически изменять слайд каждые 5 секунд
});

showSlide(); // Показываем первый слайд при загрузке страницы