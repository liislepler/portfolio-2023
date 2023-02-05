var slideIndex = 0;
clockSlides();
noteSlides();

function clockSlides() {
    var i;
    var slides1 = document.getElementsByClassName("clockSlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides1.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides1[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(clockSlides, 3000);
}

function noteSlides() {
    var i;
    var slides2 = document.getElementsByClassName("noteSlide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides2.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides2[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(noteSlides, 2500);
}