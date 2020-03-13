document.addEventListener("DOMContentLoaded",()=>{
    var body = document.body;
    var title = document.getElementById("title");
    var p = document.createElement("p");
    var text = document.createTextNode("The page you looking for not found !")
    p.appendChild(text);
    title.appendChild(p);
    // create star div
    function createStar(){
        var star = document.createElement("div");
        star.classList.add("start");
        body.appendChild(star);
        //
        // tao bang mau
        var arrColor = ["#e63900", "#e6ac00", "#ff1a1a", "#ffff00", "#ffff4d", "#b3b300"]
        star.style.backgroundColor = arrColor[Math.floor(Math.random()*5)];
        //
        // tao chuyen dong phai
        var top = Math.floor(Math.random()*screen.height);
        star.style.top = top + "px";
        //
        // tao chuyen dong trai
        var right = Math.floor(Math.random()*500);
        function runStar(){
            if(right >= screen.width){
                star.remove();
            }
            else {
                right+= 3;
                star.style.right = right + "px";
            }
        }
        setInterval(runStar, 15);
        //
    }
    setInterval(createStar, 500);

});