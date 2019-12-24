<p class="sc_p">
@nemeText:
@Html.DropDownList("@name", new SelectList(@serviceName.Instance.GetDataList(@dicType), "@value", "@text"), "@defaultText")
</p>