document.addEventListener('DOMContentLoaded', () => {
  const button5 = document.querySelector('#button-5');
  const button6 = document.querySelector('#button-6');
  const button7 = document.querySelector('#button-7');
  const button8 = document.querySelector('#button-8');
  const text5 = document.querySelector('#text-5');
  const text6 = document.querySelector('#text-6');
  const text7 = document.querySelector('#text-7');
  const text8 = document.querySelector('#text-8');
  
  button5.addEventListener('click', () => {
    text5.style.visibility = 'visible';
    text6.style.display = 'none';
    text7.style.display = 'none';
    text8.style.display = 'none';
  });
  
  button6.addEventListener('click', () => {
    text5.style.display = 'none';
    text6.style.visibility = 'visible';
    text7.style.display = 'none';
    text8.style.display = 'none';
  });
  
  button7.addEventListener('click', () => {
    text5.style.display = 'none';
    text6.style.display = 'none';
    text7.style.visibility = 'visible';
    text8.style.display = 'none';
  });
  
  button8.addEventListener('click', () => {
      text5.style.display = 'none';
      text6.style.display = 'none';
      text7.style.display = 'none';
      text8.style.visibility = 'visible';
  });
  
  });
  const buttons = document.querySelectorAll('.button-tow button');
const hiddenTexts = document.querySelectorAll('.hidden-text');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    hiddenTexts.forEach(hiddenText => hiddenText.style.display = 'none');
    hiddenTexts[index].style.display = 'block';
  });
});
