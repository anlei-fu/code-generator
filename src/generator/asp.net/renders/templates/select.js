          <p class="sc_p">
             @lable:
             @Html.DropDownList("@name", new SelectList(@serviceNameService.Instance.@serviceMethod(@dicType), "@value", "@text"), "@defaultText",new {style="width:120px;"})
          </p>