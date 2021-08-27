const iconMenu = document.getElementById('iconMenu')
const menu = document.getElementById('menu')
const body = document.querySelector('body')






iconMenu.addEventListener('click',()=>{
        menu.classList.replace('menu__desktop','menu__mobile')
    setTimeout(()=>
        menu.classList.replace('menu__mobile','menu__desktop')
    ,5000)
})

// iconMenu.addEventListener('click', ()=>{
//     menu.classList.replace('menu__desktop','menu__mobile')

// })
