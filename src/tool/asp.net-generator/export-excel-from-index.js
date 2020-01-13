const {STR} =require("../../libs/str")

function test(){
    let headers=`  <th>
    订单时间
</th>
<th>
    渠道
</th>
<th>
    订单号
</th>
<th>
    差异类型
</th>
<th>
    支付类型
</th>
<th>
    订单金额
</th>
<th>
    系统订单金额
</th>
<th>
    系统实际金额
</th>
<th>
    实际收款
</th>
 <th>
    差异金额
 </th>                    
<th>
    差异消息
</th>`;
    let values=`<td>@item.GetDataValue("order_time")
    </td>
    <td>@item.GetDataValue("dcname")
    </td>
    <td>
        <a href="/OrderMain/Details?id=@item.GetDataValue("orderNo")" class="lblTextfull" title="点击查看详情" target="_blank">@item.GetDataValue("orderNo")</a>
    </td>
    <td>@item.GetDataValue("diff")
    </td>
    <td>@item.GetDataValue("PayTypeName")
    </td>
    <td>@item.GetDataValue("price")
    </td>
    <td>@item.GetDataValue("sys_price")
    </td>
     <td>@item.GetDataValue("sys_real_face")
    </td>
    <td>@item.GetDataValue("real_fee")
    </td>
     <td>@item.GetDataValue("diff_fee")</td>
    <td>@item.GetDataValue("diff_msg")
    </td>`;

    let hds=[];

    STR.select(headers,"<th>","</th>",0,-1).forEach(x=>{
            hds.push(x.trim());
    });

    console.log(hds);
    let vls=STR.select(values,"<td>","</td>",0,-1);

    let output="";
    hds.forEach((x,i)=>{
         output+=`row["${x}"]=${vls[i].trim().replace("@","")};\r\n`;
    });

    console.log(output);

}

test();