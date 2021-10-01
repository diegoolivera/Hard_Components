//obtenemos carrito del localStorage
let carritoEnLocal =JSON.parse(localStorage.getItem('seleccionados'));

//funciones

//borra un articulo
const borrador=()=>{
    $(".contenedor").remove();
}


//boton borrar todo

const borrarTodo = ()=>{

    $(".borrar").on("click",()=>{

        //borra el local storage de "carrito"
        localStorage.removeItem("seleccionados");
        borrador();
        
        let cantCarrito=localStorage.getItem('cantCarrito');
        cantCarrito = 0;
        localStorage.setItem("cantCarrito",JSON.stringify(cantCarrito))

        //le agregamos una clase al boton para desabilitarlo
        $("#botonDetalle").addClass('desabilitar');
    })

}



//borra articulos del carrito
const borrarItem = (botonEliminar,i)=>{

    //al boton recibido le agregamos un evento
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
                if (carritoEnLocal.length == 0) {
                    return;
                }
        
                if (carritoEnLocal.length === 1) {
                    
                    
                    borrador()
                    localStorage.clear();
                    let cantCarrito=localStorage.getItem('cantCarrito');
                    cantCarrito = 0;
                    localStorage.setItem("cantCarrito",JSON.stringify(cantCarrito))
                    
                    $("#total").text("Total:0")
                    return;
                }

                let cantCarrito=localStorage.getItem('cantCarrito');
                cantCarrito -= carritoEnLocal[i][1];
                localStorage.setItem("cantCarrito",JSON.stringify(cantCarrito))

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
                <p class="nombreItem"> ${item.nombre}</p>
                <p class="precioItem"> $${item.precio}</p>
                <p id="cant">${cantidad}</p>
                <i id="btn${i}" class="fas fa-times-circle"></i>

            </div>

        </article>
        
        
        
        `) 
        
        
        // acumula y multiplica precio por cantidad por cada vuelta del for
        total += item.precio*cantidad
        
        const botonEliminar = $(`#btn${i}`);
        
        // ala funcion borrar le pasamos el boton y el articulo
        borrarItem(botonEliminar,i);

       
    }
    
    //agrega el precio total de articulos al carrito
    $("#total").text(`Total:$${total}`)
    // ""  al formulario de pago
    $(".totalPagar").text(`$${total}`)
    // "" al detalle de compra
    $(".total").text(`Total:$${total}`)
    
    
    
}




$( document ).ready(function() {
    borrarTodo()
    //si el carrito no esta vacio mostramos esos articulos
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


