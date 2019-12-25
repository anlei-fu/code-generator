const {FILE}=require("./../../libs/file")
class Writer {
        constructor(project,name,prefix){
             this.project=project;
             this.name=name;
             this.prefix=prefix;
        }

        writeIAccess(content) {
            this.writeCore(`I${this.name}Access.cs`,content);
        }

        writeAccess(content) {
                this.writeCore(`${this.name}Access.cs`,content);
        }

        writeIHandler(content) {
                this.writeCore(`I${this.name}Handler.cs`,content);
        }

        writeHandler(content) {
                this.writeCore(`${this.name}Handler.cs`,content);
        }

        writeService(content) {
                this.writeCore(`${this.name}Service.cs`,content);
        }

        writeController(content) {
                this.writeCore(`${this.name}Controller.cs`,content);
        }

        writeListModel(content) {
                this.writeCore(`${this.name}ListModel.cs`,content);
        }

        writeViewModel(content) {
                this.writeCore(`${this.name}ViewModel.cs`,content);
        }

        writeItemModel(content) {
                this.writeCore(`${this.name}ItemModel.cs`,content);
        }

        writeIndex(content){
                this.writeCore(`Index.cshtml`,content);
        }

        writeEntity(content){
                this.writeCore(`${this.prefix}${this.name}.cs`,content);
        }

        writeEntityConfig(content){
                this.writeCore(`${this.name}.xml`,content);
        }

        writeItem(){
                this.writeCore(`Item.cshtml`,content);
        }

   
        writeCore(file,content){
            FILE.write(file,content);
        }

}

exports.Writer = Writer