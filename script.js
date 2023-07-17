/* toggle menu */

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

/* change color of the week day */

// if (new Date().getDay() == 0) {
//     document.getElementById("sunday").style.color = '#40bc6b';
//     document.getElementById("sunday").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 1) {
//     document.getElementById("monday").style.color = '#40bc6b';
//     document.getElementById("monday").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 2) {
//     document.getElementById("tuesday").style.color = '#40bc6b';
//     document.getElementById("tuesday").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 3) {
//     document.getElementById("wednesday").style.color = '#40bc6b';
//     document.getElementById("wednesday").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 4) {
//     document.getElementById("thursday").style.color = '#40bc6b';
//     document.getElementById("thursday").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 5) {
//     document.getElementById("friday").style.color = '#40bc6b';
//     document.getElementById("friday").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 6) {
//     document.getElementById("saturday").style.color = '#40bc6b';
//     document.getElementById("saturday").style.fontWeight = "bold";
// }

// /* change day of the time */

// if (new Date().getDay() == 0) {
//     document.getElementById("sun").style.color = '#40bc6b';
//     document.getElementById("sun").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 1) {
//     document.getElementById("mon").style.color = '#40bc6b';
//     document.getElementById("mon").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 2) {
//     document.getElementById("tue").style.color = '#40bc6b';
//     document.getElementById("tue").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 3) {
//     document.getElementById("wed").style.color = '#40bc6b';
//     document.getElementById("wed").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 4) {
//     document.getElementById("thu").style.color = '#40bc6b';
//     document.getElementById("thu").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 5) {
//     document.getElementById("fri").style.color = '#40bc6b';
//     document.getElementById("fri").style.fontWeight = "bold";
// }

// if (new Date().getDay() == 6) {
//     document.getElementById("sat").style.color = '#40bc6b';
//     document.getElementById("sat").style.fontWeight = "bold";
// }

/* slideshow */

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000);
}

/* koalendar */

// function resizeIframe(obj) {
//     obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
// }