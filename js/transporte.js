const url = "/flota.json";

$.get(url,(respuesta,estado)=>{

    if (estado == "success") {
        
        let datos = respuesta;

        for (const auto of datos) {
            $("#transporte").append(

                `
                    <article class="card">
                       
                        <img class="card__imagen" src=${auto.imagen} alt="imagenCamioneta">
                        <p class="card__carga">${auto.carga}</p>
                        <p class="card__velocidad">${auto.velocidad}</p>
                        
                    </article>
                `
            )
        }
    }
})
