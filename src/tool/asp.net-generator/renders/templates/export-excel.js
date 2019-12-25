

// 导出 excel
function exportExcel() {
        conditionForm.action = "/@name/ExportExcel/";
        conditionForm.target = "_blank";
        conditionForm.method = "post";
        conditionForm.submit();
        conditionForm.action = "";
        conditionForm.target = "";
        conditionForm.method = "get"
        return false;
}