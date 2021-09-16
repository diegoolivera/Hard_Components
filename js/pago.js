
$(".comprar").on("click",(e)=>{
    e.preventDefault();
    
    if (isNaN($("#nombre").val())==false){
        $("#nombre").css("background-color", "#f73f11");
        

    }
    else if (isNaN($("#apellido").val())==false){
        $("#apellido").css("background-color", "#f73f11");
    }

    else{
        /*lo que pase cuando aprete el boton confirmar, display al detalle de compra */
    }

   
})