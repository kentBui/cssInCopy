// var slides = document.querySelectorAll('.slides-container .slide-box .slide-item');
// // var prevImage = document.querySelector('.slides-container .prev');
// // var nextImage = document.querySelector('.slides-container .next');
// var index = 0;

// prevImage.addEventListener('click', () => {
//     if (index == 0) {
//         index = slides.length - 1;
//     }
//     else {
//         index--;
//     }
//     let activeItem = document.querySelector('.slides-container .slide-box .slide-item.active');
//     activeItem.classList.remove('active');

//     slides[index].classList.add('active');
// });

// nextImage.addEventListener('click', () => {

//     index++;
//     if (index == slides.length) {
//         index = 0;
//     }

//     let activeItem = document.querySelector('.slides-container .slide-box .slide-item.active');
//     activeItem.classList.remove('active');

//     slides[index].classList.add('active');
// });


var prevImage = document.querySelector('.slides-container .prev');
var nextImage = document.querySelector('.slides-container .next');

var slideShow = document.querySelector('.slides-container .slide-box');
var images = document.querySelectorAll('.slides-container .slide-box img');

var count = 1;
var size = images[0].clientWidth;

slideShow.style.transform = 'translateX(' + (-size * count) + 'px)';

prevImage.addEventListener('click', () => {
    if (count <= 0) return;
    slideShow.style.transition = 'transform 0.4s ease-out';
    count--;
    slideShow.style.transform = 'translateX(' + (-size * count) + 'px)';
});

nextImage.addEventListener('click', () => {
    if (count >= (images.length - 1)) return;
    slideShow.style.transition = 'transform 0.4s ease-out';
    count++;
    slideShow.style.transform = 'translateX(' + (-size * count) + 'px)';
});

slideShow.addEventListener('transitionend', () => {
    if (images[count].id === 'lastImage') {
        slideShow.style.transition = 'none';
        count = images.length - 2;
    }
    if (images[count].id === 'firstImage') {
        slideShow.style.transition = 'none';
        count = images.length - count;
    }
    slideShow.style.transform = 'translateX(' + (-size * count) + 'px)';
})