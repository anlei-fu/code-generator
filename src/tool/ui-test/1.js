function MRCenterMsg() {
        this.bind = function () {
                $.paging.config.form = "#query";
                $.paging.bind();
                $("#sub").click(function () {
                        $.paging.submit();
                });
        }
}
$(function () {
        var user = new MRCenterMsg();
        user.bind();

        $('.selectpicker').selectpicker({
                noneSelectedText: '请选择',
                countSelectedText: '选择了{0}条记录',
                actionsBox: true,
                deselectAllText: '重置选择',
                selectAllText: '全选',
                width: 150
        });
        $('.selectpicker').selectpicker("refresh");
        $('#face').selectpicker('val', $('#faceVal').val().split(','));
        $('.selectpicker').selectpicker("render");

        $("#time").datetimepicker({
                format: 'yyyy-mm-dd',
                language: 'zh-CN',
                todayBtn: true,
                autoclose: true,
                orientation: 'bottom',
                minView: "month"
        });
        var jsondata = $('#jsondata').val();
        //console.log(jsondata);
        var data = $.parseJSON(jsondata);
        var flow = data.flow;
        //            var tel = data.telfee;
        DrawChart(flow, echarts.init($('#flow')[0]), '交易趋势图');
        //            DrawChart(tel, echarts.init($('#telfee')[0]), '话费统计图');
});

function sum(arr) {
        if (!arr.length) {
                return 0;
        }
        return eval(arr.join("+"));
};

function DrawChart(data, chartobj, title) {
        debugger;
        var time = [], alldown = [], allthree = [], allten = [];
        var allacount = [], allsaleface = [], sucacount = [];
        var succntr = [], threecntr = [], tencntr = [];
        for (var i = 0; i < data.length; i++) {
                
                time.push(data[i].TIMES.toString());

                alldown.push(data[i].ACT_SUC_CNTR.toString());
                allthree.push(data[i].ACT_THREE_MINT.toString());
                allten.push(data[i].ACT_TEN_MINT.toString());
               

                succntr.push(data[i].SUC_CNTR.toString());
                threecntr.push(data[i].THREE_CNTR.toString());
                tencntr.push(data[i].TEN_CNTR.toString());
                
                //统计
                allacount.push(data[i].ALL_CNTR.toString());
                allsaleface.push(data[i].ORDER_SALES_FEE.toString());
                sucacount.push(data[i].SUC_CNTR.toString());
        }

        $('#all1').text(sum(allacount));
        $('#all2').text(sum(allsaleface));
        $('#all3').text((sum(succntr) * 100 / sum(allacount)).toFixed(2) + "%");
        $('#all4').text((sum(threecntr) * 100 / sum(allacount)).toFixed(2) + "%");
        $('#all5').text(sum(sucacount));
        $('#all6').text((sum(tencntr) * 100 / sum(sucacount)).toFixed(2) + "%");
        var option = {
                tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                        color: '#999'
                                }
                        }
                },
                toolbox: {
                        //                    show: true,
                        feature: {
                                //                        mark: { show: true },
                                dataView: { show: true, readOnly: false },
                                magicType: { show: true, type: ['line', 'bar'] },
                                restore: { show: true },
                                saveAsImage: { show: true }
                        }
                },
                calculable: true,
                color: ['#05af2b', '#ea0505', '#d8a615'],
                legend: {
                        data: ['下游成功率', '下游三分钟到账率', "下游十分钟到账率(成功)"]
                },
                xAxis: [
                        {
                                type: 'category',
                                data: time,
                                axisPointer: {
                                        type: 'shadow'
                                }
                        }
                ],
                yAxis: [
                        {
                                type: 'value',
                                name: '百分比',
                                axisLabel: {
                                        formatter: '{value} %'
                                },
                                min: 80,
                                max: 100
                        }
                ],
                series: [
                        {
                                name: '下游成功率',
                                type: 'line',
                                data: alldown
                        },
                        {
                                name: '下游三分钟到账率',
                                type: 'line',
                                data: allthree
                        },

                        {
                                name: '下游十分钟到账率(成功)',
                                type: 'line',
                                data: allten
                        }
                ]
        };
        chartobj.setOption(option);
}
;