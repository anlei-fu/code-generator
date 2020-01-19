const {XML_DOM}= require("./../src/libs/xml-dom");
const {FILE}= require("./../src/libs/file");

function  test(params) {
    let root= XML_DOM.load(FILE.read("F:/业务开发项目_研发一/千行收银台/syt_system_web/User Layer/ZDSystem.UserWeb/ZDSystem.UserWeb.csproj"));
    let items= XML_DOM.selectAll(root,x=>x.tagName=="ItemGroup");

    let el= root.createElement("Compile");
    el.setAttribute("Content","1233");

    items[2].appendChild(el);

    FILE.write("1.xml",XML_DOM.serialize(root));
   
    
}

test();