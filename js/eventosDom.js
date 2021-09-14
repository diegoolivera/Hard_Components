




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



//menu deplegable 
//tiene un error
//(cuando hace el slideUp esconde toda la barra de filtros 
//para desktop)

// $("#botonAbrirMenu").on("click",()=>{

//     $("#listaProductos").slideDown("slow")
// })

// $("#cerrarMenu").on("click",()=>{
//     $("#listaProductos").slideUp("slow")
    
    

// })

