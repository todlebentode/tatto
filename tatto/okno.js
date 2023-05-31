document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const reservationInfo = document.getElementById("reservation-info");
  reservationInfo.textContent = `Вы забронировали время на ${date} в ${time}. Ваше имя: ${name}, ваш email: ${email}.`;
});

function popup() {
  // Создаем новое окно
  var myWindow = window.open("", "popup", "width=400,height=400");

  // Добавляем текст в новое окно
  myWindow.document.write("<p>Это текст во всплывающем окне.</p>");

  // Закрываем окно через 5 секунд
  setTimeout(function(){ myWindow.close(); }, 5000);
}