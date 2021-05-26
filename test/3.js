const { FILE } = require("../src/libs")

/**
 * Sum data
 * 
 * @param {[Object]} array 
 * @param {(elemet)=>number} valueSlector 
 */
function sum(array, valueSlector) {
        let total = 0;
        array.forEach(x => {
                total += valueSlector(x) || 0;
        })

        return total;
}

/**
 * Group by a array
 * 
 * @param {[]} array 
 * @param {(element)=>number} keySelector 
 */
function groupBy(array, keySelector) {
        let map = {};
        array.forEach(x => {
                let key = keySelector(x);
                if (!map[key])
                        map[key] = [];

                map[key].push(x);
        })

        return map;
}

/**
 * Sum all fields
 * 
 * @param {[]} array 
 * @param {[String]} fields 
 */
function sumAll(array, fields, digit = 2) {
        let data = {};
        fields.forEach(x => {
                data[x] = parseFloat(sum(array, item => item[x]).toFixed(digit));
        })

        return data;
}

function addRateField(array, field, rateName = "rate") {
        let total = sum(array, x => x[field]);
        array.forEach(x => {
                x[rateName] = divideToPercentStr(x[field], total);
        })

        return array;
}

function divideToPercentStr(value1, value2, digit = 4) {
        if (!value1)
                return "0%";

        if (!value2)
                return "0%";

        let rate = parseFloat(value1) / parseFloat(value2);
        rate = isNaN(rate) ? "0%" : (parseFloat(rate.toFixed(digit)) * 100) + "%";
        return rate;
}

function sum1(array, advertiserUid, principal) {
        let summary = sumAll(array, [
                "todayCost",
                "yesterdayCost",
                "lastWeekCost",
                "todayConvertCost",
                "yesterdayConvertCost",
                "lastWeekConvertCost",
                "todayCount",
                "yesterdayCount",
                "lastWeekCount",
                "todayProfit",
                "yesterdayProfit",
                "lastWeekProfit",
        ]);

        summary.todayCount = Math.round(summary.todayCount);
        summary.yesterdayCount = Math.round(summary.yesterdayCount);
        summary.lastWeekCount = Math.round(summary.lastWeekCount);

        summary.advertiserUid = advertiserUid;
        summary.principal = principal;

        summary.yesterdayCostGrowth = parseFloat((
                summary.todayCost - summary.yesterdayCost
        ).toFixed(2));
        summary.yesterdayCostGrowthRate = divideToPercentStr(
                summary.todayCost - summary.yesterdayCost,
                summary.yesterdayCost
        );
        summary.lastWeekCostGrowth = (
                summary.todayCost - summary.lastWeekCost
        ).toFixed(2);
        summary.lastWeekCostGrowthRate = divideToPercentStr(
                summary.todayCost - summary.lastWeekCost,
                summary.lastWeekCost
        );

        summary.yesterdayConvertCostGrowth = (
                summary.todayConvertCost - summary.yesterdayConvertCost
        ).toFixed(2);
        summary.yesterdayConvertCostGrate = divideToPercentStr(
                summary.todayConvertCost - summary.yesterdayConvertCost,
                summary.yesterdayConvertCost
        );
        summary.lastWeekConvertCostGrowth = (
                summary.todayConvertCost - summary.lastWeekConvertCost
        ).toFixed(2);

        summary.lastWeekConvertCostGRate = divideToPercentStr(
                summary.todayConvertCost - summary.lastWeekConvertCost,
                summary.lastWeekConvertCost
        );

        summary.yesterdayCountGrowth = (
                summary.todayCount - summary.yesterdayCount
        ).toFixed(0);
        summary.yesterdayCountGrowthRate = divideToPercentStr(
                summary.todayCount - summary.yesterdayCount,
                summary.yesterdayCount
        );
        summary.lastWeekCountGrowth = (
                summary.todayCount - summary.lastWeekCount
        ).toFixed(0);
        summary.lastWeekCountGrowthRate = divideToPercentStr(
                summary.todayCount - summary.lastWeekCount,
                summary.lastWeekCount
        );

        summary.yesterdayProfitGrowth = (
                summary.todayProfit - summary.yesterdayProfit
        ).toFixed(2);
        summary.yesterdayProfitGrowthRate = divideToPercentStr(
                summary.todayProfit - summary.yesterdayProfitt,
                summary.yesterdayProfit
        );
        summary.lastWeekProfitGrowth = (
                summary.todayProfit - summary.lastWeekProfit
        ).toFixed(2);
        summary.lastWeekProfitGrowthRate = divideToPercentStr(
                summary.todayProfit - summary.lastWeekProfit,
                summary.lastWeekProfit
        );
        return summary;
}


function main() {
        let data = FILE.readJson("1.json").data;

        let newList = [];
        let map = groupBy(data, (x) => x.principal);

        Object.keys(map).forEach((key) => {
                let summary = sum1(map[key], "*", key);
                newList.push(summary);
        });

        data = newList;
}

/*************************************************************************** */
main();