//scroll up button
const scrollUpB=document.querySelector('.scroll-up-btn');
scrollUpB.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

);
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUpB.classList.add('showUp');
  } else {
    scrollUpB.classList.remove('showUp');
  }
});

//menu button
const menuBtn=document.querySelector('.navbar-toggler');
const menuBtnTop=document.querySelector('.menu-btn-top');
const menuBtnMid=document.querySelector('.menu-btn-mid');
const menuBtnBottom=document.querySelector('.menu-btn-bottom');

menuBtn.addEventListener('click',()=>{
  menuBtnTop.classList.toggle('rotate');
  menuBtnBottom.classList.toggle('rotate');
  menuBtnMid.classList.toggle('rotate');
});


  
//copyright current year
document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('current-year').innerHTML = year;
  });

 //swiper
 document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.mySwiper', {
      // Swiper configuration options here
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
});
//carousels
var firstCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
  interval: 2000, // Set the interval between slides (in milliseconds)
  // Other options if needed
});

var secondCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators2'), {
  interval: 3000, // Set the interval for the second carousel
  // Other options if needed
});
