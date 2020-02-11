/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-12 15:09:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 15:56:37
 */
const { RANDOM } = require("./../../libs/random");
const {OBJECT}=require("./../../libs/utils");
const {STR}=require("./../../libs/str");
const DEFAULT_CANDIDATES={
        String:{
                company:{

                        match:x=>STR.equalAny(x.toLowerCase(),["company","companyname"]),
                        cadidates:["microsoft","oracle","google","tencent","github","ebay"]
                },
                image:{
                        match:x=>STR.includesAny(x.toLowerCase(),["image","img"]),
                        cadidates:["123.png","456.jpg","google.bmp","tencent.gif","github.png","ebay.jpg"]
                },
                file:{
                        match:x=>STR.includesAny(x.toLowerCase(),["path","file"]),
                        cadidates:["c://123.png","f://456.jpg","g://google.bmp","p://tencent.gif","k://github.png","ftp://ebay.jpg"]
                },
                name:{
                        match:x=>STR.includesAny(x.toLowerCase(),["user","admin","operator","employee","username"]),
                        cadidates:["li shi yu","wang wei","liu ming","li hua","deep","newman"]
                },
                phone:{
                        match:x=>STR.includesAny(x.toLowerCase(),["phone","mobile"]),
                        cadidates:["13882475922","18009049263","15878956321","18102345622","15922236556","18455624611"]
                },
                email:{
                        match:x=>STR.includesAny(x.toLowerCase(),["email"]),
                        cadidates:["13882475922@163.com","18009049263@gmial.com","15878956321@qq.com","18102345622@ms.com","15922236556@182.com","18455624611@10001.com"]
                },
                telephone:{
                        match:x=>STR.includesAny(x.toLowerCase(),["tele"]),
                        cadidates:["0831-3447882","0851-3437852","021-3447842","027-84457882","0531-5657882","023-18102666"]
                },
                postcode:{
                      
                },
                url:{
                        match: x=>STR.includesAny(x.toLowerCase(),["url","web","domain"]),
                        cadidates:["http://www.google.com","http://www.bbc.co.uk","http://www.qq.com","https://www.baidu.com","http://www.163.com","http://www.msdn.com"]
                },
                 ip:{
                        match: x=>STR.includesAny(x.toLowerCase(),["ip","gateway"]),
                        cadidates:["http://www.google.com","http://www.bbc.co.uk","http://www.qq.com","https://www.baidu.com","http://www.163.com","http://www.msdn.com"]
                 },
                 address:{
                        match: x=>STR.includesAny(x.toLowerCase(),["addr","address"]),
                        cadidates:["","","http://www.qq.com","https://www.baidu.com","http://www.163.com","http://www.msdn.com"]
                 },
                 time:{
                        match: x=>STR.includesAny(x.toLowerCase(),["time","date"]),
                        cadidates:[new Date().toLocaleString(),"2008-12-06","2019-02-16"];
                 },
                _default:{
                        match:x=>true,
                        cadidates:["test data","mock","mock"]
                },
        },
        Integer:{
                count:{
                        match:x=>STR.includesAny(x.toLowerCase(),["count","amount","sum"]),
                        cadidates:[12,0,1984,899,56589,6142]
                },
               
                _default:{
                        match:x=>true,
                        cadidates:[0,90,20,30],
                }
        },
        Date:{
                time:{
                        match: x=>STR.includesAny(x.toLowerCase(),["time","date"]),
                        cadidates:[new Date().toLocaleString(),"2008-12-06","2019-02-16"]
                 },
                 _default:{
                        match: x=>true,
                        cadidates:[new Date().toLocaleString(),"2008-12-06","2019-02-16"]
                 }
        },
        Float:{
                count:{
                        match:x=>STR.includesAny(x.toLowerCase(),["count","amount","sum"]),
                        cadidates:[12.56,0.5,1984.36,899.569,56589,6142]
                },
                rate:{
                        match:x=>STR.includesAny(x.toLowerCase(),["rate","weight"]),
                        cadidates:[0.98,0.5,0.69,0.78,0.56,0.85]
                },
                profit:{
                        match:x=>STR.includesAny(x.toLowerCase(),["profit","price"]),
                        cadidates:[34.98,555.5,989.69,78.78,89.56,56.85]
                },
                _default:{
                        match:x=>true,
                        cadidates:[0,90,20,30],
                }

        },


}

const CANDIDATE_PICKER=(name,type,collection)=>{
       Object.keys(collection).forEach(x=>{
                if(collection[x].match(name)){
                    return collection[x].cadidates[RANDOM.nextVal(0,collection[x].cadidates.length)];
                }else{
                        throw new Error(`can not find candidate '${name}' of type '${type}'`);
                }
       });
}

class MockGenerator{
        constructor(){
                this._candidates=DEFAULT_CANDIDATES;
        }

        useCandidates(config){
               Object.keys(config).forEach(x=>{
                      if(!this._cadidates[x]){
                              this._candidates[x]=config[x];
                      }else{
                           OBJECT.extend(this._candidates[x],config[x]);
                      }

               });
        }

        disableCandidates(config){
                Object.keys(config).forEach(x=>{
                        if(!this._cadidates[x]){
                            return;
                        }else{
                            for(const key in config[x]){
                                    if(this._candidates[x][key]){
                                          delete  this._candidates[x][key]
                                    }
                            }
                        }
  
                 });
        }

        getMockData(name,type){
                if(!this._candidates[type])
                  throw new Error(`candidate type '${type}' not found`);

                return CANDIDATE_PICKER(name,type,this._candidates);
        }
}

exports.MockGenerator=MockGenerator;
