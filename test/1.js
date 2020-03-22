var vcodeCounter = 0;
var phoneNumberChecker = /^1[3456789]\d{9}$/;
var data0 = {};

// event biding
$(function () {

        $(".sendCode").click(() => {
                console.log("clicked");
                sendVcode();

        });

        $("#submit").click(() => {
                console.log("into submit");
                queryProduct();
        });

});

/**
 * success {boolean}
 * title {string}
 * content {string}
 */
function showMessageBox(content) {
        $(".message-box-content").text(content);

        $(".message-box").show();

        setTimeout(() => {
                $(".message-box").hide();
        }, 1500);
}


function checkPhoneNumber() {
        return phoneNumberChecker.test(getPhoneNumber());

}

function getPhoneNumber() {
        return $(".phone-input").val();
}


function getSmsCode() {
        return $("#smsCode").val();
}

function queryProduct() {
        console.log("into query");

        // bug point 刷新页面必须重新发送验证码
        if (!data0.core || !data0.core.data) {
                showMessageBox("请先获取验证码");
                return;
        }

        var queryProductParam = "phoneNo=" + getPhoneNumber() + "&smsCode=" + getSmsCode() + "&coopOrder=" + data0.coopOrder;

        $.ajax({
                url: "/DataFlowPacket5G/QueryProduct?" + queryProductParam,
                type: "get",
                async: false,
                success: function (resp) {
                        console.log(resp);
                        try {
                                var result = $.parseJSON(resp);
                                if (result.code != 100) {
                                        showMessageBox(result.msg);
                                } else {
                                        var product = result.products;

                                        // 校验参数
                                        if (!product || !product.stringFullFee || !product.productId || product.productData) {
                                                showMessageBox("获取产品失败，请稍后重试");
                                                return;
                                        }

                                        // redirect 
                                        var detailParams = "phoneNo=" + getPhoneNumber() + "&smsCode=" + getSmsCode() + "&pno=" + product.productId + "&price=" + product.stringFullFee + "&total=" + product.productData;
                                        location.href = "/DataFlowPacket5G/Detail?" + detailParams;
                                }
                        } catch (e) {
                                showMessageBox("请稍后重试...");
                        }
                },
                error: function () {
                        showMessageBox("请稍后重试...");
                }

        });

}

// 发送验证码
function sendVcode() {
        showMessageBox("get vcode");
        if (!checkPhoneNumber()) {
                showMessageBox("号码不正确");
                return;
        }

        var param = "phoneNo=" + getPhoneNumber();
        $.ajax({
                url: "/DataFlowPacket5G/GetVCode?" + param,
                type: "get",
                async: false,
                success: function (resp) {
                        console.log(resp);
                        try {
                                var result = $.parseJSON(resp);
                                if (result.core.code != 100) {
                                        showMessageBox(result.core.msg);
                                } else {
                                        data0 = result;
                                        resetVCodeCounter();
                                }
                        } catch (e) {
                                showMessageBox("请稍后重试...");
                        }
                },
                error: function () {
                        showMessageBox("请稍后重试...");
                }
        });
}

function resetVCodeCounter() {
        vcodeCounter = 60;
        $(".sendCode").attr("disabled", true);

        var interval = setInterval(() => {
                if (--vcodeCounter == 0) {
                        clearInterval(interval);
                        $(".sendCode").attr("disabled", false);
                        $(".sendCode").text("请输入验证码");
                } else {
                        $(".sendCode").text(vcodeCounter + "s后重新获取");
                }
        }, 1000);
};