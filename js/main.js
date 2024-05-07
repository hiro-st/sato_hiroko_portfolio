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

scrollElement.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

    const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

    if (
        (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
        (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
    )
        return;

    e.preventDefault();
    scrollElement.scrollLeft += e.deltaY;
});