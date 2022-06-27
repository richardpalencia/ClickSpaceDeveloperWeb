var navbar = document.querySelector(".menu");
var espectro = document.querySelector(".navbar")
var contador = 1

function menu(){
    if(contador == 0){
        navbar.style.display = 'none';
        espectro.style.zIndex = '1';
        contador++;
    } else {
        navbar.style.display = 'block';
        espectro.style.zIndex = '2';
        contador = 0;
    }
}
