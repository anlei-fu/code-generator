const { FlowBuilder } = require("./flow");
const { FILE } = require("../../libs/file")

function test() {
       let builder = new FlowBuilder();
      let text=  builder.start("start","start")
               .input("task","task")
               .build();
    FILE.write("1.md",text);

}
test();