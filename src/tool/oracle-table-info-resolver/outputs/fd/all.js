const{OBJECT}=require("./../../../../libs/utils");
const all={};
let group;

// table tables
group=require("./table/all.js").all;
OBJECT.extends(all,group);

// fd tables
group=require("./fd/all.js").all;
OBJECT.extends(all,group);

// dk tables
group=require("./dk/all.js").all;
OBJECT.extends(all,group);

// czth tables
group=require("./czth/all.js").all;
OBJECT.extends(all,group);

// sup tables
group=require("./sup/all.js").all;
OBJECT.extends(all,group);

// rpt tables
group=require("./rpt/all.js").all;
OBJECT.extends(all,group);

// income tables
group=require("./income/all.js").all;
OBJECT.extends(all,group);

// yx tables
group=require("./yx/all.js").all;
OBJECT.extends(all,group);

// qy tables
group=require("./qy/all.js").all;
OBJECT.extends(all,group);

// new tables
group=require("./new/all.js").all;
OBJECT.extends(all,group);

// zreport tables
group=require("./zreport/all.js").all;
OBJECT.extends(all,group);

// advice tables
group=require("./advice/all.js").all;
OBJECT.extends(all,group);

// tbl tables
group=require("./tbl/all.js").all;
OBJECT.extends(all,group);

// courses tables
group=require("./courses/all.js").all;
OBJECT.extends(all,group);

// students tables
group=require("./students/all.js").all;
OBJECT.extends(all,group);

// scores tables
group=require("./scores/all.js").all;
OBJECT.extends(all,group);

// z tables
group=require("./z/all.js").all;
OBJECT.extends(all,group);

exports.all=all;