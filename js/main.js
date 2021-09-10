



//base de productos

let productos = [
    {id:1,nombre:"articulo1",precio:16000,cantidad:9,imagen:"/img/articulos/auriculares2.jpg",tipo:"Perifericos"},
    {id:2,nombre:"articulo2",precio:16000,cantidad:2,imagen:"/img/articulos/auriculares3.jpg",tipo:"Perifericos"},
    {id:3,nombre:"articulo3",precio:6000,cantidad:7,imagen:"/img/articulos/cooler.jpg",tipo:"Ventilacion"},
    {id:4,nombre:"articulo4",precio:6500,cantidad:22,imagen:"/img/articulos/cooler2.jpg",tipo:"Ventilacion"},
    {id:5,nombre:"articulo5",precio:25000,cantidad:24,imagen:"/img/articulos/core7.jpg",tipo:"Procesadores"},
    {id:6,nombre:"articulo6",precio:50000,cantidad:24,imagen:"/img/articulos/core9.jpg",tipo:"Procesadores"},
    {id:7,nombre:"articulo7",precio:7000,cantidad:24,imagen:"/img/articulos/discoDuro.jpg",tipo:"Almacenamiento"},
    {id:8,nombre:"articulo8",precio:5000,cantidad:24,imagen:"/img/articulos/discoSolido.jpg",tipo:"Almacenamiento"},
    {id:9,nombre:"articulo9",precio:11000,cantidad:24,imagen:"/img/articulos/gabinete1.jpg",tipo:"Gabinetes"},
    {id:10,nombre:"articulo10",precio:7000,cantidad:24,imagen:"/img/articulos/gabinete1.jpg",tipo:"Gabinetes"},
    {id:11,nombre:"articulo11",precio:5000,cantidad:24,imagen:"/img/articulos/gabinete2.jpg",tipo:"Gabinetes"},
    {id:12,nombre:"articulo12",precio:4000,cantidad:24,imagen:"/img/articulos/gabinete3.jpg",tipo:"Gabinetes"},
    {id:13,nombre:"articulo13",precio:6000,cantidad:24,imagen:"/img/articulos/gabinete4.jpg",tipo:"Gabinetes"},
    {id:14,nombre:"articulo14",precio:5600,cantidad:24,imagen:"/img/articulos/gabinete5.jpg",tipo:"Gabinetes"},
    {id:15,nombre:"articulo15",precio:4000,cantidad:24,imagen:"/img/articulos/memoriaRam1.jpg",tipo:"Almacenamiento"},
    {id:16,nombre:"articulo16",precio:6000,cantidad:24,imagen:"/img/articulos/motherAmd.jpg",tipo:"Mother"},
    {id:17,nombre:"articulo17",precio:7500,cantidad:24,imagen:"/img/articulos/motherIntel.jpg",tipo:"Mother"},
    {id:18,nombre:"articulo18",precio:3200,cantidad:30,imagen:"/img/articulos/mouse2.jpg",tipo:"Perifericos"},
    {id:19,nombre:"articulo19",precio:4000,cantidad:50,imagen:"/img/articulos/mouse3.jpg",tipo:"Perifericos"},
    {id:20,nombre:"articulo20",precio:3200,cantidad:50,imagen:"/img/articulos/mouse4.jpg",tipo:"Perifericos"},
    {id:21,nombre:"articulo21",precio:8400,cantidad:5,imagen:"/img/articulos/netbok.jpg",tipo:"Netbooks"},
    {id:22,nombre:"articulo22",precio:90000,cantidad:3,imagen:"/img/articulos/netbook2.jpg",tipo:"Netbooks"},
    {id:23,nombre:"articulo23",precio:1000,cantidad:24,imagen:"/img/articulos/pad1.jpg",tipo:"Accesorios"},
    {id:24,nombre:"articulo24",precio:2000,cantidad:24,imagen:"/img/articulos/pad3.jpg",tipo:"Accesorios"},
    {id:25,nombre:"articulo25",precio:1500,cantidad:140,imagen:"/img/articulos/pastaTermica.jpg",tipo:"Accesorios"},
    {id:26,nombre:"articulo26",precio:500000,cantidad:9,imagen:"/img/articulos/placaVideo.jpg",tipo:"Placas Video"},
    {id:27,nombre:"articulo27",precio:400000,cantidad:15,imagen:"/img/articulos/placavideo2.jpg",tipo:"Placas Video"},
    {id:28,nombre:"articulo28",precio:3000,cantidad:23,imagen:"/img/articulos/ram.jpg",tipo:"Almacenamiento"},
    {id:29,nombre:"articulo29",precio:53000,cantidad:12,imagen:"/img/articulos/ryzen 7.jpg",tipo:"Procesadores"},
    {id:30,nombre:"articulo30",precio:3400,cantidad:35,imagen:"/img/articulos/teclado4.jpg",tipo:"Perifericos"},
    {id:31,nombre:"articulo31",precio:4000,cantidad:40,imagen:"/img/articulos/tecladoKumara.jpg",tipo:"Perifericos"},

];

localStorage.clear()


const agregarProdcuto = (i)=>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1000
    })

    if(localStorage.getItem('seleccionados') === null){
        let listaProductos = []
        listaProductos.push(i)
        localStorage.setItem('seleccionados', JSON.stringify(listaProductos))
    }
    else{ 
        //en el caso de que si haya uno
        //lo trae guarda el nuevo producto y vuelve a guardar el array
        let listaProductoLocal = JSON.parse(localStorage.getItem('seleccionados'));
        listaProductoLocal.push(i);
        localStorage.setItem('seleccionados', JSON.stringify(listaProductoLocal))
    }             
}


const mostrarProductos = (productos)=>{

    for (const i of productos) {

        $("#seccionArticulos").append(`
        
        <article class="contenedor">
            <div class="card">
                <img class="imagenCard" src=${i.imagen} alt="imagenProducto">
                <hr class="linea">
                <div class="contenedorDescripcion">
                    <p> ${i.nombre}</p>
                    <p> $${i.precio}</p>
                </div>
                <button class="botonCard" id="btn${i.id}">Agregar</button>

            </div>

        </article>
        
        
        `)


       //evento para el boton
        $(`#btn${i.id}`).on("click",function(){

            let seleccion = i;
            
            agregarProdcuto(seleccion)
           
           
        })
            
    }
    
}

const borrarProducto = ()=>{
    $(".contenedor").remove()
    
}

const buscarProducto = (productos)=>{
    
    
    $("#lupa").on("click",()=>{
        let prod = []
        borrarProducto()
        let itemNombre =$("#busqueda").val();
        let item = productos.find(i => i.nombre == itemNombre)
        prod.push(item)
        
        mostrarProductos(prod)
       
    })
    

}

const filtroProducto = (productos)=>{
    
    filtro = $("#listaProductos li").on("click").html()
    console.log(filtro)

    // filtrados = productos.filter(i=> i.tipo == filtro)

    
    
}



/*buscarProducto(productos)*/


mostrarProductos(productos)
buscarProducto(productos)
filtroProducto()


