const iconMenu = document.getElementById('iconMenu')
const menu = document.getElementById('menu')
const body = document.querySelector('body')






iconMenu.addEventListener('click',(e)=>{
        menu.classList.replace('menu__desktop','menu__mobile')
    //     console.log(e)
    // setTimeout(()=>
        
    //     menu.classList.replace('menu__mobile','menu__desktop')
    // ,5000)
})


body.addEventListener('touchstart',(e)=>{
    menu.classList.replace('menu__mobile','menu__desktop')
})