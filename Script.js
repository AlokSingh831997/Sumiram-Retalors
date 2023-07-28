let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
} 


document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
} 

// var swiper = new Swiper(".books-slider", {
//    loop:true,
//    centeredSlides: true,
//    autoplay: {
// delay:9500,
// disableOnInteraction: false,
//    },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2, 
//         spaceBetween: 40,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 50,
//       },
//     },
//   });