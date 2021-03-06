$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


function scrollFooter(a, b) {
    console.log(a);
    console.log(b);
    if (a >= b) {
        $("footer").css({
            bottom: "0px"
        })
    } else {
        $("footer").css({
            bottom: "-" + b + "px"
        })
    }
}
$(window).load(function () {
    var c = $(window).height(),
        b = $("footer").height(),
        a = (c) + ($(".content").height()) + ($("footer").height()) - 20;
    $("#scroll-animate, #scroll-animate-main").css({
        height: a + "px"
    });
    $("header").css({
        height: c + "px",
        "line-height": c + "px"
    });
    $(".wrapper-parallax").css({
        "margin-top": c + "px"
    });
    scrollFooter(window.scrollY, b);
    window.onscroll = function () {
        var d = window.scrollY;
        $("#scroll-animate-main").css({
            top: "-" + d + "px"
        });
        $("header").css({
            "background-position-y": 50 - (d * 100 / a) + "%"
        });
        scrollFooter(d, b)
    }
});





// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});




AOS.init({
  offset: 200,
  delay: 50,
  once: true
});