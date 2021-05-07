const {Publisher} =require("./../generator/common/file-snapshot/publish");
const {STR} =require("./../libs/str");

const DM=`E:/发布/分销系统`;
const ONE_DAY = 24*60*60*1000;
const ONE_HOUR =60*60*1000;



function main(folder,day=5){
     new Publisher(x=>STR.includesAny(x,[".pdb","DataAccessFactory","Memcached.dll","LogicFactory.dll","Cookie.dll"]))
     .removeFolder(folder,day);
}

/***************************************main*************************************/
main(DM,ONE_DAY*2);