const {FileSnapShot} =require("./snapshot");
const {zip} =require("./zip");
const {FILE} =require("./../../libs/file");

const QXFC={
  project:"fc",
  folder:"E:/guoweicode/非充发布",
};

const ZD={
  project:"zd",
  folder:"E:/guoweicode/线上发布/收银台后台",
};

const _18={
  project:"18",
  folder:"E:/guoweicode/线上发布/18充值后台",
};

const SETTLE={
  project:"fc",
  folder:"",
}

const TEST={
   project:"test",
   folder:"d:/test"
}

const PA={
  project:"鉴权系统",
  folder:"E:/guoweicode/线上发布/鉴权系统"
}

const ignores=[
  x=>x.endsWith(".pdb"),
]

function main(config){
  let snapshot=new FileSnapShot(config,ignores);
  //snapshot.makeSnapshot(config.folder);

 snapshot.extractChangedFiles(config.folder,`./output/${config.project}`);
  if(FILE.exists(`./output/${config.project}`))
     zip(`./output/${config.project}`,`./output/${config.project}.zip`);
}

/*********************************************main*****************************************************************/
main(_18);