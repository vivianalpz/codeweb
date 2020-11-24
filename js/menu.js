const  menu = document.querySelector('.menu');
const  menunav = document.querySelector('.menu-navegacion');

//console.log(menunav)
//console.log(menu)


menu.addEventListener('click',()=>{
    menunav.classList.toggle("spread")/*cada que se de click en el menu se va 
    a poner o aquitar spred para que aparezca y desaparezca el menu*/
})

window.addEventListener('click',e=>{
    if(menunav.classList.contains('spread') && e.target !=  menunav && e.target != menu  ){/*Para que se ejecute se tiene que dar click en otra parte 
        diferente al menu y al menu de navegacion */

       menunav.classList.toggle("spread") 

    }
})

