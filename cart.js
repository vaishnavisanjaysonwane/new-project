const product = [
    {
        id: 0,
        images: 'images/men1.webp',
        title: 'Men Printed Round Neck Green, White T-Shirt',
        price: 348,
    },
    {
        id: 1,
        images: 'images/Men Printed Round Neck Green, White T-Shirt.webp',
        title: 'Men Printed Round Neck Green, White T-Shirt',
        price: 348,
    },
    {
        id: 2,
        images: 'images/Men Printed Round Neck Green, White T-Shirt.webp',
        title: 'Men Printed Round Neck Green, White T-Shirt',
        price: 348,
    },
    {
        id: 3,
        images: 'images/Men Printed Round Neck Green, White T-Shirt.webp',
        title: 'Men Printed Round Neck Green, White T-Shirt',
        price: 348,
    },

];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='image-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")' > Add to cart</button > " +
        `</div>
        </div>`
    )
}).join('')