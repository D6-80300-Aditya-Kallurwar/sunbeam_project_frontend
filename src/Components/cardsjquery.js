import $ from "jquery"

$(document).ready(function(){
    $(".card").hover(function(){
        $(this).addClass("hovered");
    }, function(){
        $(this).removeClass("hovered");
    });
});