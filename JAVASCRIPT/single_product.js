let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



function increase()
{
    document.getElementById("quntity").value=Number(document.getElementById("quntity").value)+1;
   
}

function decrease()
{
    var value=document.getElementById("quntity").value;
    if(value==0)
    {
        document.getElementById("quntity").value=0;
    }
    else
    {
        document.getElementById("quntity").value=Number(document.getElementById("quntity").value)-1;

    }
   
}



function change_color(icon)
{
       icon.style.color="#d0af8a";
       icon.style.cursor="pointer";

}

function change_color2(icon)
{
       icon.style.color="#777777";
}
/*
var my_product={
  img:"m",
  name:"m",
  quantity:0,
  price:0
};
console.log("****************");

console.log(my_product.img);
function create_product()
{
  
  my_product.img=document.querySelector(".product_image").src;
  my_product.name=document.getElementById("product_name").innerHTML;
  my_product.price=document.getElementById("product_price").innerHTML;
  my_product.quantity=Number(document.getElementById("quntity").value);
}
function view_product()
{
  var cartTableBody = document.getElementById("cart_items");
  var row = document.createElement("tr");
  row.innerHTML = `
      <td><img src="${my_product.img}" alt="Product Image"></td>
      <td>${my_product.name}</td>
      <td>${my_product.price}</td>
      <td>${my_product.quantity}</td>
  `;
  cartTableBody.appendChild(row);
}

*/



function addToCart() {
  var product = {
      img: document.querySelector(".product_image").src,
      name: document.getElementById("product_name").innerText,
      price: document.getElementById("product_price").innerText,
      quantity: Number(document.getElementById("quntity").value)
  };

  // Encode the product data as a query parameter
  var productData = encodeURIComponent(JSON.stringify(product));

  // Redirect to the cart page with the product data as a parameter
  window.location.href = "../HTML/cart.html?product=" + productData;
}
