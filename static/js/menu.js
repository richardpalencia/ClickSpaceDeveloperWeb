var open_menu = document.querySelector("#open-menu");
var close_menu = document.querySelector("#close-menu");
var menu_movil = document.querySelector(".menu");
var contador = 1

function menu(){
    if(contador == 0){
        open_menu.style.display = 'block';
        close_menu.style.display = 'none';
        menu_movil.style.display = 'none';
        contador++;
    } else {
        open_menu.style.display = 'none';
        close_menu.style.display = 'block';
        menu_movil.style.display = 'block';
        contador = 0;
    }
}
