const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";

$.get(url,(respuesta,estado)=>{

    if (estado == "success") {
        
        let datos = respuesta;

        for (const auto of datos) {
            $("#transporte").append(

                `
                    <article class="card">
                       
                        <p class="card__nombre">${auto.nome}</p>
                        
                    </article>
                `
            )
        }
    }
})
