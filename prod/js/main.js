"use strict";$(document).ready(function(){$("#fullpage").fullpage({afterLoad:function(e,l){$(this);1==l&&($(".works__link").removeClass("works__link-white"),$(".contact__link").removeClass("contact__link-black")),2==l&&($(".works__link").addClass("works__link-white"),$(".contact__link").addClass("contact__link-black")),3==l&&($(".works__link").removeClass("works__link-white"),$(".contact__link").removeClass("contact__link-black")),4==l&&($(".works__link").addClass("works__link-white"),$(".contact__link").addClass("contact__link-black")),5==l&&($(".works__link").removeClass("works__link-white"),$(".contact__link").removeClass("contact__link-black"))}})});for(var openNav=document.querySelectorAll(".cmn-toggle-switch"),mainNav=document.querySelector(".main__nav"),i=0;i<openNav.length;i++)openNav[i].addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("menu__popup-open"),mainNav.classList.toggle("main__nav-close")});$("#slider1").bxSlider({mode:"fade",auto:!0,pause:2e3,controls:!1,pager:!1});
//# sourceMappingURL=main.js.map
