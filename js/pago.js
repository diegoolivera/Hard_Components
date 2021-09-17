
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
        alert("todo ok")
    }

    
})

let fecha = new Date();

let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let anio = fecha.getFullYear()

$("#fecha").text(`Fecha Compra:${dia}/${mes}/${anio}`)
