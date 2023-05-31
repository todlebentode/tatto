document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.querySelector('#button-1');
  const button2 = document.querySelector('#button-2');
  const button3 = document.querySelector('#button-3');
  const button4 = document.querySelector('#button-4');
  const button5 = document.querySelector('#button-5');
  const button6 = document.querySelector('#button-6');
  const button7 = document.querySelector('#button-7');
  const button8 = document.querySelector('#button-8');
  const text1 = document.querySelector('#text-1');
  const text2 = document.querySelector('#text-2');
  const text3 = document.querySelector('#text-3');
  const text4 = document.querySelector('#text-4');
  const text5 = document.querySelector('#text-5');
  const text6 = document.querySelector('#text-6');
  const text7 = document.querySelector('#text-7');
  const text8 = document.querySelector('#text-8');
  const img1 = document.querySelector('#img-1');
  const img2 = document.querySelector('#img-2');
  const img3 = document.querySelector('#img-3');
  const img4 = document.querySelector('#img-4');
  const img5 = document.querySelector('#img-5');
  const img6 = document.querySelector('#img-6');
  const img7 = document.querySelector('#img-7');
  const img8 = document.querySelector('#img-8');
  
  text1.style.display = 'block';
  img1.style.display = 'block';
  text5.style.display = 'block';
  img5.style.display = 'block';

  
  // остальные тексты и картинки скрыты
  text2.style.display = 'none';
  text3.style.display = 'none';
  text4.style.display = 'none';
  text6.style.display = 'none';
  text7.style.display = 'none';
  text8.style.display = 'none';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  img6.style.display = 'none';
  img7.style.display = 'none';
  img8.style.display = 'none';
  
  button1.addEventListener('click', () => {
    text5.style.display = 'block';
    img5.style.display = 'block';

    text1.style.display = 'block';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
    text8.style.display = 'none';

    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img6.style.display = 'none';
    img7.style.display = 'none';
    img8.style.display = 'none';

  });
  
  button2.addEventListener('click', () => {
    text5.style.display = 'block';
    img5.style.display = 'block';

    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
    text8.style.display = 'none';

    img1.style.display = 'none';
    img2.style.display = 'block';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img6.style.display = 'none';
    img7.style.display = 'none';
    img8.style.display = 'none';

  });
  
  button3.addEventListener('click', () => {
    text5.style.display = 'block';
    img5.style.display = 'block';

    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
    text4.style.display = 'none';
    text6.style.display = 'none';
    text7.style.display = 'none';
    text8.style.display = 'none';

    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    img4.style.display = 'none';
    img6.style.display = 'none';
    img7.style.display = 'none';
    img8.style.display = 'none';

  });
  
  button4.addEventListener('click', () => {
      text1.style.display = 'none';
      text2.style.display = 'none';
      text3.style.display = 'none';
      text4.style.display = 'block';
      text5.style.display = 'none';
      text6.style.display = 'none';
      text7.style.display = 'none';
      text8.style.display = 'none';
  
      img1.style.display = 'none';
      img2.style.display = 'none';
      img3.style.display = 'none';
      img4.style.display = 'block';
      img5.style.display = 'none';
      img6.style.display = 'none';
      img7.style.display = 'none';
      img8.style.display = 'none';
  
      text5.style.display = 'block';
      img5.style.display = 'block';
  });

  button5.addEventListener('click', () => {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
    text5.style.display = 'block';
    text6.style.display = 'none';
    text7.style.display = 'none';
    text8.style.display = 'none';
  
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'block';
    img6.style.display = 'none';
    img7.style.display = 'none';
    img8.style.display = 'none';
  
    text1.style.display = 'block';
    img1.style.display = 'block';
  });

button6.addEventListener('click', () => {
  text1.style.display = 'none';
  text2.style.display = 'none';
  text3.style.display = 'none';
  text4.style.display = 'none';
  text5.style.display = 'none';
  text6.style.display = 'block';
  text7.style.display = 'none';
  text8.style.display = 'none';

  img1.style.display = 'none';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  img5.style.display = 'none';
  img6.style.display = 'block';
  img7.style.display = 'none';
  img8.style.display = 'none';

  text1.style.display = 'block';
  img1.style.display = 'block';

});

button7.addEventListener('click', () => {
  text1.style.display = 'none';
  text2.style.display = 'none';
  text3.style.display = 'none';
  text4.style.display = 'none';
  text5.style.display = 'none';
  text6.style.display = 'none';
  text7.style.display = 'block';
  text8.style.display = 'none';

  img1.style.display = 'none';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  img5.style.display = 'none';
  img6.style.display = 'none';
  img7.style.display = 'block';
  img8.style.display = 'none';

  text1.style.display = 'block';
  img1.style.display = 'block';

});

button8.addEventListener('click', () => {
  text1.style.display = 'none';
  text2.style.display = 'none';
  text3.style.display = 'none';
  text4.style.display = 'none';
  text5.style.display = 'none';
  text6.style.display = 'none';
  text7.style.display = 'none';
  text8.style.display = 'block';

  img1.style.display = 'none';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  img5.style.display = 'none';
  img6.style.display = 'none';
  img7.style.display = 'none';
  img8.style.display = 'block';

  text1.style.display = 'block';
  img1.style.display = 'block';

});


text1.style.display = 'block';
img1.style.display = 'block';
text5.style.display = 'block';
img5.style.display = 'block';

  });
  const buttons = document.querySelectorAll('.button-row button');
const hiddenTexts = document.querySelectorAll('.hidden-text');
const image = document.querySelectorAll('img');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    hiddenTexts.forEach(hiddenText => hiddenText.style.display = 'none');
    // image.forEach(image => image.style.display = 'none');    
    hiddenTexts[index].style.display = 'block';
    image[index].style.display = 'block';
  });
});



