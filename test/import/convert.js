const {area} =require("./area");
const { FILE } = require("./../../src/libs/file");
const { OBJECT, ARRAY } = require("./../../src/libs/utils");

let output={}
let cities= ARRAY.groupBy(area,item=>item.cityNo);
cities.forEach((value,key)=>{ 
        //   let c=[];
        //  value.forEach(x=>{
        //    c.push({

        //    });
        // });
    output[key]=value;
})

// FILE.write("city_map.js",OBJECT.export_(output,"CITY_MAP"));

let provice=[];
Object.keys(output).forEach(item=>{
    provice.push(output[item][0]);
});

let output2 ={}
 provice= ARRAY.groupBy(provice,item=>item.provinceNo);
 provice.forEach((value,key)=>{
         
    output2[key]=value;
})
FILE.write("province_map.js",OBJECT.export_(output2,"PROVINCE_MAP"));
    