class SpeedCaculator {

        /**
         * Constructor of SpeedCaculator
         */
        constructor() {
                this._records = [];
        }

        /**
         * Add record
         * 
         * @param {SpeedItem} record 
         */
        add(record) {
                this._records.push(record);
        }

        /**
         * Average speed of all crawling
         * 
         * @returns {Number}
         */
        get averageSpeedOfAll() {
                if(this._records.length==0)
                  return 0;

                let res =this._records.reduce((previous, current) => { return { elapsed: previous.elapsed + current.elapsed } })

              return  parseInt(res.elapsed / this._records.length);
        }

        /**
         * Average speed of succeed crawling
         * 
         * @returns {Number}
         */
        get averageSpeedOfSuccess() {
                let succeed = this._records.filter(x => x.success);
                if (succeed.length == 0)
                        return 0;

                let res =succeed.reduce((previous, current) => { return { elapsed: previous.elapsed + current.elapsed } });

             return  parseInt(res.elapsed / succeed.length);
        }

        /**
         * Median speed of succeed crawling
         * 
         * @returns {Number}
         */
        get medianSpeedOfSuccess() {
                let succeed = this._records.filter(x => x.success);
                succeed = succeed.sort((x, y) => x.elapsed - y.elapsed);

                if (succeed.length == 0)
                        return 0;

                if (succeed.length % 2 == 0) {
                        return (succeed[parseInt(succeed.length / 2 - 1)].elapsed + succeed[succeed.length / 2].elapsed) / 2;
                } else {
                        return succeed[parseInt(succeed.length / 2)].elapsed;
                }
        }

        /**
         * Max speed of succeed crawling
         * 
         * @returns {Number}
         */
        get maxSpeedOfSuccess() {
                let succeed = this._records.filter(x => x.success);
                succeed = succeed.sort((x, y) => y.elapsed-x.elapsed);
                if (succeed.length == 0)
                        return 0;

                return succeed[0].elapsed;
        }
}

exports.SpeedCaculator = SpeedCaculator;