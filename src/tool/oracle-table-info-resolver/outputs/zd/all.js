exports.all={
        sytDownProduct:require("./syt/sytDownProduct").sytDownProduct,
        orderMain:require("./order/orderMain").orderMain,
        orderMainIi:require("./order/orderMainIi").orderMainIi,
        orderDelivery:require("./order/orderDelivery").orderDelivery,
        orderAccount:require("./order/orderAccount").orderAccount,
        orderRefund:require("./order/orderRefund").orderRefund,
        orderNotify:require("./order/orderNotify").orderNotify,
        orderMainHs:require("./order/orderMainHs").orderMainHs,
        orderVcode:require("./order/orderVcode").orderVcode,
        orderMainExt:require("./order/orderMainExt").orderMainExt,
        bannerList:require("./banner/bannerList").bannerList,
        fcSystemProvince:require("./fc/fcSystemProvince").fcSystemProvince,
        fcSystemCity:require("./fc/fcSystemCity").fcSystemCity,
        couponUseRule:require("./coupon/couponUseRule").couponUseRule,
        couponRecord:require("./coupon/couponRecord").couponRecord,
        activityInfo:require("./activity/activityInfo").activityInfo,
        operateLog:require("./operate/operateLog").operateLog,
        upChannelConfigOld:require("./up/upChannelConfigOld").upChannelConfigOld,
        upChannelDayStatDiff:require("./up/upChannelDayStatDiff").upChannelDayStatDiff,
        upProduct:require("./up/upProduct").upProduct,
        upChannelConfig:require("./up/upChannelConfig").upChannelConfig,
        upChannelStatDiffDetail:require("./up/upChannelStatDiffDetail").upChannelStatDiffDetail,
        upChannelDayQxstatDiff:require("./up/upChannelDayQxstatDiff").upChannelDayQxstatDiff,
        zdCouponUsed:require("./zd/zdCouponUsed").zdCouponUsed,
        receiptAccountInfo:require("./receipt/receiptAccountInfo").receiptAccountInfo,
        receiptFundRecord:require("./receipt/receiptFundRecord").receiptFundRecord,
        receiptAccountConfig:require("./receipt/receiptAccountConfig").receiptAccountConfig,
        receiptAccountRate:require("./receipt/receiptAccountRate").receiptAccountRate,
        downChannel:require("./down/downChannel").downChannel,
        downSpecifiedUp:require("./down/downSpecifiedUp").downSpecifiedUp,
        downProduct:require("./down/downProduct").downProduct,
        downChannelActivity:require("./down/downChannelActivity").downChannelActivity,
        warningConfig:require("./warning/warningConfig").warningConfig,
        warningMessage:require("./warning/warningMessage").warningMessage,
        dailyAccountSnapshot:require("./daily/dailyAccountSnapshot").dailyAccountSnapshot,
        channelPaymentConfig:require("./channel/channelPaymentConfig").channelPaymentConfig,
        linkProductInfo:require("./link/linkProductInfo").linkProductInfo,
        linkOrderInfo:require("./link/linkOrderInfo").linkOrderInfo,
        systemLog:require("./system/systemLog").systemLog,
        paymentConfig:require("./payment/paymentConfig").paymentConfig,
        paymentBillMatch:require("./payment/paymentBillMatch").paymentBillMatch,
      //  tempOrder:require("./temp/tempOrder").tempOrder,
        //tempOrder2:require("./temp/tempOrder2").tempOrder2,
        matchBillTask:require("./match/matchBillTask").matchBillTask,
        billMatchDifference:require("./bill/billMatchDifference").billMatchDifference,
        userIpExclude:require("./user/userIpExclude").userIpExclude,
        userMessageRecord:require("./user/userMessageRecord").userMessageRecord,
        userMessageConfig:require("./user/userMessageConfig").userMessageConfig,
        terminalInfo:require("./terminal/terminalInfo").terminalInfo,
        terminalDownMap:require("./terminal/terminalDownMap").terminalDownMap,
        jdDayReport:require("./jd/jdDayReport").jdDayReport,
        failMessageOrder:require("./fail/failMessageOrder").failMessageOrder,
        blackMobile:require("./black/blackMobile").blackMobile,
        blackUser:require("./black/blackUser").blackUser,
        sysDictionary:require("./sys/sysDictionary").sysDictionary,
}