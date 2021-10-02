
// productos

let productos = [
    {id:1,nombre:"articulo1",precio:1600,imagen:"/img/articulos/auriculares2.jpg",tipo:"Perifericos"},
    {id:2,nombre:"articulo2",precio:1600,imagen:"/img/articulos/auriculares3.jpg",tipo:"Perifericos"},
    {id:3,nombre:"articulo3",precio:600,imagen:"/img/articulos/cooler.jpg",tipo:"Ventilacion"},
    {id:4,nombre:"articulo4",precio:6500,imagen:"/img/articulos/cooler2.jpg",tipo:"Ventilacion"},
    {id:5,nombre:"articulo5",precio:25000,imagen:"/img/articulos/core7.jpg",tipo:"Procesadores"},
    {id:6,nombre:"articulo6",precio:50000,imagen:"/img/articulos/core9.jpg",tipo:"Procesadores"},
    {id:7,nombre:"articulo7",precio:7000,imagen:"/img/articulos/discoDuro.jpg",tipo:"Almacenamiento"},
    {id:8,nombre:"articulo8",precio:5000,imagen:"/img/articulos/discoSolido.jpg",tipo:"Almacenamiento"},
    {id:9,nombre:"articulo9",precio:11000,imagen:"/img/articulos/gabinete1.jpg",tipo:"Gabinetes"},
    {id:10,nombre:"articulo10",precio:7000,imagen:"/img/articulos/gabinete1.jpg",tipo:"Gabinetes"},
    {id:11,nombre:"articulo11",precio:5000,imagen:"/img/articulos/gabinete2.jpg",tipo:"Gabinetes"},
    {id:12,nombre:"articulo12",precio:4000,imagen:"/img/articulos/gabinete3.jpg",tipo:"Gabinetes"},
    {id:13,nombre:"articulo13",precio:6000,imagen:"/img/articulos/gabinete4.jpg",tipo:"Gabinetes"},
    {id:14,nombre:"articulo14",precio:5600,imagen:"/img/articulos/gabinete5.jpg",tipo:"Gabinetes"},
    {id:15,nombre:"articulo15",precio:4000,imagen:"/img/articulos/memoriaRam1.jpg",tipo:"Almacenamiento"},
    {id:16,nombre:"articulo16",precio:6000,imagen:"/img/articulos/motherAmd.jpg",tipo:"Mothers"},
    {id:17,nombre:"articulo17",precio:7500,imagen:"/img/articulos/motherIntel.jpg",tipo:"Mothers"},
    {id:18,nombre:"articulo18",precio:3200,imagen:"/img/articulos/mouse2.jpg",tipo:"Perifericos"},
    {id:19,nombre:"articulo19",precio:4000,imagen:"/img/articulos/mouse3.jpg",tipo:"Perifericos"},
    {id:20,nombre:"articulo20",precio:3200,imagen:"/img/articulos/mouse4.jpg",tipo:"Perifericos"},
    {id:21,nombre:"articulo21",precio:840,imagen:"/img/articulos/netbok.jpg",tipo:"Netbooks"},
    {id:22,nombre:"articulo22",precio:9000,imagen:"/img/articulos/netbook2.jpg",tipo:"Netbooks"},
    {id:23,nombre:"articulo23",precio:1000,imagen:"/img/articulos/pad1.jpg",tipo:"Accesorios"},
    {id:24,nombre:"articulo24",precio:2000,imagen:"/img/articulos/pad3.jpg",tipo:"Accesorios"},
    {id:25,nombre:"articulo25",precio:1500,imagen:"/img/articulos/pastaTermica.jpg",tipo:"Accesorios"},
    {id:26,nombre:"articulo26",precio:50000,imagen:"/img/articulos/placaVideo.jpg",tipo:"Placas Video"},
    {id:27,nombre:"articulo27",precio:400000,imagen:"/img/articulos/placaVideo2.jpg",tipo:"Placas Video"},
    {id:28,nombre:"articulo28",precio:3000,imagen:"/img/articulos/ram.jpg",tipo:"Almacenamiento"},
    {id:29,nombre:"articulo29",precio:53000,imagen:"/img/articulos/ryzen7.jpg",tipo:"Procesadores"},
    {id:30,nombre:"articulo30",precio:3400,imagen:"/img/articulos/teclado4.jpg",tipo:"Perifericos"},
    {id:31,nombre:"articulo31",precio:4000,imagen:"/img/articulos/tecladoKumara.jpg",tipo:"Perifericos"},
    {id:32,nombre:"fuente 1",precio:4000,imagen:"/img/articulos/fuente1.jpg",tipo:"Fuentes"},
    {id:33,nombre:"fuente 2",precio:8000,imagen:"/img/articulos/fuente2.jpg",tipo:"Fuentes"},
    {id:34,nombre:"fuente 3",precio:9300,imagen:"/img/articulos/fuente3.jpg",tipo:"Fuentes"},

];





