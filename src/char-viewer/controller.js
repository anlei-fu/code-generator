const { Controller, HttpClient } = require("./../http");
const { DIR, NamingStrategy } = require("./../libs");
const { SimpleRender } = require("../generator/common/renders/SimplePatternRender");

const CostRender = new SimpleRender({}, `${__dirname}/template/cost.sql`);
const CityRender = new SimpleRender({}, `${__dirname}/template/city.sql`);
const PromoterRender = new SimpleRender({}, `${__dirname}/template/promoter.sql`);

class ConfigBuilder {
        constructor () {
                this.config = {
                        configs: [],
                        xAxis: null
                }
        }

        line(name) {
                this.config.configs.push({
                        key: name,
                        type: "line"
                });

                return this;
        }

        bar(name) {
                this.config.configs.push({
                        key: name,
                        type: "bar"
                });

                return this;
        }

        xAxis(name) {
                this.config.xAxis = name;
                return this;
        }

        build() {
                return this.config;
        }
}


class DataController extends Controller {
        constructor () {
                super("data-controller");
                this._client = new HttpClient("sql executor");
        }

        list() {
                return ["analyzeAd", "analyzeCity", "analyzePomoter"];
        }

        data({ query }) {
                return require(`./data/${query.path}`).data;
        }

        analyzeAd({ query }) {

                if (!query.datePattern) {
                        return this.fail("datePattern can not be null!");
                }

                if (!query.startTime) {
                        return this.fail("startTime can not be null!");
                }

                if (!query.endTime) {
                        return this.fail("endTime can not be null!");
                }

                let where = "";
                if (query.advertiserId) {
                        where += `and t.advertiser_id = '${query.advertiserId}' `;
                }

                if (query.productType) {
                        where += `and t1.product_type = '${query.productType}' `;
                }

                if (query.businessType) {
                        where += `and t1.business_type = '${query.businessType}' `;
                }

                let model = {
                        where,
                        datePattern: query.datePattern,
                        startTime: query.startTime,
                        endTime: query.endTime
                };

                let config = new ConfigBuilder()
                        .xAxis("time")
                        .line("cost")
                        .bar("costPercent")
                        .line("show")
                        .line("showPrice")
                        .bar("showPercent")
                        .line("click")
                        .line("clickPrice")
                        .line("clickPercent")
                        .line("clickRate")
                        .line("convert")
                        .line("convertPrice")
                        .line("convertPercent")
                        .line("convateRate")
                        .build()

                return this.sql(CostRender.renderTemplate(model), config);
        }

        analyzeCity({ query }) {

                if (!query.startTime) {
                        return this.fail("startTime can not be null!");
                }

                if (!query.endTime) {
                        return this.fail("endTime can not be null!");
                }

                let where = "";
                if (query.provinceNo) {
                        where += `and t.province_no = '${query.provinceNo}' `;
                }

                if (query.productType) {
                        where += `and t.product_type = '${query.productType}' `;
                }

                if (query.businessType) {
                        where += `and t.business_type = '${query.businessType}' `;
                }

                if (query.promoterId) {
                        where += `and t.promoter_id = '${query.promoterId}' `;
                }

                let model = {
                        where,
                        datePattern: query.datePattern,
                        startTime: query.startTime,
                        endTime: query.endTime
                };

                let config = new ConfigBuilder()
                        .xAxis("cityName")
                        .bar("totalOrderCount")
                        .bar("validOrderCount")
                        .bar("validOrderRate")
                        .bar("orderRate")
                        .build()

                return this.sql(CityRender.renderTemplate(model), config);
        }

        analyzePomoter({ query }) {

                if (!query.startTime) {
                        return this.fail("startTime can not be null!");
                }

                if (!query.endTime) {
                        return this.fail("endTime can not be null!");
                }

                let where = "";
                if (query.productType) {
                        where += `and t1.product_type = '${query.productType}' `;
                }

                if (query.businessType) {
                        where += `and t1.business_type = '${query.businessType}' `;
                }

                if (query.agentNo) {
                        where += `and t1.agent_no = '${query.agentNo}' `;
                }


                if (query.promoterId) {
                        where += `and t1.promoter_id = '${query.promoterId}' `;
                }

                let model = {
                        where,
                        datePattern: query.datePattern,
                        startTime: query.startTime,
                        endTime: query.endTime
                };

                let config = new ConfigBuilder()
                        .xAxis("userName")
                        .line("cost")
                        .bar("costPercent")
                        .line("show")
                        .line("showPrice")
                        .bar("showPercent")
                        .line("click")
                        .line("clickPrice")
                        .line("clickPercent")
                        .line("clickRate")
                        .line("convert")
                        .line("convertPrice")
                        .line("convertPercent")
                        .line("convateRate")
                        .build()

                return this.sql(PromoterRender.renderTemplate(model), config);
        }



        async sql(sql, config) {
                console.log(sql);
                let onLine = "http://182.140.244.58:9098";
                let local = "http://localhost:56001"
                let resp = await this._client.post(`${onLine}/ToInterFace/QueryData`, { sql });

                if (!resp.result) {
                        return this.fail(resp.msg);
                }

                let data = JSON.parse(resp.data);
                let list = [];
                data.forEach(x => {
                        let obj = {};
                        Object.keys(x).forEach(key => {
                                obj[NamingStrategy.toCamel(key)] = x[key];
                        });

                        list.push(obj);
                });
                config.list = list;

                return this.success("success", config);
        }

        mount(app) {
                app.get("/list", (req, resp) => this._process(req, resp, this.list))
                        .get("/data", (req, resp) => this._process(req, resp, this.data))
                        .get("/analyzeAd", (req, resp) => this._process(req, resp, this.analyzeAd))
                        .get("/analyzeCity", (req, resp) => this._process(req, resp, this.analyzeCity))
                        .get("/analyzePomoter", (req, resp) => this._process(req, resp, this.analyzePomoter));
        }


}

exports.DataController = DataController