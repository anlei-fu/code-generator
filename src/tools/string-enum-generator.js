const { FILE } = require("./../libs/file");
const { OBJECT } = require("./../libs/utils");
const { NamingStrategy } = require("./../libs/naming-strategy");

/**
 * 
 * @param {[String]} items 
 */
function main(name, items) {
        let output = {};
        items.forEach(item => {
                output[NamingStrategy.toHungary(item).toUpperCase()] = item;
        });

        FILE.write(
                `./../../src/generator/spring-boot/constants/${name}.js`,
                OBJECT.export_(output, name)
        );
}

/**************************************************main*******************************************************/
main(
        "SqlOperationType",
        [
          "select",
          "insert",
          "delete",
          "update",
        ]
);