//Sección Por que si una página web
function despliegue(modulo){
    let descubre = document.querySelector('#description-descubre');
    let ventajas = document.querySelector('#description-ventajas');
    let negocio = document.querySelector('#description-negocio');

    switch(modulo)
    {
        case 'descubre':
            descubre.style.display = 'block';
            descubre.classList.add("mostrar")

            ventajas.classList.remove("mostrar")
            negocio.classList.remove("mostrar")

        break;

        case 'ventajas':
            ventajas.classList.add("mostrar")
            ventajas.style.display = 'block';

        break;

        case 'negocio':
            negocio.style.display = 'block';
            negocio.classList.add("mostrar")

        break;
    }
}