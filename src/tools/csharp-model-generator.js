const { SimpleRender } = require("./../generator/common/renders/SimplePatterRender");
const { STR } = require("./../libs/str");

const modelRnder =new SimpleRender({},"");
const fieldRender =new SimpleRender({},"");

const TypeMatchers = {
        int: {
                matcher: name => STR.endsWithAny(
                        name.toLowerCase(),
                        [
                          "status",
                          "state",
                          "type"
                        ]
                ),
                type:"int?"
        },
        int2:{
                matcher: name => STR.startsWithAny(
                        name.toLowerCase(),
                        [
                          "allow",
                          "support",
                          "permit",
                          "can",
                          "should",
                          "has",
                          "enable",
                          "is"
                        ]
                ),
                type:"int?"
        },
        int3:{
                matcher: name => STR.endsWithAny(
                        name.toLowerCase(),
                        [
                          "count",
                          "face",
                          "fee",
                          "sum",
                          "total",
                          "payerd",
                          "account",
                        ]
                ),
                type:"int?"
        },
        date:{
                matcher: name => STR.endsWithAny(
                        name.toLowerCase(),
                        [
                          "time",
                          "date",
                        ]
                ),
                type:"DateTime?"
        }

}

/**
 * 
 * @param {String} name 
 * @param {[String]} items 
 */
function main(name, items) {
        let fields=[];

        items.forEach(item=>{
                for(const key in TypeMatchers){
                        if(TypeMatchers[key].matcher(name)){
                                fields.push({
                                        field:item,
                                        type:TypeMatchers[key].type
                                })

                                return;
                        }
                }

                fields.push({
                        field:item,
                        type:"string"
                })
        });


}

/******************************************main************************************************** */

main(
        "",
        [
                
        ]
);