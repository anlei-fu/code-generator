class IndexBuilder{
  constructor(){

  }

        batchOperation(){
             this._batchOperation=true;
             return this;
        }

        add(){
          this._add=true;
          return this;
        }

        edit(){
          this._edit=true;
          return this;
        }

        delete(){
          this._delete=true;
          return this;
        }
}

exports.IndexBuilder=IndexBuilder