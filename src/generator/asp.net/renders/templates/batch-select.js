// 绑定批量选取
function mainSelectChanged(leaderEle) {
        $("input[name='batchCheckBox']").attr("checked", leaderEle.checked);
}

// 批量操作获取id
function getAllIds() {
        var allCheck = $("input[name='ShelfNo']:checked");
        var ids = "";
        if (allCheck.length <= 0) {
                alert("请至少选择一条数据");
                return null;
        }
        else {
                $(allCheck).each(function () {
                        ids += $(this).val().trim() + ",";
                })
                if (ids.length > 0) {
                        ids = ids.substring(0, ids.length - 1);
                }
        }

        return ids;
}

