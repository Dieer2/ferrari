"use strict";

$(document).ready(function () {

    function mobileMenu() {
        $("#menuBtn").click(function () {
            if ($("#mobileMenu").css("display") == "none") {
                $("#mobileMenu").css("display", "flex");
            } else {
                $("#mobileMenu").css("display", "none");
            }

        });
    }

    mobileMenu();

})