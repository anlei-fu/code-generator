/**
 * 批量 添加产品
 */

$(function () {
       // 编辑情况隐藏
       if($("__id").val()){
               $("#batch-add-product").hide();
       }
});

function batchEditCheckChanged(show){
      if(show){
              $("edit-container").show();
              renderBatchAdd();
      }else{
        $("edit-container").hide();
      }
}

var batchAddValidatePassed = false;
var isBatchEdit = false;
var template = "<input type='checkbox' id='#productCheck' onchange='changeProductVisibilty(\"#product\",this.checked)' />#productName<input type='text' id='#product'>";
function renderBatchAdd() {
        if (!isBatchEdit)
                return;

        $("#products option").forEach(x => {
                if (!$(x).val())
                        return;
                var item = template.replace(/#productName/g, $(x).text())
                        .replace(/#product/g, $(x.val));

                $("batch-add-container").append(item);
        });

}

function changeProductVisisbility(id, show) {
        if (!show) {
                $("#" + id).hide();
        } else {
                $("#" + id).show();
        }

        saveBatchProduct();
}



/**
 *  check box changed ,resave all products
 */
function saveBatchProduct() {
        batchAddValidatePassed = false;
        var products = "";
        for (const item of $("batch-add-container checkbox[checked:true]")) {
                var productId = $(item).attr("id").replace("checkBox", "");
                var face = $(productId).val();
                if (!face || parseFloat(face) == Number.NaN) {
                        batchAddValidatePassed = false;
                        return;
                }

                products += productId + "|" + face + ",";
        }

        batchAddValidatePassed=true;

        $("#products-container").val(products);
}



function selectAllProduct() {
        $("batch-add-container checkbox").checked(true);
}