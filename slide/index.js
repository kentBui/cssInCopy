var index = 1;
showSlide(index);

function changeSlide(n) {
	showSlide(index += n);
}

function curSlide(n) {
	showSlide(index = n);
}

function showSlide(index) {
	let slides = document.querySelectorAll('.container .myslide');
	let dots = document.querySelectorAll('.dots .dot');
	let activeDot = document.querySelector('.dots .dot.active');

	if(index > slides.length) {
		index = 1;
	}
	if(index < 1) {
		index = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for (let j = 0; j < dots.length; j++) {
		activeDot.classList.remove('active');
	}

	slides[index-1].style.display = 'block';
	dots[index-1].classList.add('active');
}