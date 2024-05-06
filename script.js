const nav  =document.querySelector("#nav");
const cerrar=document.querySelector("#cerrar");
const abrir=document.querySelector("#abrir");

 abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
 });

 cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
 });

//------------------------- Parte de carrito de compras-----------------

let cartItems =[];

function addToCart(itemName, price){
   cartItems.push({itemName,price});
   updateCart();
}

function updateCart(){
   const cartList = document.getElementById('cart-items');
   cartList.innerHTML='';
   let totalPrice=0;
   cartItems.forEach(item =>{
     const li = document.createElement('li');
     li.textContent =`${item.itemName} - $${item.price}`;
     cartList.appendChild(li);
     totalPrice += item.price;
   });
   document.getElementById('total-price').textContent =
   `Total: $${totalPrice.toFixed(2)}`;
};

 function sendWhatsAppMessage(){
   let totalPrice = getTotalPrice();
   let message=`Mi pedido en total es: $${totalPrice}`;
   let phoneNumber='112345672'
   let whatsapplink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
   window.open(whatsapplink,  '_blank');
   clearCart();
 };

function getTotalPrice(){
   let totalPrice =0;
   cartItems.forEach(item =>{
      totalPrice += item.price;
   });
   return totalPrice.toFixed(2);
};

function clearCart(){
   cartItems =[];
   updateCart();
}