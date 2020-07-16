const { dmCity } = require("./dm_city");
const { dmProvince } = require("./dm_province");
const { FILE } = require("./../../src/libs/file");
const { OBJECT, ARRAY } = require("./../../src/libs/utils");
const { STR } = require("./../../src/libs/str")
const { newCity } = require("./newCity");
const { newProvince } = require("./newProvince");
const {area} =require("./area");

// let excludesCity = new Set([
//         "027_1",
//         "0397",
//         "0565",
//         "0879"
// ]);


// function findNewCity(newCity, item) {
//         if (excludesCity.has(item.cityNo))
//                 return;

//         if (item.cityName.includes("傈傈族")) {
//                 let t = 0;
//         }

//         let oldCityName = replaceWords(item.cityName);
//         let t = 0;
//         let ret = null;
//         for (const city of newCity) {
//                 let cityName = replaceWords(city.cityName);
//                 if (oldCityName == cityName) {
//                         if (replaceWords(item.provinceName) == replaceWords(city.provinceName)) {
//                                 ret = city;
//                                 t++;
//                         }

//                 }
//         }

//         if (t != 1)
//                 throw new Error("Not found");

//         return ret;
// }


// function findNewProvince(newProvince, item) {
//         let t = 0;
//         let ret = null;
//         let provinceName = replaceWords(item.provinceName);
//         for (const p of newProvince) {
//                 let pName = replaceWords(p.provinceName);
//                 if (provinceName == pName) {
//                         if (replaceWords(item.provinceName) == replaceWords(p.provinceName)) {
//                                 ret = p;
//                                 t++;
//                         }

//                 }
//         }

//         if (t != 1)
//                 throw new Error("Not found");

//         return ret;
// }


// function replaceWords(word) {
//         return STR.replace(word, {
//                 "自治州": "",
//                 "自治区": "",
//                 "地区": "",
//                 "特别行政区": "",
//                 "布依族": "",
//                 "苗族": "",
//                 "壮族": "",
//                 "维吾尔族": "",
//                 "藏族": "",
//                 "蒙古族": "",
//                 "朝鲜族": "",
//                 "彝族": "",
//                 "傣族": "",
//                 "羌族": "",
//                 "侗族": "",
//                 "土家族": "",
//                 "傈傈族": "",
//                 "傈僳族": "",
//                 "哈尼族": "",
//                 "景颇族": "",
//                 "州": "",
//                 "市": "",
//                 "省": "",
//                 "旗": "",
//                 "盟": "",

//         });
// }

// /**
//  * 
//  * @param {[]} colection 
//  * @param {*} key 
//  * @param {*} value 
//  */
// function findItem(collection, key, value) {

//         for (const item of collection) {
//                 if (item[key] == value)
//                         return item;
//         }

//         throw new Error("Not found");
// }


// let groups = ARRAY.groupBy(area, item => item.cityNo);



// let cities = [];
// let keys = Array.from(groups.keys());

// for (const key of keys) {
//         let c = groups.get(key);
//         cities.push(c[0]);
// }

// dmCity.forEach(item => {
//         item.provinceName = findItem(dmProvince, "provinceNo", item.provinceNo).provinceName;
//         let newCity = findNewCity(cities, item);
//         if (!newCity) {
//                 let k = 0;
//                 return;
//         }

//         newCity.oldNo = item.cityNo;

//         delete newCity.districtNo;
//         delete newCity.districtName;

//        // delete newCity.provinceName;
// });

//  groups = ARRAY.groupBy(cities, x => x.provinceNo);
// let provinces = [];
//  keys = Array.from(groups.keys());

// for (const key of keys) {
//         let c = groups.get(key);
//         provinces.push(c[0]);
// }

// dmProvince.forEach(p => {
//         if(p.provinceNo=="QG"||p.provinceNo=="HK"||p.provinceNo=="AM")
//            return;

//         let newProvince = findNewProvince(provinces, p);
//         newProvince.oldNo=p.provinceNo;
//         delete newProvince.cityNo;
//         delete newProvince.cityName;
// });

//  FILE.write("newProvince.js",OBJECT.export_(provinces,"newProvince"));

let sql = "";
// newCity.forEach(x=>{
//    sql+=`insert into LT5G_SYSTEM_CITY 
//    (city_code,city_name,province_code,city_no,api_code)
//    values('${x.cityNo}','${x.cityName}','${x.provinceNo}',${!x.oldNo?'NULL':"'"+x.oldNo+"'"},'${x.cityId}') ;\r\n`
// })
// newProvince.forEach(x=>{
// sql+=`insert into LT5G_SYSTEM_PROVINCE (province_code,province_name,province_no,api_code)
// values('${x.provinceNo}','${x.provinceName}',${!x.oldNo?'NULL':"'"+x.oldNo+"'"},'${x.provinceId}') ;\r\n`
// })

area.forEach(x=>{
        sql+=`insert into LT5G_SYSTEM_DISTRICT (district_code,district_name,city_code)
        values('${x.districtNo}','${x.districtName}','${x.cityNo}');
        `
})


FILE.write("district.sql", sql);






