var items = document.querySelectorAll('.container .menu ul .item');// chon tat ca cac item 
var dropdowns = document.querySelectorAll('.container .menu ul .item .dropdown'); // chon tat ca cac sub menu
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () { // click item bat ky
        let dropdown = items[i].children; // chon cac child cua item
        let dropdownActive = document.querySelector('.container .menu ul .item .dropdown.active'); // chon item co active
        if (dropdownActive) {
            dropdownActive.classList.remove('active'); // remove active cua nhung item khac
        }
        dropdown[0].classList.add('active'); // lay child 1
    })
}
window.onclick = function (event) {
    if (!event.target.matches('.container .menu ul .item')) { // matches event click voi selector can kiem tra
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('active')) {
                dropdowns[i].classList.remove('active'); // cai nao chua active thi remove no di
            }
        }
    }
}