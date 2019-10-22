/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-22 09:58:49
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-22 10:00:28
 */
// 绑定点击事件
$(function () {
        $("#btnExport").click(exportExcel());
});
// download excel file
function exportExcel() {
        conditionForm.action = "/@table.name/ExportExcel";
        conditionForm.target = "_blank";
        conditionForm.method = "post";
        conditionForm.submit();
        conditionForm.action = "";
        conditionForm.target = "";
        conditionForm.method = "get"
        return false;
}