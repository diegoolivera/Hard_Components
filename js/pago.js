
 let bandera = false;
 
 $("#nombre").on("change",()=>{
    
    if ($("#nombre").val().length == 0 ||isNaN($("#nombre").val())==false) {
        
        $("#nombre").css("background-color", "#f73f11")
        bandera = true;
    }
    else{
        $("#nombre").css("background-color", "#fff");
        bandera = false;
    }
})

$("#apellido").on("change",()=>{

    if ($("#apellido").val().length == 0 ||isNaN($("#apellido").val())==false) {
        
        $("#apellido").css("background-color", "#f73f11")
        bandera = true;
    }
    else{
        $("#apellido").css("background-color", "#fff");
        bandera = false;
    }
    
})


$("#direccion").on("change",()=>{
   
    if ($("#direccion").val().length == 0 ||isNaN($("#direccion").val())==false) {
        
        $("#direccion").css("background-color", "#f73f11")
        bandera = true;
    }
    else{
        $("#direccion").css("background-color", "#fff");
        bandera = false;
    }
})




$(".comprar").on("click",(e)=>{
    e.preventDefault();

    let nombre = $("#nombre").val().length;
    let apellido = $("#apellido").val().length;
    let direccion = $("#direccion").val().length;

    if (nombre == 0 || apellido == 0 || direccion ==0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'FALTA COMPLETAR LOS CAMPOS',
          })  
    } 
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



//agregamos al detalle nombres y direccion

const setDatosCliente=()=>{
    let _nombre = $("#nombre").val();
    let _apellido =$("#apellido").val();
    let _direccion = $("#direccion").val();

    $(".nomApe").text(`Nombre:${_nombre}-${_apellido}`)
    $(".domicilio").text(`Direccion:${_direccion}`)

}




const mostrarDetalleCompra = ()=>{

    
    for (let  i= 0;  i< carritoEnLocal.length; i++) {
    
    
        let item = carritoEnLocal[i][0];
        let cantidad =carritoEnLocal[i][1];
        

        $("#tabla").append(`

            <tr>
                <td>${item.nombre}</td>
                <td>${cantidad}</td>
                <td>${item.precio}</td>
            </tr>

        
        `) 
        

    }
    
}


const registrarVenta = ()=>{

    let _nombre = $("#nombre").val();
    let _apellido =$("#apellido").val();
    let _direccion = $("#direccion").val();

    if(localStorage.getItem('ventas') === null){
        let ventas = []
      
        ventas.push(new Date())
        ventas.push(_nombre);
        ventas.push(_apellido)
        ventas.push(_direccion)
        ventas.push(carritoEnLocal)
        localStorage.setItem('ventas', JSON.stringify(ventas))

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha registrado la venta',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else{

        ventas = localStorage.getItem('ventas');
        
        ventas.push(new Date())
        ventas.push(_nombre);
        ventas.push(_apellido)
        ventas.push(_direccion)
        ventas.push(carritoEnLocal)
        localStorage.setItem('ventas', JSON.stringify(ventas))
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha registrado la venta',
            showConfirmButton: false,
            timer: 1500
          })
    }
}



