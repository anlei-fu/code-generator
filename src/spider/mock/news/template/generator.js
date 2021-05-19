const { FILE } = require("./../../../../../libs");
const templateRoot = "./../../template";
const { NewSiteGenerateConfigBuilder } = require(`./../../template/NewSiteGenerateConfig`);
const { SimpleRender } = require("./../../../../../renders");

const {findSeedUrl} =require(`./../../template/find-seed-url`);


const DETAIL_RENDER = new SimpleRender({}, `${templateRoot}/detail-template.js`);
const HOMEPAGE_RENDER = new SimpleRender({}, `${templateRoot}/homepage-template.js`);
const EXTRACT_RENDER = new SimpleRender({}, `${templateRoot}/extract.js`);
const CREATE_SITE_RENDER =new SimpleRender({}, `${templateRoot}/create-site.js`);
const TEST_DETAIL_RENDER =new SimpleRender({}, `${templateRoot}/test-detail.js`);
const TEST_HOMEPAGE_RENDER =new SimpleRender({}, `${templateRoot}/test-homepage.js`);


async function main() {
    let builder = new NewSiteGenerateConfigBuilder();
         

    let config = builder
        .name("@name")
        .siteId(siteId)
        .domain("")
        .navSelector("")
        .urlMatchPattern("")
        .encoding("utf8")
        .title("")
        .author("")
        .date("")
        .content("")
        .testUrl("")
        .now(new Date().toLocaleDateString())
        .build();

        FILE.writeJson("config.json",config,true);

        await findSeedUrl(config.domain,config.navSelector,".*");
        FILE.write(`./detail.js`, DETAIL_RENDER.renderTemplate(config));
        FILE.write(`./extract.js`, EXTRACT_RENDER.renderTemplate(config));
        FILE.write(`./create-site.js`, CREATE_SITE_RENDER.renderTemplate(config));
        FILE.write(`./default-homepage.js`, FILE.read(`${templateRoot}/default-homepage.js`));
        FILE.write(`./test.js`, FILE.read(`${templateRoot}/test-template.js`));
        FILE.write(`./test-detail.js`,TEST_DETAIL_RENDER.renderTemplate(config));
        FILE.write(`./test-homepage.js`,TEST_HOMEPAGE_RENDER.renderTemplate(config));
        config.pattern=config.domain.replace("http://www.","").replace("https://www.","");
        FILE.write(`./homepage.js`, HOMEPAGE_RENDER.renderTemplate(config));
}
/****************************************************main*********************************************** */
main();