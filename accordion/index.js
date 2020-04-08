let btn = document.querySelectorAll('.container .row .item .btn');
let info = document.querySelectorAll('.container .row .item .info');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let infoI = btn[i].nextElementSibling;
        if (infoI.style.maxHeight) {
            infoI.style.maxHeight = null;
        }
        else {
            infoI.style.maxHeight = infoI.scrollHeight + 'px';
        }
        btn[i].classList.toggle('active');
    });
}