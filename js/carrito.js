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
            $("#total").text("Total:0")
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

    let total = 0
    for (let  i= 0;  i< carritoEnLocal.length; i++) {
    
    
        let item = carritoEnLocal[i][0];
        let cantidad =carritoEnLocal[i][1];
        

        $("#listaProductos").append(`
    
        <article class="contenedor">
                    <div class="flex">
                        <img class="imagenCard" src=${item.imagen} >
                        <p> ${item.nombre}</p>
                        <p> $${item.precio}</p>
                        <p id="cant">${cantidad}</p>
                        <button id="btn${i}"> borrar</button>
    
                    </div>
        
        </article>
        
        `) 
        
        
        
        total += item.precio*cantidad
        
        const botonEliminar = $(`#btn${i}`);
        borrarItem(botonEliminar,i);

       
    }
    $("#total").text(`Total: ${total}`)
    $(".totalPagar").text(`$${total}`)
    
    
    
}




$( document ).ready(function() {
    
    mostrarCarrito()


});