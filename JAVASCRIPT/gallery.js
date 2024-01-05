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









var gallery = document.querySelector(".gallery");
var imageitem = document.querySelectorAll(".itembox");

gallery.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter")) {
        gallery.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        var filter_values=e.target.getAttribute("data-filter");
        imageitem.forEach(item =>{
            if(item.classList.contains(filter_values)||filter_values=== "all")
            {
                item.classList.add("show");
                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            }
        })
    }
});

// Your JavaScript code goes here
function setInitialStyles(imageContent) {
    var children = imageContent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(25px)';
        children[i].style.transition = 'transform 0.6s';
    }
}
// Function to toggle show and hide animations
function toggleAnimation(itembox) {
    if (itembox.classList.contains('show')) {
        itembox.classList.remove('show');
        itembox.classList.add('hide');
    } else {
        itembox.classList.remove('hide');
        itembox.classList.add('show');
    }
}

// Function to handle image content hover effect
function showImageContent(imageContent) {
    imageContent.style.opacity = '1';
    var children = imageContent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(0px)';
    }
}

function hideImageContent(imageContent) {
    imageContent.style.opacity = '0';
    var children = imageContent.children;
    for (var i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(25px)';
    }
}

// Add event listeners after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    var itemboxes = document.querySelectorAll('.products .itembox');
    var imageContents = document.querySelectorAll('.image_content');

    imageContents.forEach(function (imageContent) {
        // Set initial styles on page load
        setInitialStyles(imageContent);
    });
    itemboxes.forEach(function (itembox) {
        itembox.addEventListener('click', function () {
            toggleAnimation(itembox);
        });

        var imageContent = itembox.querySelector('.image_content');

        itembox.addEventListener('mouseover', function () {
            showImageContent(imageContent);
        });

        itembox.addEventListener('mouseout', function () {
            hideImageContent(imageContent);
        });
    });
});

function change_color(icon)
{
       icon.style.color="#d0af8a";
       icon.style.cursor="pointer";

}

function change_color2(icon)
{
       icon.style.color="#777777";
}


function  single_product1(){
    window.location.href = "../HTML/products/product1.html" ;
}
function  single_product2(){
    window.location.href = "../HTML/products/product2.html" ;
}
function  single_product3(){
    window.location.href = "../HTML/products/product3.html" ;
}
function  single_product4(){
    window.location.href = "../HTML/products/product4.html" ;
}
function  single_product5(){
    window.location.href = "../HTML/products/product5.html" ;
}
function  single_product6(){
    window.location.href = "../HTML/products/product6.html" ;
}

