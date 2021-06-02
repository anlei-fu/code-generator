const API_PREFIX = process.env.NODE_ENV == "production" || process.env.NODE_ENV == "pre" ? "/admin-api" : "/os-admin";
const PERMISSION_PREFIX = "/permission/api";

const ApiUrl = {
  //权限系统相关接口
  GetPermissionList: `${PERMISSION_PREFIX}/user/reqcookie`, //获取用户权限
  LoginOut: `${PERMISSION_PREFIX}/user/clearcookie`, //退出登录

  //dic
  GetDicPage: `${API_PREFIX}/sys/dic/page`,
  CreateDicItem: `${API_PREFIX}/sys/dic/create`,
  DelDicItem: `${API_PREFIX}/sys/dic/{recordId}`,
  UpdateDicItem: `${API_PREFIX}/sys/dic/update`,

  //timedTask
  GetTimedTaskPage: `${API_PREFIX}/sys/timedtask/page`,

  //alarm-config
  CreateAlarmConfig: `${API_PREFIX}/sys/warn-config`,
  DelAlarmConfig: `${API_PREFIX}/sys/warn-config/{warnUid}`,
  UpdateAlarmConfig: `${API_PREFIX}/sys/warn-config`,
  GetAlarmConfigPage: `${API_PREFIX}/sys/warn-config/page`,

  // warn message
  GetWarnMessage: `${API_PREFIX}/sys/warn-message/page`,

  //group
  CreateProductGroupItem: `${API_PREFIX}/sys/product-group`,
  DelProductGroupItem: `${API_PREFIX}/sys/product-group/{groupNo}`,
  UpdateProductGroupItem: `${API_PREFIX}/sys/product-group`,
  GetProductGroupPage: `${API_PREFIX}/sys/product-group/page`,

  //product-type
  CreateProductTypeItem: `${API_PREFIX}/sys/product-type`,
  DelProductTypeItem: `${API_PREFIX}/sys/product-type/{recordId}`,
  UpdateProductTypeItem: `${API_PREFIX}/sys/product-type`,
  GetProductTypePage: `${API_PREFIX}/sys/product-type/page`,
  GetProductTypeAll: `${API_PREFIX}/sys/product-type/all`,

  //term-
  CreateTermPageTrack: `${API_PREFIX}`,
  DelTermPageTrack: `${API_PREFIX}`,
  UpdateTermPageTrack: `${API_PREFIX}`,
  GetTermPageTrackPage: `${API_PREFIX}`,

  //term-info
  CreateTermInfoItem: `${API_PREFIX}/term/info`,
  DelTermInfoItem: `${API_PREFIX}/term/info/{termNo}`,
  UpdateTermInfoItem: `${API_PREFIX}/term/info`,
  GetTermInfoPage: `${API_PREFIX}/term/info/page`,

  //term-product
  CreateTermProduct: `${API_PREFIX}/term/product`,
  DelTermProduct: `${API_PREFIX}/term/product/{recordId}`,
  UpdateTermProduct: `${API_PREFIX}/term/product`,
  GetTermProductPage: `${API_PREFIX}/term/product/page`,

  //term-page
  CreateTermPage: `${API_PREFIX}/term/page`,
  DelTermPage: `${API_PREFIX}/term/page/{pageId}`,
  UpdateTermPage: `${API_PREFIX}/term/page`,
  GetTermPagePage: `${API_PREFIX}/term/page/page`,

  //term-theme
  CreateTermTheme: `${API_PREFIX}/term/theme`,
  DelTermTheme: `${API_PREFIX}/term/theme/{themeId}`,
  UpdateTermTheme: `${API_PREFIX}/term/theme`,
  GetTermThemePage: `${API_PREFIX}/term/theme/page`,

  //flow-info
  CreateFlowInfo: `${API_PREFIX}/flow/info`,
  DelFlowInfo: `${API_PREFIX}/flow/info/{flowId}`,
  UpdateFlowInfo: `${API_PREFIX}/flow/info`,
  GetFlowInfoPage: `${API_PREFIX}/flow/info/page`,

  //flow-step
  CreateFlowStep: `${API_PREFIX}/flow/step`,
  DelFlowStep: `${API_PREFIX}/flow/step/{stepId}`,
  UpdateFlowStep: `${API_PREFIX}/flow/step`,
  GetFlowStepPage: `${API_PREFIX}/flow/step/page`,

  //pay-account
  CreatePayAccount: `${API_PREFIX}/pay/account`,
  DelPayAccount: `${API_PREFIX}/pay/account/{accountId}`,
  UpdatePayAccount: `${API_PREFIX}/pay/account`,
  GetPayAccountPage: `${API_PREFIX}/pay/account/page`,

  //pay-rate
  CreatePayRate: `${API_PREFIX}/pay/rate`,
  DelPayRate: `${API_PREFIX}/pay/rate/{recordId}`,
  UpdatePayRate: `${API_PREFIX}/pay/rate`,
  GetPayRatePage: `${API_PREFIX}/pay/rate/page`,

  //pay-refund
  GetPayRefundPage: `${API_PREFIX}/pay/refund/page`,

  //down-channel
  CreateDownChannelInfo: `${API_PREFIX}/down/channel`,
  DelDownChannelInfo: `${API_PREFIX}/down/channel/{channelNo}`,
  UpdateDownChannelInfo: `${API_PREFIX}/down/channel`,
  GetDownChannelInfoPage: `${API_PREFIX}/down/channel/page`,

  // down channel account
  CreateDownlAccount: `${API_PREFIX}/down/account/`,
  GetDownlAccountByChannelNo: `${API_PREFIX}/down/account/{channelNo}`,
  UpdateDownlAccountByChannelNo: `${API_PREFIX}/down/account`,

  //down-product
  CreateDownProduct: `${API_PREFIX}/down/product`,
  DelDownProduct: `${API_PREFIX}/down/product/{productNo}`,
  UpdateDownProduct: `${API_PREFIX}/down/product`,
  GetDownProductPage: `${API_PREFIX}/down/product/page`,

  //down-product-rule
  CreateDownProductRule: `${API_PREFIX}/down/product-rule`,
  DelDownProductRule: `${API_PREFIX}/down/product-rule/{recordId}`,
  UpdateDownProductRule: `${API_PREFIX}/down/product-rule`,
  GetDownProductRulePage: `${API_PREFIX}/down/product-rule/page`,

  //down-appoint-up
  CreateDownAppointUp: `${API_PREFIX}/down/down-to-up`,
  DelDownAppointUp: `${API_PREFIX}/down/down-to-up/{recordId}`,
  UpdateDownAppointUp: `${API_PREFIX}/down/down-to-up`,
  GetDownAppointUpPage: `${API_PREFIX}/down/down-to-up/page`,

  //down-group
  CreateDownGroup: `${API_PREFIX}/down/group`,
  DelDownGroup: `${API_PREFIX}/down/group/{groupNo}`,
  UpdateDownGroup: `${API_PREFIX}/down/group`,
  GetDownGroupPage: `${API_PREFIX}/down/group/page`,

  //up-channel
  CreateUpChannel: `${API_PREFIX}/up/channel`,
  DelUpChannel: `${API_PREFIX}/up/channel/{channelNo}`,
  UpdateUpChannel: `${API_PREFIX}/up/channel`,
  GetUpChannelPage: `${API_PREFIX}/up/channel/page`,

  //up-product
  CreateUpProduct: `${API_PREFIX}/up/product`,
  DelUpProduct: `${API_PREFIX}/up/product/{productNo}`,
  UpdateUpProduct: `${API_PREFIX}/up/product`,
  GetUpProductPage: `${API_PREFIX}/up/product/page`,

  //up-api
  CreateUpApi: `${API_PREFIX}/up/api`,
  DelUpApi: `${API_PREFIX}/up/api/{recordId}`,
  UpdateUpApi: `${API_PREFIX}/up/api`,
  GetUpApiPage: `${API_PREFIX}/up/api/page`,

  //up-error
  CreateUpError: `${API_PREFIX}/up/error-map`,
  DelUpError: `${API_PREFIX}/up/error-map/{recordId}`,
  UpdateUpError: `${API_PREFIX}/up/error-map`,
  GetUpErrorPage: `${API_PREFIX}/up/error-map/page`,

  //up-group
  CreateUpGroup: `${API_PREFIX}/up/group`,
  DelUpGroup: `${API_PREFIX}/up/group/{groupNo}`,
  UpdateUpGroup: `${API_PREFIX}/up/group`,
  GetUpGroupPage: `${API_PREFIX}/up/group/page`,

  //rebate-rules
  CreateUpRebateRules: `${API_PREFIX}/up/reward-rule`,
  DelUpRebateRules: `${API_PREFIX}/up/reward-rule/{recordId}`,
  UpdateUpRebateRules: `${API_PREFIX}/up/reward-rule`,
  GetUpRebateRulesPage: `${API_PREFIX}/up/reward-rule/page`,
  GetUpRebateRulesByProductNo: `${API_PREFIX}/up/reward-rule/{productNo}`,

  //agent-account-app
  CreatePlatAgentAccountApp: `${API_PREFIX}/plat-agent/agent-account-app`,
  DelPlatAgentAccountApp: `${API_PREFIX}/plat-agent/agent-account-app/{appUid}`,
  UpdatePlatAgentAccountApp: `${API_PREFIX}/plat-agent/agent-account-app`,
  GetPlatAgentAccountAppPage: `${API_PREFIX}/plat-agent/agent-account-app/page`,

  //agent-advertiser-fund
  GetAgentAdvertiserFundPage: `${API_PREFIX}/advertiser/advertiser-fund/list`,

  //agent-advertiser-cost
  GetAgentAdvertiserCostPage: `${API_PREFIX}/advertiser/advertiser-cost/page`,

  //plat-info
  CreatePlatInfo: `${API_PREFIX}/plat-agent/plat`,
  DelPlatInfo: `${API_PREFIX}/plat-agent/plat/{platNo}`,
  UpdatePlatInfo: `${API_PREFIX}/plat-agent/plat`,
  GetPlatInfoPage: `${API_PREFIX}/plat-agent/plat/page`,

  //plat-account-app
  CreatePlatAccountApp: `${API_PREFIX}/plat-agent/plat-account-app`,
  DelPlatAccountApp: `${API_PREFIX}/plat-agent/plat-account-app/{appUid}`,
  UpdatePlatAccountApp: `${API_PREFIX}/plat-agent/plat-account-app`,
  GetPlatAccountAppPage: `${API_PREFIX}/plat-agent/plat-account-app/page`,

  //plat-account
  CreatePlatAccount: `${API_PREFIX}/plat-agent/plat-account`,
  DelPlatAccount: `${API_PREFIX}/plat-agent/plat-account/{accountId}`,
  UpdatePlatAccount: `${API_PREFIX}/plat-agent/plat-account`,
  GetPlatAccountPage: `${API_PREFIX}/plat-agent/plat-account/page`,

  //agent-info
  CreateAgentInfo: `${API_PREFIX}/plat-agent/agent`,
  DelAgentInfo: `${API_PREFIX}/plat-agent/agent/{agentNo}`,
  UpdateAgentInfo: `${API_PREFIX}/plat-agent/agent`,
  GetAgentInfoPage: `${API_PREFIX}/plat-agent/agent/page`,

  //agent-account-steward
  CreateAgentAccountSteward: `${API_PREFIX}/plat-agent/agent-account-steward`,
  syncAgentAccountSteward: `${API_PREFIX}/plat-agent/agent-steward-sync/{stewardId}`,
  DelAgentAccountSteward: `${API_PREFIX}/plat-agent/agent-account-steward/{stewardId}`,
  UpdateAgentAccountSteward: `${API_PREFIX}/plat-agent/agent-account-steward`,
  GetAgentAccountStewardPage: `${API_PREFIX}/plat-agent/agent-account-steward/page`,

  //agent-account-rebate
  GetAgentAccountRebatePage: `${API_PREFIX}/plat-agent/agent-account-rebate/page`,
  CreateAgentAccountRebate: `${API_PREFIX}/plat-agent/agent-account-rebate`,
  DelAgentAccountRebate: `${API_PREFIX}/plat-agent/agent-account-rebate/{recordId}`,
  UpdateAgentAccountRebate: `${API_PREFIX}/plat-agent/agent-account-rebate`,

  //agent-account
  CreateAgentAccount: `${API_PREFIX}/plat-agent/agent-account`,
  DelAgentAccount: `${API_PREFIX}/plat-agent/agent-account/{accountId}`,
  UpdateAgentAccount: `${API_PREFIX}/plat-agent/agent-account`,
  GetAgentAccountPage: `${API_PREFIX}/plat-agent/agent-account/page`,

  // agent domain
  CreateAgentDomain: `${API_PREFIX}/plat-agent/domain`,
  DelAgentDomain: `${API_PREFIX}/plat-agent/domain/{recordId}`,
  UpdateAgentDomain: `${API_PREFIX}/plat-agent/domain`,
  GetAgentDomainPage: `${API_PREFIX}/plat-agent/domain/page`,

  //agent_advertiser_convert
  CreateAgentAdvertiserConvert: `${API_PREFIX}/advertiser/advertiser-convert`,
  DelAgentAdvertiserConvert: `${API_PREFIX}/advertiser/advertiser-convert/{convertUid}`,
  UpdateAgentAdvertiserConvert: `${API_PREFIX}/advertiser/advertiser-convert`,
  GetAgentAdvertiserConvertPage: `${API_PREFIX}/advertiser/advertiser-convert/page`,

  //agent_advertiser
  CreateAgentAdvertiser: `${API_PREFIX}/advertiser/advertiser`,
  DelAgentAdvertiser: `${API_PREFIX}/advertiser/advertiser/{advertiserUid}`,
  UpdateAgentAdvertiser: `${API_PREFIX}/advertiser/advertiser`,
  GetAgentAdvertiserPage: `${API_PREFIX}/advertiser/advertiser/page`,

  // grade rule
  CreateUpGradeRule: `${API_PREFIX}/up/reward-grade`,
  DelUpGradeRule: `${API_PREFIX}/up/reward-grade/{recordId}`,
  UpdateUpGradeRule: `${API_PREFIX}/up/reward-grade`,
  GetUpGradeRulePage: `${API_PREFIX}/up/reward-grade/page`,

  // agent reward history
  CreateAgentRewardHistory: `${API_PREFIX}/fund-change/agent-reward-history`,
  DelAgentRewardHistory: `${API_PREFIX}/fund-change/agent-reward-history/{recordId}`,
  UpdateAgentRewardHistory: `${API_PREFIX}/fund-change/agent-reward-history`,
  GetAgentRewardHistoryPage: `${API_PREFIX}/fund-change/agent-reward-history/page`,

  // up reward history
  CreateUpRewardHistory: `${API_PREFIX}/fund-change/up-reward-history`,
  DelUpRewardHistory: `${API_PREFIX}/fund-change/up-reward-history/{recordId}`,
  UpdateUpRewardHistory: `${API_PREFIX}/fund-change/up-reward-history`,
  GetUpRewardHistoryPage: `${API_PREFIX}/fund-change/up-reward-history/page`,

  //up-fund-change
  GetUpFundChangePage: `${API_PREFIX}/fund-change/up-fund-change/page`,

  //
  GetOrderReward: `${API_PREFIX}/fund-change/order-reward/page`,

  //down-fund-change
  GetDownFundChangePage: `${API_PREFIX}/fund-change/down-fund-change/page`,

  //operate-log
  GetOperateLogPage: `${API_PREFIX}/sys/operate-log/page`,

  //sys-log
  GetSysLogPage: `${API_PREFIX}/log/sys/page`,

  //order
  GetSimpleOrderQuery: `${API_PREFIX}/order/simple/page`,
  GetOrderStepQuery: `${API_PREFIX}/order/step/page`,
  GetOrderPageQuery: `${API_PREFIX}/order/main/page`,
  GetOrderDetailByOrderNo: `${API_PREFIX}/order/detail/{orderNo}`,
  GetOrderDeliveryByOrderNo: `${API_PREFIX}/order/delivery/{orderNo}`,
  GetOrderQueryByOrderNo: `${API_PREFIX}/order/query/{orderNo}`,
  GetOrderFlowStepByOrderNo: `${API_PREFIX}/order/flow-step/{orderNo}`,
  GetOrderExtendByOrderNo: `${API_PREFIX}/order/extend/{orderNo}`,
  GetOrderNotifyByOrderNo: `${API_PREFIX}/order/notify/{orderNo}`,
  GetOrderCallbackByOrderNo: `${API_PREFIX}/order/callback/{orderNo}`,



  GetDeliveryDetailByDeliveryId: `${API_PREFIX}/order/delivery/detail/{deliveryId}`,
  GetOrderOperateByDeliveryId: `${API_PREFIX}/order/operate/{deliveryId}`,

  GetOrderCaptchaDetialById :`${API_PREFIX}/order/captcha/detail/{id}`,

  GetQueryRecordPage: `${API_PREFIX}/order/query/page`,
  GetOrderDeliveryPage: `${API_PREFIX}/order/delivery/page`,
  GetSMSCodeRecordPage: `${API_PREFIX}/order/captcha/page`,
  GetCallbackRecordPage: `${API_PREFIX}/order/callback/page`,
  GetNoticeRecordPage: `${API_PREFIX}/order/notice/page`,
  GetOrderRefundPage: `${API_PREFIX}/order/refund/page`,
  ManualNotice: `${API_PREFIX}/order/notice/manual`,



  //all
  GetAllDic: `${API_PREFIX}/sys/dic/all`,
  GetAllAgentInfo: `${API_PREFIX}/plat-agent/agent/all`,

  GetAllDownchannel: `${API_PREFIX}/down/channel/all`,
  GetAllDownProduct: `${API_PREFIX}/down/product/all`,

  GetAllPlatInfo: `${API_PREFIX}/plat-agent/plat/all`,

  // GetAllProductGroup: `${API_PREFIX}/sys/group/all`,
  GetAllUpProductGroup: `${API_PREFIX}/up/group/all`,
  GetAllDownProductGroup: `${API_PREFIX}/down/group/all`,
  GetAllProductType: `${API_PREFIX}/sys/product-type/all`,

  GetAllProvince: `${API_PREFIX}/sys/province/all`,
  GetAllCity: `${API_PREFIX}/sys/city/all`,
  GetAllArea: `${API_PREFIX}/sys/area/all`,

  GetAllTermInfo: `${API_PREFIX}/term/info/all`,
  GetAllTermPage: `${API_PREFIX}/term/page/all`,
  GetAllTermProduct: `${API_PREFIX}/term/product/all`,
  GetAllTermTheme: `${API_PREFIX}/term/theme/all`,

  GetAllUpchannel: `${API_PREFIX}/up/channel/all`,
  GetAllUpProduct: `${API_PREFIX}/up/product/all`,

  GetAllFlowInfo: `${API_PREFIX}/flow/info/all`,
  GetAllFlowStep: `${API_PREFIX}/flow/step/all`,

  GetAllAgentAccount: `${API_PREFIX}/plat-agent/agent-account/all`,
  GetAllPlatAccount: `${API_PREFIX}/plat-agent/plat-account/all`,
  GetAllPlatAccountApp: `${API_PREFIX}/plat-agent/plat-account-app/all`,
  GetAllSteward: `${API_PREFIX}/plat-agent/agent-account-steward/all`,
  GetAllAdvertiser: `${API_PREFIX}/advertiser/advertiser/all`,

  GetDownProductByChannelNo: `${API_PREFIX}/down/product/get-by-channel-no/{channelNo}`,
  GetTermInfoByProductNo: ` ${API_PREFIX}/term/info/get-by-product-no/{productNo}`,


  GetAgentInfoByPaltNo: ` ${API_PREFIX}/plat-agent/agent/get-by-plat-no/{platNo}`,
  GetStewardByAgentNo: `${API_PREFIX}/plat-agent/steward/get-by-agent-no/{agentNo}`,
  GetAccountByAgentNo: `${API_PREFIX}/plat-agent/account/get-by-agent-no/{agentNo}`,

  GetTermThemeByTermNo: `${API_PREFIX}/term/theme/get-by-termNo/{termNo}`,

  GetAppByPlatNo: `${API_PREFIX}/plat-agent/app/get-by-plat-no/{platNo}`,
  // plat-account/get-by-plat-no/{platNo}
  GetPlatAccountByPlatNo: `${API_PREFIX}/plat-agent/plat-account/get-by-plat-no/{platNo}`,
  GetAdvertiserByAgentNo: `${API_PREFIX}/advertiser/advertiser/get-by-agent-no/{agentNo}`,
  GetTermPageByAgentNo: `${API_PREFIX}/term/page/get-by-agent-no/{agentNo}`,


  // report flow
  GetFlowReport: `${API_PREFIX}/flow-report/get-flow-report`,
  GetFlowProvinceReport: `${API_PREFIX}/flow-report/get-province-report`,
  GetFlowCurveData: `${API_PREFIX}/flow-report/get-curve-data`,

  // report card
  GetCardReport: `${API_PREFIX}/card-report/get-card-report`,
  GetCardProvinceReport: `${API_PREFIX}/card-report/get-province-report`,
  GetCardCurveData: `${API_PREFIX}/card-report/get-curve-data`,
  GetCardActivateReport: `${API_PREFIX}/card-report/get-activate-report`,

  // report other
  GetOrderReport: `${API_PREFIX}/other-report/get-order-report`,
  GetAgentOrderReport: `${API_PREFIX}/other-report/get-agent-report`,
  GetTermOrderReport: `${API_PREFIX}/other-report/get-term-report`,
  GetErrorReport: `${API_PREFIX}/other-report/get-error-report`,
  GetIpStat: `${API_PREFIX}/other-report/get-ip-stat`,
  GetAgentCostReport: `${API_PREFIX}/other-report/get-agent-cost-report`,

  //manualAudit
  BatchAudit: `${API_PREFIX}/order/manual-audit`,
  GetManualAuditPage: `${API_PREFIX}/order/manual-audit/page`,


  ActivateUrl: `${API_PREFIX}/advertiser/advertiser-convert/activate`,

  GetFlowStepByFlow: `${API_PREFIX}/flow/step-by-flow/{flowId}`,

  GetTermPageProductByPageId: `${API_PREFIX}/term/term-page-product/get-by-page-id/{pageId}`,
  GetTermPageProductPage: `${API_PREFIX}/term/term-page-product/page`,
  UpdateTermPageProduct: `${API_PREFIX}/term/term-page-product`,
  CreateTermPageProduct: `${API_PREFIX}/term/term-page-product`,
  DeleteTermPageProduct: `${API_PREFIX}/term/term-page-product/{recordId}`,

  // advertiser balance
  GetAdvertiserBalanceByAdvertiserUid: `${API_PREFIX}/fund-change/advertiser-balance/get-by-id/{advertiserUid}`,
  GetAdvertiserBalanceDetailByAdvertiserUid: `${API_PREFIX}/fund-change/advertiser-balance-detail/get-by-id`,

  GetAdvertiserBalance: `${API_PREFIX}/fund-change/advertiser-balance/page`,
  CreateAdvertiserBalance: `${API_PREFIX}/fund-change/advertiser-balance`,
  DeleteAdvertiserBalance: `${API_PREFIX}/fund-change/advertiser-balance/{recordId}`,
  UpdateAdvertiserBalance: `${API_PREFIX}/fund-change/advertiser-balance`,

  // term page track report
  GetTermPageTrackStat: `${API_PREFIX}/other-report/get-term-page-track-report`,

  // api log stat
  GetApiLogStat: `${API_PREFIX}/other-report/get-api-log-stat`,

  //Agent domain all

  GetAgentDomainAll: `${API_PREFIX}/plat-agent/domain/all`,
  GetAgentDomainByAgentNo: `${API_PREFIX}/plat-agent/domain/get-by-agent/{agentNo}`,
  GetGrowthStatReport :`${API_PREFIX}/other-report/get-growth-stat`

}


export {
  ApiUrl,
}
