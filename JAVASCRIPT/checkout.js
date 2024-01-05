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










function remove_borders(input) {
    input.style.outline = "none";
}
function validatePhoneNumber(phoneNumber) {
    // Define a regular expression pattern
    var pattern = /^(010|011|012|015)\d{8}$/;

    // Test the phone number against the pattern
    return pattern.test(phoneNumber);
}
function check_phone(phone) {
    var phoneNumberToCheck = phone.value;
    if (validatePhoneNumber(phoneNumberToCheck)) {
        document.getElementById('Phone_error').innerHTML = "";


    }
    else {

        document.getElementById('Phone_error').innerHTML = "Phone number is invalid.";
        document.getElementById("Phone_error").focus();
        phone.select();
    }
}

function validateEmail(email) {
    // Define a regular expression pattern for basic email validation
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return pattern.test(email);
}

function check_Email(email) {
    var emailToCheck = email.value;
    if (validateEmail(emailToCheck)) {
        document.getElementById('E_mail_error').innerHTML = "";
    }
    else {

        document.getElementById('E_mail_error').innerHTML = "E-mail is invalid.";
        document.getElementById("E_mail_error").focus();
        email.select();
    }
}
function check_City(City) {
    var CityToCheck = City.value;
    if (CityToCheck == "" || CityToCheck.length < 3) 
    {
        document.getElementById('City_error').innerHTML = "City is invalid.";
        document.getElementById("City_error").focus();
        City.select();

    }
    else {
        document.getElementById('City_error').innerHTML = "";

    }
}

function check_Company(Company) {
    var CompanyToCheck = Company.value;
    if (CompanyToCheck == "" || CompanyToCheck.length < 3) 
    {
        document.getElementById('Company_error').innerHTML = "Company is invalid.";
        document.getElementById("Company_error").focus();
        Company.select();

    }
    else {
        document.getElementById('Company_error').innerHTML = "";

    }
}

function check_Adress(Adress) {
    var AdressToCheck = Adress.value;
    if (AdressToCheck == "" || AdressToCheck.length < 3) 
    {
        document.getElementById('Adress_error').innerHTML = "Adress is invalid.";
        document.getElementById("Adress_error").focus();
        Adress.select();

    }
    else {
        document.getElementById('Adress_error').innerHTML = "";

    }
}


function check_First_Name(name) {
    var nameToCheck = name.value;
    if (nameToCheck == "" || nameToCheck.length < 3) 
    {
        document.getElementById('First_Name_error').innerHTML = "First Name is invalid.";
        document.getElementById("First_Name_error").focus();
        name.select();

    }
    else {
        document.getElementById('First_Name_error').innerHTML = "";

    }
}


function check_Last_Name(name) {
    var nameToCheck = name.value;
    if (nameToCheck == "" || nameToCheck.length < 3) 
    {
        document.getElementById('Last_Name_error').innerHTML = "Last Name is invalid.";
        document.getElementById("Last_Name_error").focus();
        name.select();

    }
    else {
        document.getElementById('Last_Name_error').innerHTML = "";

    }
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


function change_color(icon)
{
    icon.style.color="#d0af8a";
    icon.style.cursor="pointer";

}

function change_color2(icon)
{
    icon.style.color="#777777";
}