const slides = document.querySelectorAll('.slide');
// const modalSlides = document.querySelectorAll('.modal-slide');

const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');

const img = document.querySelectorAll('.product-img')


slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
 });
 
//  modalSlides.forEach(function (slide, index) {
//     slide.style.left = `${index * 100}%`;
//  });

let counter = 0;
nextBtn.forEach(function (next) {
   next.addEventListener("click", function () {
      counter++;
      carousel();
   });
});


prevBtn.forEach(function (previous) {
   previous.addEventListener("click", function () {
      counter--;
      carousel();
   });
});

function carousel() {
    if (counter === slides.length) {
       counter = 0;
    }
    if (counter < 0) {
       counter = slides.length - 1;
    }
    slides.forEach(function (slide) {
       slide.style.transform = `translateX(-${counter * 100}%)`
    });
 }

