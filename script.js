const bar = document.querySelector("#bar")
const nav = document.querySelector("#navbar")
const close = document.querySelector("#close")

if(close){
    nav.addEventListener('click', () =>{
        nav.classList.remove("active")
    })
}

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add("active")
    })
}