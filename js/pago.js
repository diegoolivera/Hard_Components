

//valida los campos del formulario resaltando con color
$("#nombre").on("change",()=>{
    
    if ($("#nombre").val().length == 0 ||isNaN($("#nombre").val())==false) {
            
            $("#nombre").css("background-color", "#f73f11")
        
    }
    else{
            $("#nombre").css("background-color", "#fff");
            
    }
})
    
$("#apellido").on("change",()=>{
    
    if ($("#apellido").val().length == 0 ||isNaN($("#apellido").val())==false) {
            
        $("#apellido").css("background-color", "#f73f11")
        
    }
    else{
        $("#apellido").css("background-color", "#fff");
            
    }
        
})
    
    
$("#direccion").on("change",()=>{
        
    if ($("#direccion").val().length == 0 ||isNaN($("#direccion").val())==false) {
            
        $("#direccion").css("background-color", "#f73f11")
        
    }
    else{
        $("#direccion").css("background-color", "#fff");
            
        }
})

 
 


const principal = ()=>{

    //evento al boton comprar del carrito
    $(".comprar").on("click",(e)=>{
    
        e.preventDefault();
        
    
        let nombre = $("#nombre").val().length;
        let apellido = $("#apellido").val().length;
        let direccion = $("#direccion").val().length;
    
        //valida el formulario
        if ((nombre == 0 || apellido == 0 || direccion ==0)||(isNaN($("#nombre").val())==false)||(isNaN($("#apellido").val())==false)||(isNaN($("#direccion").val())==false)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'FALTA COMPLETAR LOS CAMPOS',
              })  
        }
        //validaciones correctas del formulario entra aca 
        else {
            
            $(".formulario").css("display","none")
            $(".detalleCompra").css("display","block")
            
            
            setFecha();
            setDatosCliente();
            mostrarDetalleCompra();
            registrarVenta()
            
        }
    
        
    })
    
    
    //agregamos la fecha al detalle
    
    const setFecha = ()=>{
    
        let fecha = new Date();
    
        let dia = fecha.getDate();
        let mes = fecha.getMonth()+1;
        let anio = fecha.getFullYear()
    
        $("#fecha").text(`Fecha Compra:${dia}/${mes}/${anio}`)
    }

}





//agregamos al detalle nombres y direccion al detalle

const setDatosCliente=()=>{
    let _nombre = $("#nombre").val();
    let _apellido =$("#apellido").val();
    let _direccion = $("#direccion").val();

    $(".nomApe").text(`Nombre:${_nombre}-${_apellido}`)
    $(".domicilio").text(`Direccion:${_direccion}`)

}



//mustra los productos en el detalle
const mostrarDetalleCompra = ()=>{

    
    for (let  i= 0;  i< carritoEnLocal.length; i++) {
    
    
        let item = carritoEnLocal[i][0];
        let cantidad =carritoEnLocal[i][1];
        

        $("#tabla").append(`

            <tr>
                <td>${item.nombre}</td>
                <td>${cantidad}</td>
                <td>${`$${item.precio}`}</td>
            </tr>

        
        `) 
        

    }
    
}


//registra la venta en localStorage
const registrarVenta = ()=>{

    let _nombre = $("#nombre").val();
    let _apellido =$("#apellido").val();
    let _direccion = $("#direccion").val();
    
    if(localStorage.getItem('ventas') === null){
        let ventas = []
      
        ventas.push(new Date());
        ventas.push(_nombre);
        ventas.push(_apellido);
        ventas.push(_direccion);
        ventas.push(carritoEnLocal);
        localStorage.setItem('ventas', JSON.stringify(ventas));

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha registrado la venta',
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    else{

        ventasLocal = JSON.parse( localStorage.getItem('ventas'));
        
        ventasLocal.push(new Date())
        ventasLocal.push(_nombre);
        ventasLocal.push(_apellido)
        ventasLocal.push(_direccion)
        ventasLocal.push(carritoEnLocal)
        localStorage.setItem('ventas', JSON.stringify(ventasLocal))
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha registrado la venta',
            showConfirmButton: false,
            timer: 1500
          })
     

        
        
    }

    
    localStorage.removeItem("seleccionados");
}






$( document ).ready(function() {
    //cuando todo este ready llamamos a principal que llama a las demas funciones
    principal()
});