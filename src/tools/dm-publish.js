const { Publisher } = require("../generator/common/file-snapshot/publish");
const { STR } = require("../libs/str");

const DM = `E:/发布/分销系统`;
const ONE_DAY = 24 * 60 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;



function main(folder) {
     var arg = process.argv.splice(2);
     new Publisher(x => STR.includesAny(x,
          [
               ".pdb",
               "DataAccessFactory",
               "Memcached.dll",
               "LogicFactory.dll",
               "Cookie.dll",
               "Global.asax",
               "Web.config",
               "favicon.ico",
               "Settings.xml",
               "Lib4NetLog.xml",
               "ErrorCode.xml",
               "DataAccess.xml",
               "CacheConfig.xml",
               "BusinessLogic.xml"
          ]
     ))
          .removeFolder(folder, parseInt(arg[0]) * ONE_HOUR);
}

/***************************************main*************************************/
main(DM);