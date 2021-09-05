
let carritoEnLocal =JSON.parse(localStorage.getItem('seleccionados'));


for (let  i= 0;  i< carritoEnLocal.length; i++) {
    
    let imagen = carritoEnLocal[i].imagen;
    let nombre = carritoEnLocal[i].nombre;
    let precio = carritoEnLocal[i].precio;

    console.log(nombre)
    console.log(precio)
    $("#listaProductos").append(`

    <article class="contenedor">
                <div class="flex">
                    <img class="imagenCard" src=${imagen} >
                    <p> ${nombre}</p>
                    <p> $${precio}</p>
                    <p><i class="fas fa-times logoBorrar"></i></p>

                </div>
    
    </article>
    
    `) 
}
