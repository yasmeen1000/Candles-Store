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


var welcomeText = document.getElementById("welcomeText");
var headingText = document.getElementById("headingText");
var paragraphText = document.getElementById("paragraphText");
var buttonText = document.getElementById("buttonText");
var backgroundImage = document.getElementById("backgroundImage");

var texts = [
  { welcome: "Welcome to Aromatica", heading: "Let our candles create the atmosphere", paragraph: "Our store offers a wide variety of scented candles from the world’s top candle manufacturers.", button: "SHOP Now" },
  { welcome: "Candles You’ll Love", heading: "Best Fragrances for Your Enjoyment", paragraph: "At our store, you can find candles with the best scents to help you relax and unwind.", button: "SHOP Now" }
];

var images = [
  "../candles/slide-2.jpg",
  "../candles/slide-1.jpg"
];

var currentIndex = 0;

function updateBackgroundContent() {
  var currentTexts = texts[currentIndex];
  console.log(currentTexts);
  welcomeText.textContent = currentTexts.welcome;
  headingText.textContent = currentTexts.heading;
  paragraphText.textContent = currentTexts.paragraph;
  buttonText.textContent = currentTexts.button;

  backgroundImage.style.backgroundImage = `url("${images[currentIndex]}")`;
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(updateBackgroundContent, 3000);


document.addEventListener('DOMContentLoaded', function () {

  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const statusElement = document.getElementById('status');
  const imageElement = document.getElementById('image');
  const prevButton = document.getElementById('prevO');
  const nextButton = document.getElementById('nextO');


  fetch('../JAVASCRIPT/testimonials.json')
    .then(response => response.json())
    .then(data => {
      let index = 0;
      const testimonials = data;
      displayTestimonial(index);
      function nextSlide() {
        index++;
        if (index >= testimonials.length) {
          index = 0;
        }
        displayTestimonial(index);
      }


      function prevSlide() {
        index--;
        if (index < 0) {
          index = testimonials.length - 1;
        }
        displayTestimonial(index);
      }


      function displayTestimonial(index) {
        const testimonial = testimonials[index];
        quoteElement.textContent = testimonial.quote;
        authorElement.textContent = testimonial.author;
        statusElement.textContent = testimonial.status;
        imageElement.src = testimonial.image;
      }

      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);
    });
});


const zoomElements = document.querySelectorAll('.zoom');

zoomElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.querySelector('img').style.transform = 'scale(.9,.9)';
    element.querySelector('img').style.transition = 'transform 0.3s ease-in-out';
  });

  element.addEventListener('mouseout', () => {
    element.querySelector('img').style.transform = 'scale(1,1)';
    element.querySelector('img').style.transition = 'transform 0.3s ease-in-out';
  });
});



var toggleText = document.getElementsByClassName("toggleText");
var toggleLink = document.getElementsByClassName("toggleLink");
var paragraphs = document.getElementsByClassName("collaps");

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.display = "none";
}

paragraphs[0].style.display = "block";


for (var i = 0; i < toggleLink.length; i++) {
  toggleLink[i].addEventListener("click", function (event) {
    event.preventDefault();
    var currentParagraph = this.parentNode.parentNode.nextElementSibling;
    var currentIndex = Array.prototype.indexOf.call(paragraphs, currentParagraph);
    localStorage.setItem("openParagraphIndex", currentIndex);


    for (var j = 0; j < paragraphs.length; j++) {
      if (j !== currentIndex) {
        paragraphs[j].style.display = "none";
      }
    }

    if (currentParagraph.style.display === "none") {
      currentParagraph.style.display = "block";
    } else {
      currentParagraph.style.display = "none";
    }
  });
}

