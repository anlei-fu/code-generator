
const {STR}=require("../libs/str");
/**
 * 
 */
class Cell {
        constructor(value,color,max){
                this.value=value;
                this.max=max;
                this.color=color;
        }
        output(){
          this.value+=STR.repeat(" ",this.max-this.value.length);
          console.log(this.value[this.color]);
        }
}

exports.Cell=Cell;