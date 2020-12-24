const { STR } = require("./../../../libs")

function renderRenderConfig(config) {
        let content = "";
        let columns = config.table.columns;
        let selects = config.selectConfig.selects;
        let map = new Map();
        selects.forEach(x => {
                map.set(x.name.toLowerCase(), x);
        });

        Object.keys(columns).forEach(key => {
                if (!map.has(key.toLowerCase())) {
                        content += `.NormalItem("${STR.upperFirstLetter(key)}","${columns[key].description}")\r\n`;
                } else {
                        let select = map.get(key.toLowerCase());
                        var text=STR.upperFirstLetter(select.text);
                        if(text=="Name"){
                                text=STR.upperFirstLetter(key)+text;
                        }

                        content += `.ValueNameItem("${STR.upperFirstLetter(key)}", "${text}", "${columns[key].description}")\r\n`;
                };
        });

        return ` private static readonly List<RenderConfigItem> _renderConfig =
    new RenderConfigsBuilder()
     ${content}
    .Build();`
}

exports.renderRenderConfig = renderRenderConfig;