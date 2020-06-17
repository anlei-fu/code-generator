
const { FILE } = require("./../../../../libs/file");
const { DIR } = require("./../../../../libs/dir");
const { ProjectMerger } = require("./../../merge");



let name = "@name";
let root = "@root";

let entityFolder = `${root}/common Layer/@project.Entity/Entity`;
let iaccessFolder = `${root}/common Layer/@project.Interfaces/DataAccess`;
let accessFolder = `${root}/Data Layer/@project.DBAccess`;
let ihandler = `${root}/common Layer/@project.Interfaces/Logic`;
let handler = `${root}/Logic Layer/@project.Logic`;
let serviceFolder = `${root}/Service Layer/@project.UserService`;
let model = `${root}/Service Layer/@project.Model`;
let controllerFolder = `${root}/User Layer/@project.UserWeb/Controllers`;
let viewFolder = `${root}/User Layer/@project.UserWeb/Views`;
let configFolder = `${root}/User Layer/@project.UserWeb/Config/EConfig`;


function copy(source, target) {
  if (!FILE.exists(source))
    return;

  FILE.copy(source, target);
}


copy(`./M${name}.cs`, `${entityFolder}/M${name}.cs`);
copy(`./I${name}Access.cs`, `${iaccessFolder}/I${name}Access.cs`);
copy(`./${name}Access.cs`, `${accessFolder}/${name}Access.cs`);
copy(`./I${name}Handler.cs`, `${ihandler}/I${name}Handler.cs`);
copy(`./${name}Handler.cs`, `${handler}/${name}Handler.cs`);
copy(`./${name}Service.cs`, `${serviceFolder}/${name}Service.cs`);
copy(`./${name}Controller.cs`, `${controllerFolder}/${name}Controller.cs`);
copy(`./${name}.xml`, `${configFolder}/${name}.xml`);
copy(`./${name}ItemModel.cs`, `${model}/${name}ItemModel.cs`);
copy(`./${name}ListModel.cs`, `${model}/${name}ListModel.cs`);
copy(`./${name}ViewModel.cs`, `${model}/${name}ViewModel.cs`);

DIR.create(`${viewFolder}/${name}`);

copy(`./Index.cshtml`, `${viewFolder}/${name}/Index.cshtml`);
copy(`./Item.cshtml`, `${viewFolder}/${name}/Item.cshtml`);
copy(`./ImportExcel.cshtml`, `${viewFolder}/${name}/ImportExcel.cshtml`);

let merger= new ProjectMerger("@root","@name","@project")
merger.merge();
