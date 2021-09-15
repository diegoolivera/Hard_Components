
let carritoEnLocal =JSON.parse(localStorage.getItem('seleccionados'));



const borrarItem = (botonEliminar,i)=>{

    botonEliminar.click(()=>{
        
        if (carritoEnLocal=== null) {
            return;
        }

        if (carritoEnLocal.length === 1) {

            $(".contenedor").remove();
            localStorage.clear();
            return;
        }
        $(".contenedor").remove();

        carritoEnLocal.splice(i, 1);
        localStorage.setItem("seleccionados", JSON.stringify(carritoEnLocal));
        
        mostrarCarrito()

    })

}







const mostrarCarrito = ()=>{

    
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
                        <button id="btn${i}"> borrar</button>
    
                    </div>
        
        </article>
        
        `) 
    
        const botonEliminar = $(`#btn${i}`);
    
        borrarItem(botonEliminar,i)
    }
}

mostrarCarrito()