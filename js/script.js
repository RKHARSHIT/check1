$(function () {// Same as document.addEventListner("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur")
    $(".navbar-toggler").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            $('#navbarNav').collapse('hide');
        }
    });
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("pd-img")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show()
    }
});

function revealx() {
    var reveals = document.querySelectorAll(".revealx");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealx);

function revealy() {
    var reveals = document.querySelectorAll(".revealy");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealy);
