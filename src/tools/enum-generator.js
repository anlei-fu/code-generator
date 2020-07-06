const { FILE } = require("./../libs/file");
const { OBJECT } = require("./../libs/utils");
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

let name = "SqlDataType";
let builder = new EnumBuilder();
builder.items(
        [
              "varChar",
              "text",
              "smallInt",
              "tinyInt",
              "int",
              "time_stamp"
        ]
);

let enums = builder.build();

FILE.write(
        `./../../src/generator/db-generator/constants/${name}.js`,
        OBJECT.export_(enums, name)
);