let segs = "订单管理/订单管理/短信校验".split("/");
let level1 = $(".nav_list_right a");
$(".nav_list_right a").each((i1,l1)=> {
        if ($(l1).text() == segs[0]) {
                console.log("l1 found");
                $(l1).click();

                $(".con_left_nav span").each((i2,l2)=> {
                        if ($(l2).text() == segs[1]) {
                                $(l2).click();
                                $(".con_left_nav a").each((i3,l3)=> {
                                        if ($(l3).text() == segs[2]) {
                                                $(l3).click();
                                        }
                                });
                        }
                });
        }
});