let seccionSeleccionados = document.getElementById("listaProductos");

let carritoEnLocal =JSON.parse(localStorage.getItem('seleccionados'));


for (let  i= 0;  i< carritoEnLocal.length; i++) {
    
    let nombre = carritoEnLocal[i].nombre;
    let precio = carritoEnLocal[i].precio;

    console.log(nombre)
    console.log(precio)
    seccionSeleccionados.innerHTML += `

    <article class="contenedor">
                <div class="flex">
                    <p> ${nombre}</p>
                    <p> $${precio}</p>
                    <p><i class="fas fa-times logoBorrar"></i></p>

                </div>
    
    </article>
    


    
    
    `
}
