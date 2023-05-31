// Получаем элементы кнопки и всплывающего окна по их id
const promoButton = document.getElementById('promo-button');
const promoPopup = document.getElementById('promo-popup');
const closePromo = document.getElementById('close-promo');

// Добавляем обработчик события "клик" на кнопку
promoButton.addEventListener('click', () => {
  // Показываем всплывающее окно
  promoPopup.style.display = 'block';

  // Получаем элемент текста внутри всплывающего окна
  const promoPopupText = document.getElementById('promo-popup-text');

  // Изменяем текст внутри элемента
  promoPopupText.textContent = 'Новый текст';
});

// Добавляем обработчик события "клик" на кнопку закрытия окна
closePromo.addEventListener('click', () => {
  // Скрываем всплывающее окно
  promoPopup.style.display = 'none';
});