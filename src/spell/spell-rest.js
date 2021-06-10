const { RestService, Controller } = require("./../http");
const { SpellChecker } = require("./SpellChecker");
const { LoggerFactory } = require("./../logging");
const { validateUtils } = require("./../libs")

class SpellController extends Controller {

        constructor () {
                super();
                this._spellChecker = new SpellChecker();
                this._spellChecker.load(`${__dirname}/dic/english.txt`);
        }

        getAdvice({ query }) {
                validateUtils.requireNotNull(query.word);
                return this._spellChecker.findMostPossibleWords(query.word);
        }

        exists({ query }) {
                validateUtils.requireNotNull(query.word);
                return this._spellChecker.check(query.word);
        }

        /**
         * 
         * @param {*} app 
         */
        mount(app) {
                app.get("/advice", (req, resp) => this._process(req, resp, this.getAdvice))
                        .get("/exists", (req, resp) => this._process(req, resp, this.exists));
        }
}

exports.SpellController = SpellController;

function main() {
        LoggerFactory.allowInfos(".*");
        let service = new RestService(12306, [new SpellController()], "./");
        service.init();
        service.start();
}

/*********************************************************main*******************************************888*****************************/
main();