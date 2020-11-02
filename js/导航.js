        //下拉菜单
        $(".shop-list>li").mouseenter(function () {
            $(this).children(".second").css("display", "block").stop().animate({
                marginTop: "47px",
                opacity: 1,
            }, 500)
        })
        $(".shop-list>li").mouseleave(function () {
            $(this).children(".second").stop().animate({
                marginTop: "60px",
                opacity: 0
            }, 500, function () {
                $(this).css({
                    display: "none"
                })
            })
        })

        function select(dom) {
            $(dom).mouseenter(function () { 
                $(this).children().css("display", "block").stop().animate({
                    left: "215px",
                    opacity: 1
                }, 500)
            })
            $(dom).mouseleave(function () {
                $(dom).children().stop().animate({
                    left: "230px",
                    opacity: 0
                }, 500, function () {
                    $(this).css({
                        display: "none"
                    })
                })
            })
        }

        select(".sec3-btn")
        select(".sec4-btn")
        //搜索框
        $(".div-sea").click(function(){
            if($("#sea").width() != 0){
                $("#sea").animate({
                    width:0,
                    opacity:0
                },500,function(){
                    $(this).css("display","none");
                })
            }else{
                $("#sea").css("display","block").stop().animate({
                    width:"850px",
                    opacity:1
                })
            }
        })

        //购物车
        $(".shopping").click(function () { 
            if ($(this).hasClass("shop-shadow")) {
                  $(this).removeClass("shop-shadow")
                 $(this).siblings(".shop_list").animate({
                    top: "120%",
                    opacity: 0,
                },function(){
                   $(this).css("display", "none")
                })
            }else {
                $(this).addClass("shop-shadow")
                $(this).siblings(".shop_list").css("display", "block").animate({
                    top:"100%",
                    opacity: 1,
                })
            }
        })