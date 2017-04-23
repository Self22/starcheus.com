$(document).ready(function () {
    $('#fullpage').fullpage({

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            //using index
            if (index == 3) {
                alert("Section 3 ended loading");
            }

            //using anchorLink

        }
    });
});