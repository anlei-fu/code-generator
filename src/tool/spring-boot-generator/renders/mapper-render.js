const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _mapperItemRender = new SimpleRender({}, `${__dirname}/templates/mapper-item.java`);
const _mapperRender = new SimpleRender({}, `${__dirname}/templates/mapper.java`);

/**
 * 
 * @param {mapper} mapper 
 * @returns {String}
 */
function renderMapper(mapper) {
        let content = "";
        mapper.items.forEach(x => {
                content += _mapperItemRender.renderTemplate(x);
        });

        return _mapperRender.renderTemplate({ content });
}


/**
 * Get mapper interface item
 * 
 * @param {Config} config 
 * @returns {String}
 */
function getMapperItem(config) {
        return {
                name: config.id,
                mapperReturnType: this.getMapperReturnType(config),
                mapperParams: this.getMapperParams(config)
        }
}

function getMapperParams(config) {

        if (config.params.doCreate)
                return `${STR.upperFirstLetter(config.params.name)} params`;

        let mapperParams = "";
        if (config.reqs.length > 1) {
                config.reqs.forEach(x => {
                        mapperParams += `@Params("${x.name}") ${x.type} ${x.name}, `;
                });
                mapperParams = this._removeLastComa(mapperParams);
        } else {
                mapperParams = isSimpleJavaType(config.reqs[0].type)
                        ? `${config.reqs[0].type} ${config.reqs[0].name}`
                        : `@Params("${config.reqs[0].name}") ${config.reqs[0].type} ${config.reqs[0].name}`;
        }

        return mapperParams;
}

function getMapperReturnType(config) {

        if (config.type != "select")
                return "int";

        return config.resp.single
                ? config.resp.doCreate ? STR.upperFirstLetter(config.resp.type) : this.config.name
                : config.resp.doCreate ? `List<${STR.upperFirstLetter(config.resp.type)}>` : `List<${this.config.name}>`;
}


exports.renderMapper = renderMapper;