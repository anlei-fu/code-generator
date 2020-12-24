
/**
* Crud helpers 
* 
* @Author FAL
* @Date 2020-10-26 
*/

/********************************************************
* 转化form 到js object 不支持数组
*
********************************************************/
function serializeFormToJsObject(form) {
        var obj = {};
        var selector = "input[name], select[name], textarea[name]";
        $(form).find(selector).each(function () {
                if (this.disabled || (this.type == 'checkbox' ||
                        this.type == 'radio') && !this.checked)
                        return;

                if (this.tagName == 'INPUT'
                        || this.tagName == 'SELECT'
                        || this.tagName == 'TEXTAREA') {
                        obj[this.name] = this.value;
                }
                else {
                        obj[this.name] = this.innerText;
                }

        });

        return obj;
}

/**
 * Post
 * 
 * @param {string} url
 * @returns {Promise<Result>} 
 */
function post(url) {
        return webRequest(url, "post");
}

/**
 * Get
 * 
 * @param {string} url
 * @returns {Promise<Result>} 
 */
function get(url) {
        return webRequest(url, "get");
}

/**
 * Web request
 * 
 * @param {string} url
 * @returns {Promise<Result>} 
 */
function webRequest(url, method) {
        return new Promise((resolve, reject) => {
                $.ajax({
                        type: method,
                        url,
                        success: resp => {
                                let data = $.parseJSON(resp);
                                resolve(data);
                        },
                        error: err => {
                                reject(err);
                        }
                })
        });
}

/**
 * Export excel
 * 
 */
function exportExcel() {
        conditionForm.action = `/${this.name}/${this.excel}`;
        conditionForm.target = "_blank";
        conditionForm.method = "post";
        conditionForm.submit();
        conditionForm.action = "";
        conditionForm.target = "";
        conditionForm.method = "get"
}

/**
 * List page utils
 */
class ListPageHelper {
        /**
         * 
         * @param {String} name 
         * @param {String} type 
         * @param {String} indexPath 
         * @param {string} excelPath 
         */
        constructor (name, type, indexPath = "Index", excelPath = "ExportExcel") {
                this.name = name;
                this.type = type;
                this.index = indexPath;
                this.excel = excelPath;
        }

        /***
         * 
         */
        init(withExcel = false, option = {}) {
                $.paging.config.form = "#conditionForm";
                $.paging.bind();
                $("#ddlps").val($("#ps").val());
                $("#ddlps").change(function () {
                        $("#ps").val($(this).val());
                });
                $(".list_submit").click(function () {
                        if (option.beforeSubmit) {
                                if (option.beforeSubmit())
                                        $.paging.submit();
                        } else {
                                $.paging.submit();
                        }
                });


                if (withExcel) {
                        $("#btnExport").click(function () {
                                if (option.beforeExcelSubmit) {
                                        if (option.beforeExcelSubmit())
                                                exportExcel();
                                } else {
                                        exportExcel();
                                }

                        });
                }

                $('select').each(function () {
                        if ($(this).css('display') != "none") {
                                $(this).sSelect();
                        }
                });
        }

        /**
         * 确认提交post async, 简单提交 只支持query-string传参
         * 
         * @param {string} url
         * @param {string} msg
         * @param {boolean} refresh 
         */
        async confirmAndPost(url, msg, refresh = true) {
                if (!confirm(msg))
                        return;

                try {
                        let resp = await post(url, refresh);
                        alert(resp.Message);
                        if (refresh && resp.Status)
                                location.reload();
                } catch (ex) {
                        console.log(ex);
                        alert("系统错误")
                }
        }

        /**
         * 删除单条数据
         * 
         * @param {string} id 
         * @param {string} deleteUrl 
         */
        delete(id, deleteUrl) {
                this.confirmAndPost(deleteUrl || `/${this.type}/Delete?id=${id}`, `确认删除此数据?`, true);
        }

        /**
         * 弹出编辑框
         * 
         * @param {string} id 
         * @param {string} addUrl 
         */
        add(id, addUrl) {
                let title = id ? `更新${this.name}` : `添加${this.name}`;
                popEditDialog(addUrl || `/${this.type}/Item`, 'id=' + id, title);
        }

        /**
         * 克隆
         * 
         * @param {string} id 
         * @param {string} cloneUrl 
         */
        clone(id, cloneUrl) {
                popEditDialog(cloneUrl || `/${this.type}/Clone`, 'id=' + id, `克隆${this.name}`);
        }

        /**
         * 弹出对话框
         * 
         * @param {string} url 
         * @param {string} title 
         */
        popDialog(url, title) {
                popEditDialog(url, '', title);
        }
}

class BatchSelectHelper {
        constructor (mainSelectName, subSelectName) {
                this.mainSelectName = mainSelectName;
                this.subSelectName = subSelectName;
        }

        /**
         * 绑定 批量选择
         * 
         */
        bind() {
                $(this.mainSelectName).change(() => {
                        $(`input[name=${this.subSelectName}]`).attr("checked", obj.checked);
                });
        }

