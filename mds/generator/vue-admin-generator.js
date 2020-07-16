const { GraphBuilder } = require("./../../src/generator/markdown/graph");
const { FILE } = require("./../../src/libs/file");

function main() {
      buildStructure();
}

function buildStructure(){
        const builder = new GraphBuilder("TD");

        let app = "app"
                , colorPicker = "colorPicker"
                , formater = "formater"
                , customerControl = "customerControls"
                , authenticator = "authenticator"
                , logger = "logger"
                , webClient = "webClient"
                , store = "store"
                , jobExecutor = "jobExecutor"
                , pageManager = "pageManager";

        let content = builder.path(e(app), e(colorPicker))
                .path(e(app), e(formater))
                .path(e(app), e(customerControl))
                .path(e(app), e(authenticator))
                .path(e(app), e(logger))
                .path(e(app), e(webClient))
                .path(e(app), e(store))
                .path(e(app), e(jobExecutor))
                .path(e(app), e(pageManager))
                .build();
         
        FILE.write("./output/vue-admin-structure.md",content);
}

function e(name, text) {
        return { name, text };
}

/********************************************************main*********************************************************************************8 */
main();
