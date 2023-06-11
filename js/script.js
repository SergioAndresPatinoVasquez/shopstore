let menuUsuario = document.querySelector(".nav-usuario");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamIcon = document.querySelector(".menu");
let menuCarritoIcon = document.querySelector(".nav-carrito");
let mobilemenu = document.querySelector(".mobile-menu");
let aside = document.querySelector('.product-detail');
let contador_carrito = document.querySelector('.contadorCarrito').innerText;
const cardsContainer = document.querySelector('.contenedor-carts');


menuUsuario.addEventListener('click', intercambiarDesktopMenu);
menuHamIcon.addEventListener('click', intercambiarMobileMenu);
menuCarritoIcon.addEventListener('click', intercambiarCarritoAside);


function intercambiarDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function intercambiarMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function intercambiarCarritoAside() {
    const ismobilemenuClosed = mobilemenu.classList.contains('inactive');

    if (!ismobilemenuClosed) {
        mobilemenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Taylor Eléctrica',
    price: 120,
    image: '../imagenes/Taylor Electrica.jpg',
});
productList.push({
    name: 'Epiphone',
    price: 140,
    image: '../imagenes/Guitarra Epiphone.jpg',
});
productList.push({
    name: 'Piano',
    price: 560,
    image: '../imagenes/Piano.jpg'
});
productList.push({
    name: 'Ukulele',
    price: 70,
    image: '../imagenes/Ukulele.jpg'
});
productList.push({
    name: 'Microfono',
    price: 200,
    image: '../imagenes/Micrófono.jpg'
});
productList.push({
    name: 'Telecaster',
    price: 120,
    image: '../imagenes/Telecaster.jpg'
});
productList.push({
    name: 'Saxofon',
    price: 350,
    image: '../imagenes/Saxofon.jpg'
});
productList.push({
    name: 'Gybson',
    price: 200,
    image: '../imagenes/Gybson Acustica.jpg'
});
productList.push({
    name: 'Bateria',
    price: 720,
    image: '../imagenes/Bateria.jpg'
});
productList.push({
    name: 'Pua',
    price: 10,
    image: '../imagenes/Pua.jpg'
});
productList.push({
    name: 'Gybson Eléctrica',
    price: 250,
    image: '../imagenes/Gybson Eléctrica.jpg'
});
productList.push({
    name: 'Guitarra Acústica',
    price: 90,
    image: '../imagenes/Guitarra acustica.jpg'
});
productList.push({
    name: 'Yamaha Cx4',
    price: 170,
    image: '../imagenes/Yamaha.jpg'
});

// <!-- <div class="items-carts">

// <img src="../imagenes/pexels-aidan-jarrett-718981.jpg" alt="">
// <div class="info-productos">

//     <div>
//         <p>$120</p>
//         <p>Jean</p>
//     </div>

//     <figure>
//         <img src="../iconos/agregarcarrito.svg" alt="carrito para agregar item">
//     </figure>

// </div> -->


    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('items-carts');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('info-productos');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; //
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productPrice.classList.add("precio");
        productName.classList.add("nombre");

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.classList.add("addCarrito");
        
        productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');
        //console.log(productImgCart);

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

    let carritoDeCompra = [];
    let contador =0

function agregarCarrito(e){

    contador_carrito = parseInt(contador_carrito) +1;
    console.log("carrito contando : ", contador_carrito);
    document.querySelector('.contadorCarrito').innerText = contador_carrito;

    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let bisabuelo = abuelo.parentNode;

    //console.log("hijo : ", hijo);
    //console.log("padre : ", padre);
    //console.log("abuelo : ", abuelo);
    //console.log("bisabuelo : ", bisabuelo);
    let precioProducto = abuelo.querySelector(".precio").textContent;
    let nombreProducto = abuelo.querySelector(".nombre").textContent;
    let imgProducto = bisabuelo.querySelector("img").src;
    //console.log("Nombre : ", nombreProducto);
    //console.log("Precio : ", precioProducto);
    //console.log("img ruta : ", imgProducto);

    let producto = {
        nombre : nombreProducto,
        precio : precioProducto,
        img : imgProducto,
        id: contador,
        

    };

    carritoDeCompra.push(producto);
    contador = contador +1;


    console.log(carritoDeCompra);

    //renderizar en carrito
    mostrar_carrito();
    
}





