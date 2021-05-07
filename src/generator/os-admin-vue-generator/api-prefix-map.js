const ApiMap = {
        "advertiser": {
                agentAdvertiser: "advertiser",
                agentAdvertiserConvert: "advertiser-convert",
                agentAdvertiserFund: "advertiser-fund",
                agentAdvertiserCost: "advertiser-cost"
        },
        "plat-agent": {
                agentAccountApp: "agent-account-app",
                agentAccount: "agent-account",
                platInfo: "plat",
                agentInfo: "agent",
                platAccount: "plat-account",
                platAccountApp: "plat-account-app",
                agentAccountSteward: "agent-account-steward",
                agentAccountRebate: "agent-account-rebate"
        },
        "term": {
                termInfo: "info",
                termProduct: "product",
                termPage: "page",
                termPageTrack: "page-track",
                termTheme: "theme"
        },
        "fund-change": {
                upFundChange: "up-fund-change",
                upRewardRule: "reward-rule"
        },
        "pay": {
                payAccountInfo: "account",
                payRate: "rate",
                orderRefund: "refund"
        },
        "log": {
                systemLog: "sys",
                operateMain: "operate"
        }
}

function findApiPrefix(name) {
        for (const groupKey in ApiMap) {
                for (const apiKey in ApiMap[groupKey]) {
                        if (name == apiKey)
                                return `${groupKey}/${ApiMap[groupKey][apiKey]}`;
                }
        }

        return "";
}

module.exports = {
        findApiPrefix
}