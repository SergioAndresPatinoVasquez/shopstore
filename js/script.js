let menuUsuario = document.querySelector(".nav-usuario");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamIcon = document.querySelector(".menu");
let menuCarritoIcon = document.querySelector(".nav-carrito");
let mobilemenu = document.querySelector(".mobile-menu");
let aside = document.querySelector('.product-detail');
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
    name: 'Jean',
    price: 120,
    image: '../imagenes/pexels-aidan-jarrett-718981.jpg'
});
productList.push({
    name: 'Jean',
    price: 120,
    image: '../imagenes/pexels-aidan-jarrett-718981.jpg'
});
productList.push({
    name: 'Jean',
    price: 120,
    image: '../imagenes/pexels-aidan-jarrett-718981.jpg'
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('items-carts');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('info-productos');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../iconos/agregarcarrito.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);