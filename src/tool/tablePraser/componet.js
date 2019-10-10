/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 09:11:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 10:04:24
 */
var {defaulValue} =require("./../libs/utils")
class Component {
        constructor (name,[{para,def}]){
         
        }
        
}
class ParameterManager{

}

class Sequence {
        constructor({max,step,init}){
             this.step=defaulValue(step,1);
             this.max=defaulValue(max,1000000);
             this.current=defaulValue(init,0);
        }

        nextVal() {
                if(++current>this.max)
                   throw new `over max sequence limit (${this.max})`;
        }
}

class Parameters {
    constructor(name,def){
            this.defaulValue=def||"";
            this.name=name;
    }
}

class template {
        constructor(){
                

        }


}

