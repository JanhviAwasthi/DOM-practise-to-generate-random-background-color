const btn1El=document.querySelector(".btn1");    
const btn2El=document.querySelector(".btn2");
const tittleEl=document.querySelector(".tittle");
const reset=document.querySelector(".reset");
const bodyEl=document.querySelector("body");

btn1El.addEventListener("click",function () {
    let rand=Math.floor(Math.random()*16777215).toString(16);
    bodyEl.style.backgroundColor="#"+rand;  
    
   
});
btn2El.addEventListener("click",function () {
    tittleEl.style.fontSize="90px";
});
reset.addEventListener("click",function () {
    document.body.style.backgroundColor="white";
    tittleEl.style.fontSize="30px";
});

