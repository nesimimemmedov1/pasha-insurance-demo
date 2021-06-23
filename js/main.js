$(document).ready(function() {
    $('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    })

    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false
    })

    $(".owl-prev").html('<img src="img/arrow.svg" alt="">');
    $(".owl-next").html('<img src="img/arrow.svg" alt="">');

    $(".left-box").click(function() {
        $(this).addClass("left-select").siblings().css({ display: "none" });
        $(".bg-video").css({ opacity: "1" });
        $(".actions").css({ opacity: "1" })
    })
    $(".mid-box").click(function() {
        $(this).addClass("mid-select").siblings().css({ display: "none" });
        $(".bg-video").css({ opacity: "1" });
        $(".actions").css({ opacity: "1" })
    })
    $(".right-box").click(function() {
        $(this).addClass("right-select").siblings().css({ display: "none" });
        $(".bg-video").css({ opacity: "1" });
        $(".actions").css({ opacity: "1" })
    })

    $("#main .item").mouseover(function() {
        $(this).css({ width: "calc(100% / 3 + 60px)" });
    })
    $("#main .item").mouseout(function() {
        $(this).css({ width: "calc(100% / 3 + 0px)" });
    })

    $(".left-box").mouseover(function() {
        $(".mid-box").css({ left: "calc(50% + 60px)" });
        $(".right-box").css({ width: "calc(100% / 3 - 30px)" });
    })
    $(".left-box").mouseout(function() {
        $(".mid-box").css({ left: "50%" });
        $(".right-box").css({ width: "calc(100% / 3 - 0px)" });
    })

    $(".mid-box").mouseover(function() {
        $(".right-box").css({ width: "calc(100% / 3 - 30px)" });
    })
    $(".mid-box").mouseout(function() {
        $(".right-box").css({ width: "calc(100% / 3 - 0px)" });
    })

    $(".right-box").mouseover(function() {
        $(".left-box").css({ width: "calc(100% / 3 - 30px)" });
        $(".mid-box").css({ left: "calc(50% - 30px)" });
    })
    $(".right-box").mouseout(function() {
        $(".left-box").css({ width: "calc(100% / 3 - 0px)" });
        $(".mid-box").css({ left: "calc(50% - 0px)" });
    })

    $("#search").on("keyup keydown", function() {
        if ($(this).val().length > 0) {
            $(".search-text").hide();
        } else {
            $(".search-text").show();
        }
    });

    let insMenu = $("#insurance-menu")
    $(".hburger-icon").click(function() {
        $(".menu-icon").css({ background: "rgba(0, 0, 0, .2)" });
        $("#insurance-menu").addClass("menu-active");
        $(".hburger-icon").css({ transform: "scale(0)" });
        $(".close-icon").css({ transform: "scale(1)" });
        if (insMenu.hasClass("menu-active")) {

            $(".business-menu").click(function() {
                $(".corporative-insurance").fadeIn(1000).show();
                $(".cats-item").fadeOut(1000).hide();
                $("#insurance-menu").css({ background: "#374254" })
            });
            $(".insurance-menu").click(function() {
                $(".cats-item").fadeIn(1000).show();
                $(".corporative-insurance").fadeOut(1000).hide();
                $("#insurance-menu").css({ background: "#0094c9" });
            })
        }
    });

    $(".close-icon").click(function() {
        $(".menu-icon").css({ background: "transparent" });
        $("#insurance-menu").removeClass("menu-active");
        $(".hburger-icon").css({ transform: "scale(1)" });
        $(".close-icon").css({ transform: "scale(0)" });
    })

    let businessMenu = $(".business-menu");
    $(".business-menu").click(function() {
        $("#business-section").addClass("business-active");
        $(".insurance-menu a").removeClass("active");
        $(".business-menu a").addClass("active");
        if ($(".business-menu a").hasClass("active")) {
            $(".corporative-insurance").fadeIn(1000).show();
            $(".cats-item").fadeOut(1000).hide();
            $("#insurance-menu").css({ background: "#374254" })
            $(".hburger-icon").click(function() {
                $("#insurance-menu").addClass("menu-active");
            })
        };
    });

    $(".insurance-menu").click(function() {
        $("#business-section").removeClass("business-active");
        $(".business-menu a").removeClass("active");
        $(".insurance-menu a").addClass("active");
    });

    $(".title").click(function() {
        if (!$(".payment-menu").hasClass("show") || $(".slider-box").hasClass("menu-show") || $(".dropdown_menu").hasClass("menu-show")) {
            $(".payment-menu").addClass("show");
            $(".slider-box").removeClass("menu-show");
            $(".menu-item").find(".dropdown_menu").removeClass("menu-show");
        } else {
            $(".payment-menu").removeClass("show");
        };
    })

    $(document).on('click', '.close-menu', function() {
        $(".dropdown_menu").removeClass("menu-show")
        $(".payment-menu").removeClass("show");
    });

    $(".menu-item").click(function() {
        $(this).siblings().find(".dropdown_menu").removeClass("menu-show");
        if (!$(".dropdown_menu").hasClass("menu-show") || $(".slider-box").hasClass("menu-show") || $(".payment-menu").hasClass("show")) {
            $(this).find(".dropdown_menu").addClass("menu-show");
            $(".slider-box").removeClass("menu-show");
            $(".payment-menu").removeClass("show");
        } else {
            $(".menu-item").find(".dropdown_menu").removeClass("menu-show");
        };
    });

    $(".notification-img").click(function() {
        if (!$(".slider-box").hasClass("menu-show") || $(".payment-menu").hasClass("show") || $(".dropdown_menu").hasClass("menu-show")) {
            $(".slider-box").addClass("menu-show");
            $(".payment-menu").removeClass("show")
            $(".menu-item").find(".dropdown_menu").removeClass("menu-show");
        } else {
            $(".slider-box").removeClass("menu-show");
        }
    });
});