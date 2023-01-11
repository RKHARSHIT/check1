$(function () {// Same as document.addEventListner("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur")
    $(".navbar-toggler").blur(function (event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 992){
            $('#navbarNav').collapse('hide');
        }
    }); 
});

document.addEventListener("click", function(e){
    if(e.target.classList.contains("pd-img")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show()
    }
})