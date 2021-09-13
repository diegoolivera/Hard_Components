




//evento menu hamburguesa
const menu = document.getElementById("listaProductos");
const botonAbrir = document.getElementById("botonAbrirMenu");
const botonCerrar = document.getElementById("cerrarMenu")

const abrir = ()=>{
    menu.style.display = "flex";
    menu.style.top = "0";
}

const cerrar = ()=>{
    menu.style.top = "-1000%"
}


botonAbrir.addEventListener("click",abrir);
botonCerrar.addEventListener("click",cerrar);


