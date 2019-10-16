function batchSelect() {
        var url = location.href;
        var data = $('#divshelflist').serialize();
        if ($.trim(data) == "") {
            alert("请至少选择一条数据");
            return false;
        }
        var ForbiddenNos = String(data).replace(/&ForbiddenNo=/g, ',').replace(/ForbiddenNo=/g, '');

        $.ajax({
            type: "post",
            data: { ids: ForbiddenNos },
            url: '/@table.name/@fearture',
            success: function (data) {

                data = $.parseJSON(data);
                if (data.Status) {
                    alert("操作成功");
                    location.href = url;
                } else {
                    alert("操作失败");
                }
                return true;
            },
            error: function () {
                alert("调用失败，请重试");
            }
        });
    }