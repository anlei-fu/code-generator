//删除
function _delete(id) {
        if (!confirm("你确认要删除该信息吗?"))
                return;

        $.ajax({
                type: "post",
                data: { id: id },
                url: '/@name/Delete',
                success: function (data) {
                        data = $.parseJSON(data);
                        alert(data.message)
                },
                error: function () {
                        alert("调用失败，请重试");
                }
        });
}
