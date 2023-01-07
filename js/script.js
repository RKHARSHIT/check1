$(function () {// Same as document.addEventListner("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur")
    $(".navbar-toggler").blur(function (event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 992){
            $('#navbarNav').collapse('hide');
        }
    }); 
});
