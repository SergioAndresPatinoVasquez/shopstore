let menuUsuario = document.querySelector(".nav-usuario");
let desktopMenu = document.querySelector(".desktop-menu");

console.log(menuUsuario);

menuUsuario.addEventListener('click', intercambiarDesktopMenu);

function intercambiarDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    console.log('click');
}