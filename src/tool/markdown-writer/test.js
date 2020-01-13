const { TimeSequenceBuilder } = require("./timeSequence");
const { FILE } = require("../../libs/file")

function test() {
        let builder = new TimeSequenceBuilder();
        let c="client";
        let s="server";
        builder.titile("graphic 1")
                .participants([c,s])
                .sendSync(c, s, "hello")
                .sendSync(s, c, "hello")
                .noteLeft(c,"ok")
                .sendSelfAsync(c,"completed!")
                .loop("sync",c,c,"haha");

        FILE.write("1.md", builder.build());

}
test();