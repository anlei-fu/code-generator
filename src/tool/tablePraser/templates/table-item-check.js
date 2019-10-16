/**
 * 
 * @param {CheckBox} checkBox 
 */
function selectShelfs(checkBox) {
        $("input[type='checkbox']").attr("checked", checkBox.checked);
    }