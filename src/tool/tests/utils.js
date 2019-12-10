// 检查参数
function checkRuleParams(data) {
    console.log("into validate");
    var a = parseInt(data.ValueA);
    var b = parseInt(data.ValueB);
    console.log("a is" + a);
    console.log("b is" + b);
    // 年龄
    if (data.RuleType == "1") {
        if (!a) {
            alert("参数A格式不正确");
            return false;
        }

        if (a < 0 || a > 100) {
            alert("参数A范围不正确");
            return false;
        }
        // 范围
        if (data.ValueType == "1") {

            if (!b) {
                alert("参数B格式不正确");
                return false;
            }

            if (b > 100) {
                alert("参数B范围不正确");
                return false;
            }

            if (a > b) {
                alert("参数A应该小于参数B");
                return false;
            }
        }
    } else {
        var reg = /^\d(\d||x)$/;
        reg.compile();
        if (!reg.test(data.ValueA)) {
            alert("参数A包含无效字符");
            return false;
        }
    }

    return true;
}