for (var i = 0; i < toggleText.length; i++) {
  toggleText[i].addEventListener("click", function (event) {
    event.preventDefault();
    var currentParagraph = this.parentNode.parentNode.nextElementSibling;

    var currentIndex = Array.prototype.indexOf.call(paragraphs, currentParagraph);
    localStorage.setItem("openParagraphIndex", currentIndex);


    for (var j = 0; j < paragraphs.length; j++) {
      if (j !== currentIndex) {
        paragraphs[j].style.display = "none";
      }
    }


    if (currentParagraph.style.display === "none") {
      currentParagraph.style.display = "block";
    } else {
      currentParagraph.style.display = "none";
    }
  });
}



var displayinlin = document.getElementsByClassName("displayinlin");
var arrows = document.getElementsByClassName("arrows");
for (var i = 0; i < displayinlin.length; i++) {
  displayinlin[i].addEventListener("mouseover", function () {
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].style.transform = "rotate(90deg)";

    }

  });
  displayinlin[i].addEventListener("mouseout", function () {
    for (var i = 0; i < arrows.length; i++) {
      arrows[i].style.transform = "none";

    }

  });

}

function hover(eve) {
  eve.style.color = "#d0af8a";
}
function changeColorB(eve) {
  eve.style.color = "#434345";
}
function changeColor(eve) {
  eve.style.color = "#777777";

}

const postsContainer = document.querySelector('.stag');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const posts = postsContainer.querySelectorAll('.zoom');
const totalPosts = posts.length;
currentIndex = 0;

for (let i = 0; i < totalPosts; i++) {
  if (i < 3) {
    posts[i].classList.add('active');
  }
}

nextButton.addEventListener('click', () => {
  if (currentIndex < totalPosts - 3) {
    posts[currentIndex].classList.remove('active');
    currentIndex++;
    posts[currentIndex + 2].classList.add('active');
  } else {
    currentIndex = 0;
    postsContainer.querySelectorAll('.active').forEach(post => {
      post.classList.remove('active');
    });
    for (let i = 0; i < 3; i++) {
      posts[i].classList.add('active');
    }
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    posts[currentIndex + 2].classList.remove('active');
    currentIndex--;
    posts[currentIndex].classList.add('active');
  } else {
    currentIndex = totalPosts - 3;
    postsContainer.querySelectorAll('.active').forEach(post => {
      post.classList.remove('active');
    });
    for (let i = currentIndex; i < totalPosts; i++) {
      if (i < currentIndex + 3) {
        posts[i].classList.add('active');
      }
    }
  }
});

