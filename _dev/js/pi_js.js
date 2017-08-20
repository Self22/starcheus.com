"use strict";

/////////////////////////// menu

var openNav = document.querySelectorAll(".cmn-toggle-switch");
var mainNav = document.querySelector(".main__nav");

for (var i = 0; i < openNav.length; i++) {

    openNav[i].addEventListener("click", function (event) {
        event.preventDefault();
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("menu__popup-open");
        mainNav.classList.toggle("main__nav-close");

    })

}

if (window.screen.width > 480) {

    $(function () {

        $('.side').fixer({

            gap: 50

        });

    });

}

/////////////////////// fixer


