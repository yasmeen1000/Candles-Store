
document.addEventListener("DOMContentLoaded", function() {
    reveal(); // Call reveal function on page load
  
    window.addEventListener('scroll', reveal);
  
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
  
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;
  
            if (revealTop < windowHeight - revealPoint || reveals[i].classList.contains('active')) {
                reveals[i].classList.add('active');
            }
        }
    }
  });

// Get existing cart items from local storage or initialize an empty array
var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Get product data from the URL parameter
var urlParams = new URLSearchParams(window.location.search);
var productData = urlParams.get('product');
var product = JSON.parse(decodeURIComponent(productData));
var prices=product.price;
// Function to extract numbers
function myGeeks() {
    // Input string
    let str = prices;
    console.log(str);
 
    // Using match with regEx
    let matches = str.replace(/[^0-9]/g, "");
 
    // Display output if number extracted
    if (matches) {
        console.log(matches);
        return matches;
    }
}
 
// Function call
prices=myGeeks();
// Check if the product is already in the cart
var existingProduct = cartItems.find(item => item.name === product.name);

if (!existingProduct) {
    // Add the new product to the cart
    cartItems.push(product);

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

// Display the cart items on the cart page
var cartTableBody = document.getElementById("cart_items");
var total;
total=prices*product.quantity;
cartItems.forEach(function (item) {
    var row = document.createElement("tr");
    
    row.innerHTML = `
    <td class="product_image" style="display: flex;"><img src="${product.img}" width="100px" alt="Product Image ">
    <h5>${item.name}</h5>
    </td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>$${total}</td>
    `;
    cartTableBody.appendChild(row);
});


function buy(){
    window.location.href = "../HTML/checkout.html" ;
}

var dropdowns = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdowns.length; i++) {
 dropdowns[i].addEventListener("mouseover", function () {
    this.getElementsByClassName("dropdown-content")[0].style.display = "block";
});

dropdowns[i].addEventListener("mouseout", function () {
    this.getElementsByClassName("dropdown-content")[0].style.display = "none";
});

dropdowns[i].addEventListener("click", function () {
    this.getElementsByClassName("dropdown-content")[0].style.display = "none";
});
}

var clients = document.getElementsByClassName("opacity");
for (var i = 0; i < clients.length; i++) {
clients[i].addEventListener("mouseover", function () {
    this.style.opacity = 1;
});
clients[i].addEventListener("mouseout", function () {
    this.style.opacity = 0.4;
});

}