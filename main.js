let btnMenu = document.querySelector(".list-abrir-menu");
let menu = document.querySelector(".menu-mobile");
let btnFechar = document.querySelector(".btn-fechar")

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
btnFechar.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
