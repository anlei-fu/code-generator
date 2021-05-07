const { all } = require("../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/os/all");
const { FILE, STR ,DIR} = require("../../libs");
const { ALL } = require("dns");


const map = {
        term: {
                tables: ["termInfo", "termPage", "termTheme", "termPageTrack", "termProduct"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/product-landing-pages/term-config"
        },
        advertiser: {
                tables: ["agentAdvertiser", "agentAdvertiserConvert"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/operation-config-pages/ad-config"
        },
        logging: {
                tables: ["operateMain", "systemLog"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/sys-config-pages/logging"
        },
        agent:{
                tables: ["agentAccount", "agentAccountApp", "agentInfo", "agentAccountSteward"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/operation-config-pages/agent-config"
        },
        plat: {
                tables: ["agentAccount", "agentAccountApp", "agentInfo", "platInfo","platAccount","platAccountApp"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/operation-config-pages/plat-config"
        },
        pay: {
                tables: ["payAccountInfo", "payAccountRate","orderRefund"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/financial-manage-pages/financial-account-config"
        },
        funds: {
                tables: ["agentFundCost", "upFundChange", "agentAccountRebate"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/financial-manage-pages/funds"
        },
        data:{
                tables: ["agentAdvertiserFund", "agentAdvertiserCost"],
                folder: "F:/业务开发项目_研发一/os-admin-web/infoFlowSupport/src/components/pages/operation-config-pages/report-config"
        }
}

function findTargetFolder(name) {
        for (const key in map) {
                for (const table of map[key].tables) {
                        if (table == name)
                                return map[key].folder;
                }
        }
}

/**
 * 
 * @param {Array} tables 
 * @param {Number} type 
 */
function main(tables, type) {
        tables.forEach(x => {
                let name = STR.lowerFirstLetter(STR.removeRange(x.name, 0, 2));
                let targetFolder = findTargetFolder(STR.lowerFirstLetter(name));
                name=STR.upperFirstLetter(name);
                if (!targetFolder)
                        throw new Error(`can not found table ${x.name}`);

               
                if (type == 1 || type == 3) {
                        FILE.copy(`./output/page/${name}.vue`, `${targetFolder}/${name}.vue`);
                }

                if (type == 2 || type == 3) {
                        DIR.create(`${targetFolder}/modal/`);
                        FILE.copy(`./output/modal/${name}Edit.vue`, `${targetFolder}/modal/${name}Edit.vue`);
                }
        });
}

/*********************************************************main*********************************************************** */
main(
        [
         // all.osTermInfo,
        //   all.osPlatInfo,
        //   all.osAgentInfo,
        //   all.osAgentAdvertiser,
        //   all.osAgentAdvertiserConvert,
        //   all.osAgentAccountSteward,S
        //  all.osAgentFundCost,
         // all.osUpFundChange,
        //   all.osAgentAccount,
        //   all.osPayAccountInfo,
        //   all.osPayAccountRate,
        //   all.osOperateMain,
        //   all.osSystemLog
        //   all.osPlatAccount,
        //   all.osPlatAccountApp
        // all.osOrderRefund,
        // all.osAgentAccountRebate,
        // all.osAgentFundCost,
        // all.osUpFundChange
           all.osTermInfo,
           all.osTermPage,
           all.osTermPageTrack,
           all.osTermProduct,
           all.osTermTheme

        ],
        3
);