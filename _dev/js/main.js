"use strict";

$(document).ready(function () {
    $('#fullpage').fullpage({

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            //using index
            if (index == 1) {
                $(".works__link").removeClass("works__link-white");
                $(".contact__link").removeClass("contact__link-black");
            }


            if (index == 2) {
                $(".works__link").addClass("works__link-white");
                $(".contact__link").addClass("contact__link-black");
            }

            if (index == 3) {
                $(".works__link").removeClass("works__link-white");
                $(".contact__link").removeClass("contact__link-black");
            }

            if (index == 4) {
                $(".works__link").addClass("works__link-white");
                $(".contact__link").addClass("contact__link-black");
            }

            if (index == 5) {
                $(".works__link").removeClass("works__link-white");
                $(".contact__link").removeClass("contact__link-black");
            }

        }
    });
});


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

