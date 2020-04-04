var index = 0;
showSlide();

function showSlide() {
    let slides = document.querySelectorAll('.container .myslide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    index++;
    if (index > slides.length) { index = 1 };
    slides[index - 1].style.display = 'block';
    setTimeout(showSlide, 5000);
}