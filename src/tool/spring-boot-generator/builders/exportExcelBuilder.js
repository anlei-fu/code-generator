class ExportExcelBuilder{
        constructor(){
           this._items=[];
        }

        item(name,width,lable){
           this._items.push({name,width,name});
           return this;
        }

        build(){
                return this._items;
        }
}