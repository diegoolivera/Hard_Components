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


        Swal.fire({
            title: 'Confirmar el Borrado',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
          }).then((result) => {
            if (result.isConfirmed) {
                //cuando confirma se ejecuta el borrado
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
            }
          })
        
        

        

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
                <i id="btn${i}" class="fas fa-times-circle"></i>

            </div>

        </article>
        
        
        
        `) 
        
        
        
        total += item.precio*cantidad
        
        const botonEliminar = $(`#btn${i}`);
        
    
        borrarItem(botonEliminar,i);

       
    }
    
    //agrega el precio total de articulos al html 
    $("#total").text(`Total:$${total}`)
    $(".totalPagar").text(`$${total}`)
    $(".total").text(`Total:$${total}`)
    
    
    
}




$( document ).ready(function() {
    
    if (carritoEnLocal != null) {
        mostrarCarrito()
    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Hay Articulos Seleccionados',
            
          })
        
        //le agregamos una clase al boton para desabilitarlo
        $("#botonDetalle").addClass('desabilitar')
    }
    


});


