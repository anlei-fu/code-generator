// 绑定点击事件
$(function () {
        $("#btnExport").click(function(){ exportExcel()});
});
// download excel file
function exportExcel() {
        conditionForm.action = "/FCPhoneCharge/ExportExcel";
        conditionForm.target = "_blank";
        conditionForm.method = "post";
        conditionForm.submit();
        conditionForm.action = "";
        conditionForm.target = "";
        conditionForm.method = "get"
        return false;
}