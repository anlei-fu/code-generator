/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-12 15:09:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 15:56:37
 */
const { RANDOM } = require("./../libs/random")

const DEFAULT_CANDIDATES={
        String:{
                company:{

                        match:x=>true,
                        cadidates:["microsoft","oracle","google","tencent","github","ebay"]
                },
                image:{
                        match:x=>true,
                        cadidates:["123.png","456.jpg","google.bmp","tencent.gif","github.png","ebay.jpg"]
                },
                file:{
                        match:x=>true,
                        cadidates:["c://123.png","f://456.jpg","g://google.bmp","p://tencent.gif","k://github.png","ftp://ebay.jpg"]
                },
                name:{
                        match:x=>true,
                        cadidates:["li shi yu","wang wei","liu ming","li hua","deep","newman"]
                },
                phone:{
                        match:x=>true,
                        cadidates:["13882475922","18009049263","15878956321","18102345622","15922236556","18455624611"]
                },
                email:{
                        match:x=>true,
                        cadidates:["13882475922@163.com","18009049263@gmial.com","15878956321@qq.com","18102345622@ms.com","15922236556@182.com","18455624611@10001.com"]
                },
                telephone:{
                        match:x=>true,
                        cadidates:["0831-3447882","0851-3437852","021-3447842","027-84457882","0531-5657882","023-18102666"]
                },
                postcode:{
                      
                },
                url:{
                        match:x=>true,
                        cadidates:["http://www.google.com","http://www.bbc.co.uk","http://www.qq.com","https://www.baidu.com","http://www.163.com","http://www.msdn.com"]
                },
                idNumber:{

                }
        },
        Integer:{
                count:{
                        match:x=>true,
                        cadidates:[12,0,1984,899,56589,6142]
                },
                amount:{
                        match:x=>true,
                        cadidates:[12,0,1984,899,56589,6142]
                },

        },
        Date:{
                createTime:{

                },
                updateTime:{

                }
        },
        Float:{
           price:{

           },

        },


}

class MockGenerate{
        constructor(){
                this._candidates=DEFAULT_CANDIDATES;
        }

        useCandidates(config){

        }

        disableCandidates(config){

        }

        getMockData(name,type){

        }
}

