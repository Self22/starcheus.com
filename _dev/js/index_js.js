/**
 * Created by USER on 15.05.2017.
 */
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

if (window.screen.width < 480) {
    //////////// fullpage main for mobile

    $(".index__screen-4").addClass("fp-auto-height-responsive");
    $(".index__screen-5").addClass("fp-auto-height-responsive");

    $(document).ready(function () {
        $('#fullpage').fullpage({
            responsiveHeight: 1,


            autoScrolling: false,

            afterLoad: function (anchorLink, index) {
                var loadedSection = $(this);

                //using index
                if (index == 1) {
                    $(".works__link").removeClass("works__link-white");
                    $(".contact__link").removeClass("contact__link-black");
                    $(".cmn-toggle-switch").removeClass("cmn-toggle-switch-white");
                    $(".main__index-socials").removeClass("main__index-socials-black");
                }


                if (index == 2) {
                    $(".works__link").addClass("works__link-white");
                    $(".contact__link").addClass("contact__link-black");
                    $(".cmn-toggle-switch").addClass("cmn-toggle-switch-white");
                    $(".main__index-socials").addClass("main__index-socials-black");
                }

                if (index == 3) {
                    $(".works__link").removeClass("works__link-white");
                    $(".contact__link").removeClass("contact__link-black");
                    $(".cmn-toggle-switch").removeClass("cmn-toggle-switch-white");
                    $(".main__index-socials").removeClass("main__index-socials-black");
                }

                if (index == 4) {
                    $(".works__link").addClass("works__link-white");
                    $(".contact__link").addClass("contact__link-black");
                    $(".cmn-toggle-switch").addClass("cmn-toggle-switch-white");
                    $(".main__index-socials").addClass("main__index-socials-black");
                }

                if (index == 5) {
                    $(".works__link").removeClass("works__link-white");
                    $(".contact__link").removeClass("contact__link-black");
                    $(".cmn-toggle-switch").removeClass("cmn-toggle-switch-white");
                    $(".main__index-socials").removeClass("main__index-socials-black");
                }

            }
        });
        $.fn.fullpage.setResponsive(true);

    });

}

else {
    //////////// fullpage main

    $(document).ready(function () {
        $('#fullpage').fullpage({

            afterLoad: function (anchorLink, index) {
                var loadedSection = $(this);

                //using index
                if (index == 1) {
                    $(".works__link").removeClass("works__link-white");
                    $(".contact__link").removeClass("contact__link-black");
                    $(".cmn-toggle-switch").removeClass("cmn-toggle-switch-white");
                    $(".main__index-socials").removeClass("main__index-socials-black");
                }


                if (index == 2) {
                    $(".works__link").addClass("works__link-white");
                    $(".contact__link").addClass("contact__link-black");
                    $(".cmn-toggle-switch").addClass("cmn-toggle-switch-white");
                    $(".main__index-socials").addClass("main__index-socials-black");
                }

                if (index == 3) {
                    $(".works__link").removeClass("works__link-white");
                    $(".contact__link").removeClass("contact__link-black");
                    $(".cmn-toggle-switch").removeClass("cmn-toggle-switch-white");
                    $(".main__index-socials").removeClass("main__index-socials-black");
                }

                if (index == 4) {
                    $(".works__link").addClass("works__link-white");
                    $(".contact__link").addClass("contact__link-black");
                    $(".cmn-toggle-switch").addClass("cmn-toggle-switch-white");
                    $(".main__index-socials").addClass("main__index-socials-black");
                }

                if (index == 5) {
                    $(".works__link").removeClass("works__link-white");
                    $(".contact__link").removeClass("contact__link-black");
                    $(".cmn-toggle-switch").removeClass("cmn-toggle-switch-white");
                    $(".main__index-socials").removeClass("main__index-socials-black");
                }

            }
        });

    });

}



