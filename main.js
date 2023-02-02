let gold = document.querySelector("#gold");
let blue = document.querySelector("#blue")
let black = document.querySelector("#black");
let white = document.querySelector("#white");
let red = document.querySelector("#red")

gold.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#ffbb55";
    document.querySelector("#main_img img").setAttribute("src", "imgs/0.png");
})

blue.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#7da8ff";
    document.querySelector("#main_img img").setAttribute("src", "imgs/1.png");
})

black.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#656565";
    document.querySelector("#main_img img").setAttribute("src", "imgs/2.png");
})

white.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#c1b5a3";
    document.querySelector("#main_img img").setAttribute("src", "imgs/3.png");
})

red.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "#ff1111";
    document.querySelector("#main_img img").setAttribute("src", "imgs/4.png");
})