//evento menu hamburguesa
const menu = document.getElementById("listaProductos");
const botonAbrir = document.getElementById("botonAbrirMenu");
const botonCerrar = document.getElementById("cerrarMenu")

const abrir = ()=>{
    menu.style.display = "flex";
    menu.style.top = "0";
}

const cerrar = ()=>{
    menu.style.top = "-1000%"
}


botonAbrir.addEventListener("click",abrir);
botonCerrar.addEventListener("click",cerrar);




//base de productos

let productos = [
    {id:1,nombre:"articulo1",precio:16000,cantidad:9,imagen:"img/articulos/auriculares2.jpg"},
    {id:2,nombre:"articulo2",precio:16000,cantidad:2,imagen:"img/articulos/auriculares3.jpg"},
    {id:3,nombre:"articulo3",precio:6000,cantidad:7,imagen:"img/articulos/cooler.jpg"},
    {id:4,nombre:"articulo4",precio:6500,cantidad:22,imagen:"img/articulos/cooler2.jpg"},
    {id:5,nombre:"articulo5",precio:25000,cantidad:24,imagen:"img/articulos/core7.jpg"},
    {id:6,nombre:"articulo6",precio:50000,cantidad:24,imagen:"img/articulos/core9.jpg"},
    {id:7,nombre:"articulo7",precio:7000,cantidad:24,imagen:"img/articulos/discoDuro.jpg"},
    {id:8,nombre:"articulo8",precio:5000,cantidad:24,imagen:"img/articulos/discoSolido.jpg"},
    {id:9,nombre:"articulo9",precio:11000,cantidad:24,imagen:"img/articulos/fuente asus.jpg"},
    {id:10,nombre:"articulo10",precio:7000,cantidad:24,imagen:"img/articulos/gabinete1.jpg"},
    {id:11,nombre:"articulo11",precio:5000,cantidad:24,imagen:"img/articulos/gabinete2.jpg"},
    {id:12,nombre:"articulo12",precio:4000,cantidad:24,imagen:"img/articulos/gabinete3.jpg"},
    {id:13,nombre:"articulo13",precio:6000,cantidad:24,imagen:"img/articulos/gabinete4.jpg"},
    {id:14,nombre:"articulo14",precio:5600,cantidad:24,imagen:"img/articulos/gabinete5.jpg"},
    {id:15,nombre:"articulo15",precio:4000,cantidad:24,imagen:"img/articulos/memoriaRam1.jpg"},
    {id:16,nombre:"articulo16",precio:6000,cantidad:24,imagen:"img/articulos/motherAmd.jpg"},
    {id:17,nombre:"articulo17",precio:7500,cantidad:24,imagen:"img/articulos/motherIntel.jpg"},
    {id:18,nombre:"articulo18",precio:3200,cantidad:30,imagen:"img/articulos/mouse2.jpg"},
    {id:19,nombre:"articulo19",precio:4000,cantidad:50,imagen:"img/articulos/mouse3.jpg"},
    {id:20,nombre:"articulo20",precio:3200,cantidad:50,imagen:"img/articulos/mouse4.jpg"},
    {id:21,nombre:"articulo21",precio:8400,cantidad:5,imagen:"img/articulos/netbok.jpg"},
    {id:22,nombre:"articulo22",precio:90000,cantidad:3,imagen:"img/articulos/netbook2.jpg"},
    {id:23,nombre:"articulo23",precio:1000,cantidad:24,imagen:"img/articulos/pad1.jpg"},
    {id:24,nombre:"articulo24",precio:2000,cantidad:24,imagen:"img/articulos/pad3.jpg"},
    {id:25,nombre:"articulo25",precio:1500,cantidad:140,imagen:"img/articulos/pastaTermica.jpg"},
    {id:26,nombre:"articulo26",precio:500000,cantidad:9,imagen:"img/articulos/placaVideo.jpg"},
    {id:27,nombre:"articulo27",precio:400000,cantidad:15,imagen:"img/articulos/placavideo2.jpg"},
    {id:28,nombre:"articulo28",precio:3000,cantidad:23,imagen:"img/articulos/ram.jpg"},
    {id:29,nombre:"articulo29",precio:53000,cantidad:12,imagen:"img/articulos/ryzen 7.jpg"},
    {id:30,nombre:"articulo30",precio:3400,cantidad:35,imagen:"img/articulos/teclado4.jpg"},
    {id:31,nombre:"articulo31",precio:4000,cantidad:40,imagen:"img/articulos/tecladoKumara.jpg"},

];

















//agregar al carrito

//recibe el boton que clickeo y la posicion del objeto
const agregarAlcarrito = (boton, i) => {
    
    //le agrega evento al boton
    boton.addEventListener("click", () => {
        
        //sweet alert
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1000
          })

        //guarda los datos de el producto
        const nombre = productos[i].nombre;
        const precio = productos[i].precio;

       
        //creo un objeto literal con los datos almacenados antes
        let productosSeleccionado = {
            nombre,
            precio,
        }       
        
        //verifica si hay ya un array de productos seleccionados
        //si no hay crea uno y lo guarda
        if(localStorage.getItem('seleccionados') === null){
            let listaProductos = []
            listaProductos.push(productosSeleccionado)
            localStorage.setItem('seleccionados', JSON.stringify(listaProductos))
        }
        else{ 
            //en el caso de que si haya uno
            //lo trae guarda el nuevo producto y vuelve a guardar el array
            let listaProductoLocal = JSON.parse(localStorage.getItem('seleccionados'));
            listaProductoLocal.push(productosSeleccionado);
            localStorage.setItem('seleccionados', JSON.stringify(listaProductoLocal))
        }             
    })
}



//obtenemos la seccion para las card
let seccion = document.getElementById("seccionArticulos");

//recorre la mini base de datos
for (let i = 0; i < productos.length; i++) {

    // creamos elementos de la tarjeta
    let tarjeta = document.createElement("article");
    tarjeta.setAttribute("class","card");

    let imagen = document.createElement("img");
    imagen.setAttribute("src", productos[i].imagen);
    imagen.setAttribute("class","imagenCard");
    
    let nombre = document.createElement("p");
    nombre.innerHTML=productos[i].nombre;
    nombre.setAttribute("class","contenedorDescripcion");

    let precio = document.createElement("p");
    precio.innerHTML=`$${productos[i].precio}`;
    precio.setAttribute("class","contenedorDescripcion");

    let boton = document.createElement("button");
    boton.innerHTML= "comprar";
    boton.setAttribute("class","botonCard");

    let hr = document.createElement("hr");
    hr.setAttribute("class","linea");
    

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(hr);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);
    
    seccion.appendChild(tarjeta);






    //le pasa ala funcion el boton y el objeto producto
    agregarAlcarrito(boton,i)
    

}






