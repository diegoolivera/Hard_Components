//obtenemos carrito del localStorage
let carritoEnLocal =JSON.parse(localStorage.getItem('seleccionados'));

//funciones

//borra un articulo
const borrador=()=>{
    $(".contenedor").remove();
}


//borra articulos del carrito
const borrarItem = (botonEliminar,i)=>{

    botonEliminar.click(()=>{
        
        if (carritoEnLocal=== null) {
            return;
        }

        if (carritoEnLocal.length === 1) {

            borrador()
            localStorage.clear();
            return;
        }
        borrador()

        carritoEnLocal.splice(i, 1);
        localStorage.setItem("seleccionados", JSON.stringify(carritoEnLocal));
        
        mostrarCarrito()

        

    })

}





//añade los articulos seleccionados del carrito al html

const mostrarCarrito = ()=>{

    
    for (let  i= 0;  i< carritoEnLocal.length; i++) {
    
        
        let imagen = carritoEnLocal[i].imagen;
        let nombre = carritoEnLocal[i].nombre;
        let precio = carritoEnLocal[i].precio;
    
        
        

        $("#listaProductos").append(`
    
        <article class="contenedor">
                    <div class="flex">
                        <img class="imagenCard" src=${imagen} >
                        <p> ${nombre}</p>
                        <p> $${precio}</p>
                        <p id="cant">0</p>
                        <button id="btn${i}"> borrar</button>
    
                    </div>
        
        </article>
        
        `) 
        
        
        
    
        const botonEliminar = $(`#btn${i}`);
        borrarItem(botonEliminar,i);

       
    }

    
    
}






$( document ).ready(function() {
    
    mostrarCarrito()


});