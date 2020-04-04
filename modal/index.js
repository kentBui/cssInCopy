var imageOrgin = document.querySelector('.image1 .imageOrigin');
var btnShow = document.querySelector('.image1 .btnShow');
var modal = document.querySelector('.modal');
var image = document.querySelector('.modal .imageShow');
var close = document.querySelector('.modal .close');
btnShow.addEventListener('click', function() {
	modal.style.display = 'block';
	image.src = imageOrgin.src;
});
close.addEventListener('click', function(){
	modal.style.display = 'none';
});

var imgOrigins = document.querySelectorAll('.image .img-box .imgOrigin');
var btnicons = document.querySelectorAll('.image .img-box .icon');
for (let i = 0; i < btnicons.length; i++) {
	btnicons[i].addEventListener('click', function(){
		modal.style.display = 'block';
		image.src = imgOrigins[i].src;
		console.log(i);
	})
}