const { SpeedCaculator } = require("../SpeedCaculator");

function main(){
        let caculator = new SpeedCaculator();
        caculator.add({ elapsed: 10, success: false });
        caculator.add({ elapsed: 100, success: true });
        caculator.add({ elapsed: 150, success: true });
        caculator.add({ elapsed: 50, success: true });
        caculator.add({ elapsed: 50, success: true });
        
        console.log(caculator.averageSpeedOfAll);
        console.log(caculator.averageSpeedOfSuccess);
        console.log(caculator.medianSpeedOfSuccess);
        console.log(caculator.maxSpeedOfSuccess);
}

/***********************************************main***************************************************************88 */
main();