//funcionalidad de filtro
const filtrado = (f)=>{

    switch (f) {
        case "Todo": 
        borrarProducto(productos)
        mostrarProductos(productos)
        break;

        default:
            borrarProducto(productos)
            let aux = productos.filter(i => i.tipo == f)
            mostrarProductos(aux)
            break;

        }    
}

//agrega los filtros al html
const generarCategorias = ()=>{
    const categorias = ["Todo","Netbooks","Perifericos","Placas Video","Procesadores","Mothers","Ventilacion","Fuentes","Almacenamiento","Gabinetes","Accesorios"]
    for (let i= 0; i < categorias.length; i++) {
        $(".listaProductos").append(`<li><a href="#" id="item${i}">${categorias[i]}</a></li>`);
        $(`#item${i}`).on("click",()=>{
            //llama ala funcion para cerrar el menu mobile
            cerrar()
            //le pasa la categoria seleccionada a filtrado
            filtrado(categorias[i])
        })

        
    }
}



//agregar productos a localStorage
const agregarProducto = (i)=>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1000
    })

    //agrega el producto y un valor para contar cantidad
    let itemAgregar = [i,1]

    if(localStorage.getItem('seleccionados') === null){
        let listaProductos = []
        listaProductos.push(itemAgregar)
        localStorage.setItem('seleccionados', JSON.stringify(listaProductos))
    }
    else{ 
        //en el caso de que si haya uno
        //lo trae guarda el nuevo producto y vuelve a guardar el array
        let listaProductos = JSON.parse(localStorage.getItem('seleccionados'));
        let auxIndex = 0;
        
        if (listaProductos.some(item =>{
            auxIndex++;
            return item[0].id === itemAgregar[0].id;
            
            
        })){
            listaProductos[auxIndex-1][1]++;
            
        }
        else{
            listaProductos.push(itemAgregar);
            
        }
        
        localStorage.setItem('seleccionados', JSON.stringify(listaProductos))
    }    
    
    
   
}

  



let cantCarrito = 0;
//muestra los productos
const mostrarProductos = (productos)=>{

    

    for (const i of productos) {

        $("#seccionArticulos").append(`
        
        <article class="contenedor" >
            <div class="card">
                <img class="imagenCard" src=${i.imagen} alt="imagenProducto">
                <hr class="linea">
                <div class="contenedorDescripcion">
                    <p class="nombreCard"> ${i.nombre}</p>
                    <p class="precioCard"> $${i.precio}</p>
                </div>
                <button class="botonCard" id="btn${i.id}">Agregar Carrito</button>

            </div>

        </article>
        
        
        `)

        //animaciones
        $(".card").hide();
        $(".card").fadeIn(100);
        
        


       //evento para el boton
       
        $(`#btn${i.id}`).on("click",function(){
            //suma 1 cada vez que agrega al carrito
            
           
            let seleccion = i;
            let cantCarrito=localStorage.getItem('cantCarrito');
            cantCarrito++;
            $(".cantProducto").text(`${cantCarrito}`)
            localStorage.setItem('cantCarrito', JSON.stringify(cantCarrito))
           
            //llama a agregar prodcuto y le pasa el articulo
            agregarProducto(seleccion)
  
        })
            
    }
    
}


const setCarrito = ()=>{
    let cantCarrito=localStorage.getItem('cantCarrito');
    $(".cantProducto").text(`${cantCarrito}`)
}

//borra un articulo
const borrarProducto = ()=>{
    $(".contenedor").remove()
    
}

//buscar producto
const buscarProducto = (productos)=>{
    
    
    $("#lupa").on("click",()=>{
        let prod = []
        //limpia los anteriores articulos
        borrarProducto()
        let itemNombre =$("#busqueda").val();

        //valida que ingrese algun articulo
        if (itemNombre.length == 0) {
            Swal.fire({
                icon: 'error',
                text: 'NO ingreso ningun Articulo',
                
              })
              mostrarProductos(productos)
        }
        else{
            let item = productos.find(i => i.nombre == itemNombre)
            
            if (item != null) {
                prod.push(item)
            }

            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'NO SE ENCONTRO EL PRODUCTO',
                    
                  })

                mostrarProductos(productos)
            }
           
        }
        
        
        
        mostrarProductos(prod)
       
    })
    

}







const ordenar = ()=>{
    
    let select = $("#comboSeleccion").val();
    console.log(select)
    if (select == "menor") {
        productos.sort((a,b)=>{
            return a.precio - b.precio;
        });
    }
    else if (select == "mayor") {
        productos.sort((a,b)=>{
            return b.precio - a.precio;
        })
    }
    
    //borra los anteriores articulos
    borrarProducto()
    mostrarProductos(productos)

}







$( document ).ready(function() {
    generarCategorias()
    mostrarProductos(productos)
    buscarProducto(productos)
    //evento para ordenar
    $("#comboSeleccion").on("change",ordenar);  
    setCarrito();
   


  });

  