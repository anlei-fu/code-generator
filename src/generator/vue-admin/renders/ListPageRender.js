const { RenderBase } = require("./RenderBase");

/**
 * Filter config
 */
class FilterConfig {
        constructor () {
                /**
                 * Surppoted typies
                 * text|textarea|select|checkbox|checkBoxGroup|mutiple-select|radioGroup
                 */
                this.type = "";

                /**
                 * Related v-model query field
                 */
                this.field = "";

                /**
                 * Use in select and mutitle select as control label
                 */
                this.title = "";

                /**
                 * 
                 * Get from vuex, in type 'select'  and 'mutiple' select
                 */
                this.enum = "";

                /**
                 * mutiple control option candidates
                 */
                this.options = [Object];

                /**
                 * option's label field
                 */
                this.labelField = "";

                /**
                 * option's value field
                 */
                this.valueField = "";

                /**
                 * use in type 'timeRange' only
                 */
                this.startTime = "";

                /**
                 * use in type 'timeRange' only
                 */
                this.endTime = "";
        }
}

class FormatConfig {
        constructor () {
                /**
                 * Format type date|enum|currency and so on
                 * @see Formatter 
                 */
                this.type = "";

                /**
                 * Dose handle null value
                 */
                this.formatNull = false;

                /**
                 *  Additional config in diffirent format type such as
                 *  date 'yyyy-MM-dd' or enum 'status'
                 */
                this.pattern = "";
        }
}

class ColumnConfig {
        constructor () {
                /**
                 * Data field
                 */
                this.field = "";

                /**
                 * Data label
                 */
                this.title = "";

                /**
                 * Column render
                 */
                this.render = "";

                /**
                 * Column format config
                 */
                this.format = new FormatConfig();
        }
}


class ListPageModel {
        constructor () {
                /**
                 * Vue component name
                 */
                this.name = "";

                /**
                 * Page description
                 */
                this.description = "";

                /**
                 * Query field config
                 */
                this.filters = [FilterConfig];

                /**
                 *  With add operation
                 */
                this.canAdd = false;

                /**
                 *  With edit operation
                 */
                this.canEdit = false;

                /**
                 *  With delete  operation
                 */
                this.canDelete = false;

                /**
                 * With batch edit operation
                 */
                this.canBatchEdit = false;

                /**
                 * With batch delete operation
                 */
                this.canBatchDelete = false;

                /**
                 * With export excel operation
                 */
                this.canExportExcel = false;

                /**
                 * With import excel operation
                 */
                this.canImportExcel = false;

                /**
                 * Edit config
                 */
                this.editConfig = {};

                /**
                 *  Column config
                 */
                this.columns = [new ColumnConfig()];

                /**
                 * Is showing default
                 */
                this.showDefault = false;
        }
}

class ListPageRender extends RenderBase {
        constructor () {

        }

        render() {

        }
}