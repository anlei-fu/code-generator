          <p class="sc_p">
             @lable:
             @Html.DropDownList("@name", new SelectList(@service.Instance.GetDataList(@dicType), "@value", "@text"), "@defaultText")
          </p>