// ---------------------------------------------------------------------------------------------
let Products_Data = [];
//var filterprice;
function filter_category_votive()
{
  fetch('../JAVASCRIPT/products.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      

      const productsContainer = document.getElementById('all_items');
      const filter1 = data.products.filter(product => (product.category == "Votive"));
            console.log(filter1);
            productsContainer.innerHTML='';

      
      filter1.forEach(product => {
        //Products_Data += product;
        //console.log(Products_Data);
        const item = document.createElement('div');
        item.classList.add('item_item');
        item.innerHTML = `
            <div class="product_information">
            <div class="item_image"><img src="${product.image}" alt="${product.name} width="137" height="156"></div>
            <div class="name_product"><a href="../HTML/single_product.html">${product.name}</a></div>
            <div class="price_product"><div >$${product.price}.00</div></div>

            </div>

            <div class="Buttons">
            <button class="Button" ><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
            <button class="Button button2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="22" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
            </div>
            `;


        //item.style.margin='0px'

        productsContainer.appendChild(item);



        // Add the hover effect to the item
        item.addEventListener('mouseover', function () {
          this.style.transform = 'scaleY(1.2)';
          this.style.boxShadow = '0px 0px 10px .2px rgba(196, 193, 193, 0.932)';
          this.style.backgroundColor = 'white';
          //this.childNodes.style.transform = 'scaleY(1/1.2)';

          var childNodes = this.children;
          for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = 'scaleY(.83)';
            //childNodes[i].style.top = '25px';

          }
          console.log(childNodes.length);
          this.children[0].style.top = '25px';
          this.children[1].style.display = 'block'
          this.children[1].style.bottom = '40px';

          var children_buttons = this.children[1].children;
          console.log(children_buttons.length);

          for (var i = 0; i < children_buttons.length; i++) {
            children_buttons[i].addEventListener('mouseover', function () {
              this.style.backgroundColor = "#e8f063";

            });
            //childNodes[i].style.top = '25px';

          }

        });

        item.addEventListener('mouseout', function () {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = '';
          this.style.backgroundColor = '#f3f7ec';
          //this.childNodes.style.transform = 'scale(1)';
          var childNodes = this.children;
          for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = 'scaleY(1)';
            //childNodes[i].style.top = '';
          }
          this.children[0].style.top = '';
          this.children[1].style.display = 'none'

          var children_buttons = this.children[1].children;
          console.log(children_buttons.length);

          for (var i = 0; i < children_buttons.length; i++) {
            children_buttons[i].addEventListener('mouseout', function () {
              this.style.backgroundColor = "#d0af8a";

            });
            //childNodes[i].style.top = '25px';

          }



        });

        // Add event listener to the button inside the item
        const goToSingleProductButton = item.querySelector('.Button');
        goToSingleProductButton.addEventListener('click', function () {
          // Navigate to single_product.html
          window.location.href = '../HTML/single_product.html';
        });

        // Add event listener to the button inside the item
        const goToCart = item.querySelector('.button2');
        goToCart.addEventListener('click', function () {
          // Navigate to single_product.html
          window.location.href = '../HTML/cart.html';
        });



      });



    }
    );

}
function filter_category_container()
{
  fetch('../JAVASCRIPT/products.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      

      const productsContainer = document.getElementById('all_items');
      const filter1 = data.products.filter(product => (product.category == "Container"));
            console.log(filter1);
            productsContainer.innerHTML='';

      
      filter1.forEach(product => {
        //Products_Data += product;
        //console.log(Products_Data);
        const item = document.createElement('div');
        item.classList.add('item_item');
        item.innerHTML = `
            <div class="product_information">
            <div class="item_image"><img src="${product.image}" alt="${product.name} width="137" height="156"></div>
            <div class="name_product"><a href="../HTML/single_product.html">${product.name}</a></div>
            <div class="price_product"><div >$${product.price}.00</div></div>

            </div>

            <div class="Buttons">
            <button class="Button" ><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
            <button class="Button button2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="22" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
            </div>
            `;


        //item.style.margin='0px'

        productsContainer.appendChild(item);



        // Add the hover effect to the item
        item.addEventListener('mouseover', function () {
          this.style.transform = 'scaleY(1.2)';
          this.style.boxShadow = '0px 0px 10px .2px rgba(196, 193, 193, 0.932)';
          this.style.backgroundColor = 'white';
          //this.childNodes.style.transform = 'scaleY(1/1.2)';

          var childNodes = this.children;
          for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = 'scaleY(.83)';
            //childNodes[i].style.top = '25px';

          }
          console.log(childNodes.length);
          this.children[0].style.top = '25px';
          this.children[1].style.display = 'block'
          this.children[1].style.bottom = '40px';

          var children_buttons = this.children[1].children;
          console.log(children_buttons.length);

          for (var i = 0; i < children_buttons.length; i++) {
            children_buttons[i].addEventListener('mouseover', function () {
              this.style.backgroundColor = "#e8f063";

            });
            //childNodes[i].style.top = '25px';

          }

        });

        item.addEventListener('mouseout', function () {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = '';
          this.style.backgroundColor = '#f3f7ec';
          //this.childNodes.style.transform = 'scale(1)';
          var childNodes = this.children;
          for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = 'scaleY(1)';
            //childNodes[i].style.top = '';
          }
          this.children[0].style.top = '';
          this.children[1].style.display = 'none'

          var children_buttons = this.children[1].children;
          console.log(children_buttons.length);

          for (var i = 0; i < children_buttons.length; i++) {
            children_buttons[i].addEventListener('mouseout', function () {
              this.style.backgroundColor = "#d0af8a";

            });
            //childNodes[i].style.top = '25px';

          }



        });

        // Add event listener to the button inside the item
        const goToSingleProductButton = item.querySelector('.Button');
        goToSingleProductButton.addEventListener('click', function () {
          // Navigate to single_product.html
          window.location.href = '../HTML/single_product.html';
        });

        // Add event listener to the button inside the item
        const goToCart = item.querySelector('.button2');
        goToCart.addEventListener('click', function () {
          // Navigate to single_product.html
          window.location.href = '../HTML/cart.html';
        });



      });



    }
    );



}