let contenedor_renderCarrito = document.querySelector('.my-order-content');

function mostrar_carrito(){

contenedor_renderCarrito.innerHTML = "";

for(let producto of carritoDeCompra){


    let div_carrito = document.createElement("div");
    div_carrito.classList.add("shopping-cart");

    let img_figure = document.createElement("figure");
    let image = document.createElement("img");
    image.setAttribute('src', producto.img);
    img_figure.appendChild(image);

    let product_Name = document.createElement("p");
    product_Name.classList.add("nombreItemCarrito");
    product_Name.innerText = producto.nombre;

    let product_Price = document.createElement("p");
    product_Price.innerText = producto.precio;

    let eliminar_producto = document.createElement("img");
    eliminar_producto.classList.add("eliminarProducto");
    //eliminar_producto.classList.add("borrarProducto");
    eliminar_producto.setAttribute('src', '../iconos/icon_close.png');

    div_carrito.appendChild(img_figure);
    div_carrito.appendChild(product_Name);
    div_carrito.appendChild(product_Price);
    div_carrito.appendChild(eliminar_producto);
    contenedor_renderCarrito.appendChild(div_carrito);    

}

let eliminar_Item = document.querySelectorAll(".eliminarProducto");
    for(let eliminar of eliminar_Item){
        eliminar.addEventListener("click", borrar_item);
       
    }

mostrar_total();

}

function mostrar_total(){

let total = document.createElement("div");
total.classList.add("order");
let p_total = document.createElement("p");
let span_total = document.createElement("span");
span_total.innerText = "Total";
p_total.appendChild(span_total);
let precioTotal = document.createElement("p");
precioTotal.innerText ="0";

total.appendChild(p_total);
total.appendChild(precioTotal);


contenedor_renderCarrito.appendChild(total);

let pagarCarrito = document.createElement("button");
pagarCarrito.classList.add("primary-button");
pagarCarrito.innerText = "Pagar";
contenedor_renderCarrito.appendChild(pagarCarrito);


    let TotalAPagar = 0;
    for(let item of carritoDeCompra){
        
        const str = item.precio;
        const newprecio = str.slice(1);
        //console.log("CARRO : ", newprecio);
        //console.log(typeof newprecio);
        TotalAPagar = TotalAPagar + parseInt(newprecio);
        console.log(TotalAPagar);
        precioTotal.innerText ='$' + TotalAPagar;
    }

}

let nombre_item = "";
function borrar_item(e){

    contador_carrito = contador_carrito-1;
    document.querySelector('.contadorCarrito').innerText = contador_carrito;
    
    console.log("borrar el producto", e.target);
    console.log("borrar el producto", e.target.parentNode);

    let padre = e.target.parentNode;

    nombre_item = padre.querySelector('.nombreItemCarrito').innerText;
    console.log("nombre : ", nombre_item);
    padre.remove();

    actualizarCarrito();

}

let i = 0;
function actualizarCarrito(){
    
    

    let carritoActualizado = carritoDeCompra.filter(actualizar);
    console.log("nuevo arreglo actualizado", carritoActualizado);
    carritoDeCompra="";
    carritoDeCompra = carritoActualizado;
    console.log("nuevo arreglo actualizado", carritoDeCompra);

    function actualizar(objeto){

        if(objeto.nombre != nombre_item){

            return objeto;
        } else if (i==0) {
            i = i +1;
            
        } else if(i>=1){
            return objeto;
        }
        
    }
    i =0;
    mostrar_carrito();
}

let carritoCompra = document.querySelectorAll(".addCarrito");

for (let imgcompra of carritoCompra){

    imgcompra.addEventListener("click", agregarCarrito);
}