




//evento menu hamburguesa
const menu = document.getElementById("listaProductos");


const abrir = ()=>{
    menu.style.display = "flex";
    menu.style.top = "0";
}

const cerrar = ()=>{
    menu.style.top = "-1000%"
}

$("#botonAbrirMenu").on("click",abrir)
$("#cerrarMenu").on("click",cerrar)



