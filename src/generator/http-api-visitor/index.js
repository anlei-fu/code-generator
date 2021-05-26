const { ApiGenerator } = require("./ApiGenerator");
const { ControllerApiAnalyzer } = require("./ControllerApiAnalyzer");


function main(outputFolder){
        let generator = new ApiGenerator(outputFolder);
        let analyzer = new ControllerApiAnalyzer();
        let configs = analyzer.analyze("F:/业务开发项目_研发一/os-admin/admin-api/src/main/java/com/qxnw/os/admin/api/conntroller");
        configs.forEach(x=>{
               generator.generate(x);
        });
}

main();