function All_Products() {
  fetch('../JAVASCRIPT/products.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {

      

      const productsContainer = document.getElementById('all_items');
      const filternumber = data.products.filter(product => (product.price<24));
            console.log(filternumber);

            productsContainer.innerHTML='';

      
      filternumber.forEach(product => {
        //Products_Data += product;
        //console.log(Products_Data);
        const item = document.createElement('div');
        item.classList.add('item_item');
        item.innerHTML = `
            <div class="product_information">
            <div class="item_image"><img src="${product.image}" alt="${product.name} width="137" height="156"></div>
            <div class="name_product"><a href="../HTML/single_product.html">${product.name}</a></div>
            <div class="price_product"><div >$${product.price}.00</div></div>

            </div>

            <div class="Buttons">
            <button class="Button" ><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
            <button class="Button button2"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="22" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
            </div>
            `;


        //item.style.margin='0px'

        productsContainer.appendChild(item);



        // Add the hover effect to the item
        item.addEventListener('mouseover', function () {
          this.style.transform = 'scaleY(1.2)';
          this.style.boxShadow = '0px 0px 10px .2px rgba(196, 193, 193, 0.932)';
          this.style.backgroundColor = 'white';
          //this.childNodes.style.transform = 'scaleY(1/1.2)';

          var childNodes = this.children;
          for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = 'scaleY(.83)';
            //childNodes[i].style.top = '25px';

          }
          console.log(childNodes.length);
          this.children[0].style.top = '25px';
          this.children[1].style.display = 'block'
          this.children[1].style.bottom = '40px';

          var children_buttons = this.children[1].children;
          console.log(children_buttons.length);

          for (var i = 0; i < children_buttons.length; i++) {
            children_buttons[i].addEventListener('mouseover', function () {
              this.style.backgroundColor = "#e8f063";

            });
            //childNodes[i].style.top = '25px';

          }

        });

        item.addEventListener('mouseout', function () {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = '';
          this.style.backgroundColor = '#f3f7ec';
          //this.childNodes.style.transform = 'scale(1)';
          var childNodes = this.children;
          for (var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = 'scaleY(1)';
            //childNodes[i].style.top = '';
          }
          this.children[0].style.top = '';
          this.children[1].style.display = 'none'

          var children_buttons = this.children[1].children;
          console.log(children_buttons.length);

          for (var i = 0; i < children_buttons.length; i++) {
            children_buttons[i].addEventListener('mouseout', function () {
              this.style.backgroundColor = "#d0af8a";

            });
            //childNodes[i].style.top = '25px';

          }



        });

        // Add event listener to the button inside the item
        const goToSingleProductButton = item.querySelector('.Button');
        goToSingleProductButton.addEventListener('click', function () {
          // Navigate to single_product.html
          window.location.href = '../HTML/single_product.html';
        });

        // Add event listener to the button inside the item
        const goToCart = item.querySelector('.button2');
        goToCart.addEventListener('click', function () {
          // Navigate to single_product.html
          window.location.href = '../HTML/cart.html';
        });



      });



    }
    );
}

All_Products();


/////////////////////////////////////////////////////

//////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
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

