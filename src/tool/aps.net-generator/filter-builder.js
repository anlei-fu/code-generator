class SelectBuilder{
     type(type){
             this._type=type;
             return this;
     }

     defaultText(def){
              this._defaultText=def;
              return this;
     }

     text(text){
        this._text=text;
        return this;
     }

     value(value){
        this.value=value;
        return this;
     }

}