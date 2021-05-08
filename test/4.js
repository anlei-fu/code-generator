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


function main() {
        let data = FILE.readJson("1.json").data;

        let map = groupBy(
                data,
                (x) => x.termNo + x.pageId + x.time + x.themeId
        );
        let data1 = [];
        Object.keys(map).forEach((key) => {
                let summary = map[key][0];
                summary[summary.eventKey] = summary.eventValue;
                map[key].forEach((x, i) => {
                        if (i === 0) return;

                        summary[x.eventKey] = x.eventValue;
                });
                summary.averageLoadTime = (
                        summary.loadImgTime5G / summary.openCnt5G
                ).toFixed(2);
                data1.push(summary);
        });
}

/*************************************************************************** */
main();