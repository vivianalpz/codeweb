const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const  menu1 = document.querySelector('.menu');



const  diseñow = document.querySelector('.diseño');



imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen( imagen.getAttribute('src'))
       
    })
})


contenedorlight.addEventListener('click', (e)=>{/*al dar click a la X o cualquier parte de ña 
    pantalla que no sea la imagen esta se cerrara */
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    menu1.style.opacity = '0'
}


//jikjkjjjjjjjjjj

contenedorlight.addEventListener('click', (e)=>{/*al dar click a la X o cualquier parte de ña 
    pantalla que no sea la imagen esta se cerrara */
    if(e.target !== diseñow){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        menu1.style.opacity = '1'
    }
})



