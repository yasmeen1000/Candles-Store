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

// ----------------------------------------------------------------------------
let Products_Data = [];
//var filterprice;
function All_Products() {
    fetch('../JAVASCRIPT/products.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            //console.log(data);
            //Products_Data = data;
            //filterprice = data.products.filter(product=>(product.price)>13 );
            //console.log(filterprice);

            const productsContainer = document.getElementById('all_items');

            // for(var i=0 ; i<data.products.length; i++)
            // {
            //     Products_Data += data.products[i];
            // }
            data.products.forEach(product => {
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

console.log(typeof (Products_Data));
console.log(Products_Data);


const rangeInput = document.querySelectorAll(".range_input input");
const priceInput = document.querySelectorAll(".price_values input");
progress = document.querySelector(".slider .progress");
let priceGab = 5;
// var Global_MinValue,Global_MaxValue;

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minValue = parseInt(rangeInput[0].value);
        let maxValue = parseInt(rangeInput[1].value);

        // Global_MinValue = minValue;
        // Global_MaxValue = maxValue;

        if (maxValue - minValue < priceGab) {
            if (e.target.className === "rang_min") {
                rangeInput[0].value = maxValue - priceGab;
            }
            else {
                rangeInput[1].value = minValue + priceGab;
            }

        }
        else {
            priceInput[0].value = minValue;
            priceInput[1].value = maxValue;
            progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }
    })
});

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minValue = parseInt(priceInput[0].value);
        let maxValue = parseInt(priceInput[1].value);

        if (maxValue - minValue >= priceGab) {
            if ((e.target.className === "input_1") && maxValue <= 100) {
                rangeInput[0].value = minValue;
                progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";

            }
            else {
                rangeInput[1].value = maxValue;
                progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
            }

        }
    })
});


// console.log(Global_MinValue);
// console.log(Global_MaxValue);

function filterPrice() {
    let minValue = parseInt(rangeInput[0].value);
    let maxValue = parseInt(rangeInput[1].value);
    console.log(minValue, maxValue);

    const productsContainer = document.getElementById('all_items');
    productsContainer.innerHTML = '';


    fetch('../JAVASCRIPT/products.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            const filterprice = data.products.filter(product => ((product.price >= minValue) && (product.price <= maxValue)));
            console.log(filterprice);

            //const productsContainer = document.getElementById('all_items');


            filterprice.forEach(product => {

                const item = document.createElement('div');
                item.classList.add('item_item');
                item.innerHTML = `
            <div class="product_information">
            <div class="item_image"><img src="${product.image}" alt="${product.name} width="137" height="156"></div>
            <div class="name_product"><a href="../HTML/single_product.html">${product.name}</a></div>
            <div class="price_product"><div >$${product.price}.00</div></div>

            </div>

            <div class="Buttons">
            <button class="Button"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
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


function filter_category(checkbox) {
    console.log(checkbox.value);
    const productsContainer = document.getElementById('all_items');
    productsContainer.innerHTML = '';
    if (checkbox.value == "All") {
        All_Products();
    }
    else {

        fetch('../JAVASCRIPT/products.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                const filterCategory = data.products.filter(product => ((product.category == checkbox.value)));
                console.log(filterCategory);


                filterCategory.forEach(product => {
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
            <button class="Button"><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
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
}

const images = document.querySelectorAll('.side_images');
images.forEach(img => {
    img.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });

});



function change_color(icon) {
    icon.style.color = "#d0af8a";
    icon.style.cursor = "pointer";

}

function change_color2(icon) {
    icon.style.color = "#777777";
}


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