        /**
         * 获取选定id
         */
        getAllId() {
                var allCheck = $(`input[name='${this.subSelectName}']:checked`);
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
}
/**
 * 级联选择
 * 
 */
class CascaderHelper {
        /**
         * 
         * @param {} param0 
         */
        static async reloadSubselect({ containerId,
                filterId,
                url,
                paramName = "id",
                errMsg = "获取数据失败",
                withAll = false,
                allValue = "*",
                label = "Name",
                value = "Value" }) {

                let path = `${url}?${paramName}=${$(filterId).val()}`;
                try {
                        let resp = await get(path)
                        $(containerId).empty();
                        if (!withAll) {
                                $("<option value=''>--请选择--</option>").appendTo(containerId);
                        } else {
                                if (data.length > 0) {
                                        $(`<option value='${allValue}'>--所有--</option>`).appendTo(containerId);
                                } else {
                                        $("<option value=''>--请选择--</option>").appendTo(containerId);
                                }
                        }

                        resp.forEach(x => {
                                $(`<option value="${x[value]}">${x[label]}</option>`).appendTo(containerId);
                        });
                        if ($(containerId).next().is(".js-sSelect")) {
                                var width = $(containerId).next().attr("offsetWidth");
                                $(containerId).next().remove();
                                $(containerId).sSelect({ defaultWidth: width });
                        }
                } catch (ex) {
                        alert(errMsg);
                }
        }

        /**
         * 绑定级联选择
         * 
         * @param {} param0 
         */
        static bindCascader({ containerId,
                filterId,
                url,
                paramName = "id",
                label = "Name",
                value = "Value",
                withAll = false,
                allValue = "*",
                errMsg = "获取数据失败", }) {
                if (!containerId || !filterId || !url)
                        throw new Error("required params absent");
                $(filterId).change(() => {
                        this.reloadSubselect({ containerId, filterId, url, paramName, errMsg, withAll, allValue, label, value });
                });
        }

        static bindPlatAgent(platNo, agentNo) {
                this.bindCascader({ containerId: agentNo, filterId: platNo, url: "/PutAgentInfo/ReloadAgent", paramName: "platNo", label: "AgentName", value: "AgentNo" });
        }

        static bindDownChannelProduct(channelNo, productNo) {
                this.bindCascader({ containerId: productNo, filterId: channelNo, url: "/DmDownProduct/GetByChannelNo", paramName: "channelNo", label: "ProductName", value: "ProductNo" });
        }

        static bindDownProductTerm(productNo, termNo) {
                this.bindCascader({ containerId: termNo, filterId: productNo, url: "/DmDownProductRule/GetTermByProductNo", paramName: "productNo", label: "TermName", value: "TermNo" });
        }

        static bindAgentPromoter(agentNo, promoterNo) {

        }
}

class RuleBuilder {
        constructor () {
                this.configs = {};
        }

        /**
         * 
         * @param {[string]} fields 
         */
        require(fields) {
                fields.forEach(x => {
                        if (!this.configs[x])
                                this.configs[x] = {};

                        this.configs[x].required = true;
                });

                return this;
        }

        number(fields) {
                fields.forEach(x => {
                        if (!this.configs[x])
                                this.configs[x] = {};

                        this.configs[x].number = true;
                });

                return this;
        }

        range(fields, min, max) {
                fields.forEach(x => {
                        if (!this.configs[x])
                                this.configs[x] = {};

                        this.configs[x].min = min;
                        this.configs[x].max = max;
                });

                return this;
        }

        build() {
                return this.configs;
        }

}

/**
 * 编辑页面
 */
class EditPageHelper {
        static init(submitPath, rules, beforeSubmit) {
                $('#mainForm').validate({
                        errorClass: "error",
                        focusInvalid: true,
                        submitHandler: function (form) {
                                if (!$(form).valid()) {
                                        return false;
                                }
                                if (beforeSubmit && !beforeSubmit())
                                        return false;

                                var data = $(form).serialize();

                                $.ajax({
                                        type: "post",
                                        data,
                                        url: submitPath,
                                        success: function (data) {
                                                data = $.parseJSON(data);
                                                if (data.Status) {
                                                        var id = $('input[name=__id]').val();
                                                        alert(data.Message);
                                                        if (id != '') {
                                                                location.reload();
                                                        }
                                                        return true;
                                                } else {
                                                        alert(data.Message);
                                                }
                                                return false;
                                        },
                                        error: function () {
                                                alert("请求出错");
                                        }
                                });
                        },
                        rules,
                        errorPlacement: function (error, element) {
                                var msg = element.parent('#mainForm .js-sSelect');
                                if (msg.length <= 0) {
                                        error.appendTo(element.parent());
                                } else {
                                        error.appendTo(msg.parent());
                                }
                        },
                });

                $('select').each(function () {
                        if ($(this).css('display') != "none") {
                                $(this).sSelect();
                        }
                });
        }
}
