          <p class="sc_p">
             @lable:
             @Html.DropDownList("@name", new SelectList(@serviceService.Instance.GetDataList(@dicType), "@value", "@text"), "@defaultText")
          </p>