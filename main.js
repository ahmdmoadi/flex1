let menuToggle = document.querySelector(".top>#menuToggle");
let nav = document.querySelector(".top>nav");
let flexCont = document.querySelector("nav>.flex-cont");
let ul = document.querySelector("nav>.flex-cont>.flex-nav>ul");
/**@type {HTMLInputElement} */
let meow = document.querySelector("input#meow");

document.addEventListener("DOMContentLoaded",e=>{
    window.scroll({x:1})
})

meow.addEventListener("change", e=> {
    if(e.target.checked) {
        menuToggle.classList.add("show");
        nav.classList.add("show");
        flexCont.classList.add("show");
        ul.classList.add("show");
    } else {
        menuToggle.classList.remove("show");
        nav.classList.remove("show");
        flexCont.classList.remove("show");
        ul.classList.remove("show");
    }
})


// a.addEventListener("mou")