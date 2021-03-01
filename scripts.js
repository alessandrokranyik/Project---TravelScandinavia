window.onscroll = function() {addSticky()};

var navbar = document.getElementById("navbar")

var sticky = navbar.offsetTop;

function addSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


const btn = document.querySelector('.btn-removeinvis');
console.log(btn);
console.log(btn.classList)

const feld = document.querySelector('.boobie');
console.log(feld);
console.log(feld.classList);

btn.addEventListener('click', (e) => {
    feld.classList.remove('invis');
    feld.classList.add('smooth')

});

// Sticky Nav

// SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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

// MAP


