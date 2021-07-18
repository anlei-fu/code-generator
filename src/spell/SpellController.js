const { Controller } = require("./../http")
const { SpellChecker } = require("./SpellChecker")

class SpellCheckerController extends Controller {
    constructor() {
        super("spell-controller")
    }

    init(context) {
    }


    async findMostPossible({ body }) {

        let checker = new SpellChecker();
        checker.loadWords(body.words);
        return this.resposneObject(checker.findMostPossibleWords(body.word));
    }


    mount(app) {
        app.post("/spell/find", (req, resp) => this._process(req, resp, this.findMostPossible))
    }
}

exports.SpellCheckerController = SpellCheckerController