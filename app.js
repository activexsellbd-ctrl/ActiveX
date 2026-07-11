// ======================================
// ActiveX Ultra Pro Max
// File 3 : js/app.js
// ======================================

// Featured Products

const products = [

{
id:1,
name:"ActiveX Football Jersey",
price:1499,
image:"assets/products/jersey.jpg",
rating:4.9
},

{
id:2,
name:"Running Shoes",
price:3499,
image:"assets/products/shoes.jpg",
rating:4.8
},

{
id:3,
name:"Sports Backpack",
price:1999,
image:"assets/products/bag.jpg",
rating:4.7
},

{
id:4,
name:"Training T-Shirt",
price:999,
image:"assets/products/tshirt.jpg",
rating:4.8
}

];

const productContainer = document.getElementById("products");

function loadProducts(){

if(!productContainer) return;

productContainer.innerHTML="";

products.forEach(product=>{

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<h4>৳ ${product.price}</h4>

<p>⭐ ${product.rating}</p>

<button onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`;

});

}

loadProducts();


// =========================
// Cart
// =========================

let cart=[];

function addToCart(id){

const item=products.find(p=>p.id===id);

cart.push(item);

localStorage.setItem("activexCart",JSON.stringify(cart));

alert(item.name+" Added Successfully");

updateCart();

}

function updateCart(){

console.log("Cart :",cart.length);

}


// =========================
// Search
// =========================

const searchInput=document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(keyword))
card.style.display="block";
else
card.style.display="none";

});

});

}


// =========================
// Wishlist (Temporary)
// =========================

let wishlist=[];

function addWishlist(id){

wishlist.push(id);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert("Added To Wishlist");

}


// =========================
// Greeting
// =========================

console.log("Welcome To ActiveX Ultra Pro Max");