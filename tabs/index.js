let item = document.querySelectorAll('.container .menu ul .item');
let infoItem = document.querySelectorAll('.container .info ul .info-item');
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function () {
        let activeItem = document.querySelector('.container .menu ul .item.active');
        let activeInfo = document.querySelector('.container .info ul .info-item.info-active');
        activeItem.classList.remove('active');
        activeInfo.classList.remove('info-active');
        item[i].classList.add('active');
        infoItem[i].classList.add('info-active');
        console.log(infoItem[i].innerHTML);
    })
}
console.log(item[0].getAttribute('href'));