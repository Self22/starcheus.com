"use strict";for(var openNav=document.querySelectorAll(".cmn-toggle-switch"),mainNav=document.querySelector(".main__nav"),i=0;i<openNav.length;i++)openNav[i].addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("menu__popup-open"),mainNav.classList.toggle("main__nav-close")});
//# sourceMappingURL=main.js.map
