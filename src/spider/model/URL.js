class URL {
        constructor () {

                /**
                 * System id of url
                 */
                this.id = 0;

                /**
                 * Target url
                 */
                this.url = "";

                /**
                 * Reffer url
                 */
                this.referUrl = "";

                /**
                 * Query string  a=1&b=9
                 */
                this.query = "";

                /**
                 * Params json string
                 */
                this.params = {};

                /**
                 * The http method of url
                 */
                this.httpMethod = 1;

                /**
                 * The depth of url
                 */
                this.depth = 0;
        }
}

exports.URL = URL;
