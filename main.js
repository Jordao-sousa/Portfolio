

var hamburguer = document.querySelector(".menu-hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
    document.querySelector(".menu-hamburguer").classList.toggle("menu-hamburguers");
});
