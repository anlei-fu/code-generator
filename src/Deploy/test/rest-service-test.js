const { RestService } = require("./../common/RestService");
const { Controller } = require("./../common/Controller");

class EchoController extends Controller {
        constructor () {
                super("echo controller");
        }

        say({ query }) {
                this.info("get request and word is " + query.word);
                return query.word;
        }

        mount(app) {
                app.get("/say", (req, resp) => this._process(req, resp, this.say))
        }
}

function test() {
        let controller = new EchoController();
        let service = new RestService(8084, [controller]);
        service.start();
}
/******************************************test*********************************************************************** */
test();