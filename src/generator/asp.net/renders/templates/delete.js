//删除
function _delete(id) {
        if (!confirm("确认删除该数据?"))
                return;

        $.ajax({
                type: "post",
                data: { id: id },
                url: '/@name/Delete',
                success: function (data) {
                        data = $.parseJSON(data);
                        alert(data.Message)
                        if(data.Status)
                          location.reload();
                },
                error: function () {
                        alert("调用失败，请重试");
                }
        });
}
