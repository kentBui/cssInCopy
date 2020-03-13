document.addEventListener("DOMContentLoaded",()=>{
    var btn1 = document.querySelector("button:nth-child(1)");
    var hover = true;
    function createRipple1(btn1,event){
        let ripple1 = document.createElement("div");
        ripple1.classList.add("ripple1");
        btn1.appendChild(ripple1);
        let x,y;
        x = event.clientX - btn1.offsetLeft;
        y = event.clientY - btn1.offsetTop;
        ripple1.style.left = x + "px";
        ripple1.style.top = y + "px";
    }
    btn1.addEventListener("click",(event)=>{
        createRipple1(btn1,event);
    });
    btn1.addEventListener("mousemove",(event)=>{
        if(hover){
            hover = false;
            createRipple1(btn1,event);
            setTimeout(() => {
                hover = true;
            }, 600);
        }
    });

    var btn2 = document.querySelector("button:nth-child(2)");
    function createRipple2(){
        let ripple2 = document.createElement("div");
        ripple2.classList.add("ripple2");
        btn2.appendChild(ripple2);
        let x = event.clientX - btn2.offsetLeft;
        let y = event.clientY - btn2.offsetTop;
        ripple2.style.left = x + "px";
        ripple2.style.top = y + "px";
    };
    btn2.addEventListener("click",(event)=>{
        createRipple2(btn2,event);
    });
    btn2.addEventListener("mousemove", ()=>{
        if(hover){
            hover = false;
            createRipple2(btn2,event);
            setTimeout(() => {
                hover= true;
            }, 500);
        }
    })
});