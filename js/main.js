$(function () {
    // ハンバーガーメニュー
    $('.hamburger, .sp-nav a').on('click', function () {
        $('.sp-nav').fadeToggle();
        $('.hamburger').toggleClass('open');
    });

    // to-top
    let pagetop = $(".to-top");
    pagetop.hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });




    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 1000, "swing");
        return false;
    });




    AOS.init({
        duration: 2000,/* アニメーションの速度 */
        once: true,/* アニメーション効果が1回だけ */
        offset: 300,
    });



    function checkBreakPoint() {
        w = $(window).width();
        if (w <= 767) {
            // スマホ向け（767px以下のとき）
            $('.slider').slick({
                //スライドさせる
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: true,
                centerPadding: "10%",
            });
        } else {
            // PC向け
            $('.slider').slick('unslick');
        }
    }
    // ウインドウがリサイズする度にチェック
    $(window).resize(function () {
        checkBreakPoint();
    });
    // 初回チェック
    checkBreakPoint();

});


const scrollElement = document.querySelector(".background");

var wheel_flg = false;
scrollElement.addEventListener("wheel", (e) => {
    if (wheel_flg) {
        if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (
            (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
            (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
        )
            return;

        e.preventDefault();
        scrollElement.scrollLeft += e.deltaY;
    }
});



// var scroll;
// var winH = $(window).height();
// var objTop = $('.obj').offset().top;//基準位置
// $(window).on('scroll', function () {
//     scroll = $(window).scrollTop();
//     if (scroll >= objTop - winH) {
//         $('.circle-1').addClass('svg-elem-1-1');
//         $('.circle-2').addClass('svg-elem-2-1');
//         $('.circle-3').addClass('svg-elem-3-1');
//     }
// });

var scroll;
var winH = $(window).height();
console.log(winH);
var objTop = $('.obj').offset().top;//基準位置
var bgAreaTop = $('.background-area').offset().top;
console.log(bgAreaTop);

$(window).on('scroll', function () {
    // console.log(winH);
    scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= bgAreaTop - 100) {
        $('.background-area').addClass('scroll-area');
        wheel_flg = true;
    }

    if (scroll >= objTop - winH) {
        $('.circle-1').addClass('svg-elem-1-1');
        $('.circle-2').addClass('svg-elem-2-1');
        $('.circle-3').addClass('svg-elem-3-1');
    }
});