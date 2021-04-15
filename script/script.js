$(function () {

    /* ///////////////////////////////// GNB 메뉴 /////////////////////////////////*/
    $("ul#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(300);
        $("div#gnbBG>#gnbArea").stop().fadeIn(300);
    });
    $("ul#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(400);
        $("div#gnbBG>#gnbArea").stop().fadeOut(400);
    });

    /* ///////////////////////////////// 슬라이드 쇼 /////////////////////////////////*/
    setInterval(fnSlide, 3000);

    function fnSlide() {

        $("#ShuttleFrame").animate({
                "margin-top": "-350px"
            },
            1000,
            "swing",
            function () {
                $("#ShuttleFrame a:first-child").insertAfter("#ShuttleFrame a:last-child");
                $("#ShuttleFrame").css({
                    "margin-top": "0px"
                });
            });

    };

    /* ///////////////////////////////// 모달레이어 /////////////////////////////////*/
    /* 팝업 열기 버튼 */
    $(".modalNotice").click(function() {
        $("#modalBG").css({
            "display":"block"
        });
    });

    /* 닫기 버튼 */
    $("#modalTxt>button").click(function() {
        $("#modalBG").css({
            "display":"none"
        });
    });

}); /*  function */
