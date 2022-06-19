const slides = document.querySelectorAll('.slide');


const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.previous');

const img = document.querySelectorAll('.product-img');

const heading = document.querySelector('.heading-one');
const paragraph = document.querySelector('.paragraph-one');

const nav = document.querySelector('.menu');
const menu = document.querySelector('.navigation')
const close = document.querySelector('.close');
const background = document.querySelector('.background')


slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;

    
 });
 


let counter = 0;
nextBtn.forEach(function (next) {
   next.addEventListener("click", function () {
      counter++;
      carousel();
      text ()
    
          
 
   });
});


prevBtn.forEach(function (previous) {
   previous.addEventListener("click", function () {
      counter--;
      carousel();
      text ()
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



   console.log(slides)

   function text (){
      if(counter === (slides.length = 0) ){
         heading.textContent = ' Discover innovative ways to decorate'
         paragraph.textContent = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        }

      if(counter === (slides.length = 1) ){
         heading.textContent = ' We are available all across the globe'
         paragraph.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
         store locator. Any questions? Don't hesitate to contact us today.`
        }
      
       if(counter === (slides.length = 2)){
         heading.textContent = ' Manufactured with the best materials'
         paragraph.textContent = `  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
         to ensure that every product is made as perfect and as consistent as possible. With three decades of 
         experience in this industry, we understand what customers want for their home and office.`
        }
   }

   nav.addEventListener("click" ,  function() {
      menu.classList.add('show-navigation');
      background.classList.add('show-background');
      close.addEventListener("click", function(){
         menu.classList.remove('show-navigation');
         background.classList.remove('show-background');
      })

   })