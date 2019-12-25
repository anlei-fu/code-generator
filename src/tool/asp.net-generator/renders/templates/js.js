function MRCenterMsg() {
        this.bind = function () {
            $.paging.config.form = "#conditionForm";
            $.paging.bind();
            $("#ddlps").val($("#ps").val());
            $("#ddlps").change(function () {
                $("#ps").val($(this).val());
            });
            $(".list_submit").click(function () {
                $.paging.submit();
            });
        }
    }

    $(function () {
        var user = new MRCenterMsg();
        user.bind();
    });

@content