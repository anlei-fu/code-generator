const { FILE } = require("./../libs/file");
const { OBJECT } = require("../libs/type");
const { NamingStrategy } = require("./../libs/naming-strategy");

class EnumBuilder {
        constructor () {
                this._index = 1;
                this._items = {};
        }

        /**
         * 
         * @param {Number} index 
         */
        setIndex(index) {
                this._index = index;
        }

        /**
         * 
         * @param {[String]} items 
         */
        items(items) {
                items.forEach(item => {
                        this._items[NamingStrategy.toHungary(item).toUpperCase()] = this._index;
                        this._index+=1;
                });
        }

        build() {
                return this._items;
        }
}

/**
 * 
 * @param {String} name 
 * @param {[String]} items 
 */
function main(name,items){
        let builder = new EnumBuilder();
        builder.items(
               items
        );
        let enums = builder.build();
        FILE.write(
                `C:/Users/Administrator/Desktop/Projects/code-generator/src/generator/spring-boot/admin-generator/web/constant/${name}.js`,
                OBJECT.export_(enums, name)
        );
}

// main("JoinType",
//   [
//           "leftJoin",
//           "innerJoin",
//           "join",
//           "fullJoin",
//           "rightJoin"
//         ]
// )

// main("ControlType",
//   [
//           "Input",
//           "Textarea",
//           "Password",
//           "Link",
//           "CheckBox",
//           "CheckBoxGroup",
//           "TimeRange",
//           "Time",
//           "Radio",
//           "RadioGroup",
//           "Select",
//           "MutipleSelect",
//           "FileUpLoader"
//         ]
// )

// main(
//         "ValidateType",
//         [
//                 "number",
//                 "require",
//                 "range",
//                 "intRange",
//                 "min",
//                 "max",
//                 "email",
//                 "phone",
//                 "telephone",
//                 "idNo",
//                 "url",
//                 "postCode",
//                 "scope"
//         ]
// )
// main("OrderByType",
//   ["Asc","Desc"]
// )




