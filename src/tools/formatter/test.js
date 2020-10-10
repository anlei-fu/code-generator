const {TableFormmatter} =require("./table-formatter");

let formatter =new TableFormmatter();

let data=[{
        name:"12",
        age:18

},{
     name:"56ssssddd55555555555s11111111111111111111111111111111111111111111111111ssssss",
     age:18,
     hj:["ddd","ddd"]
}]
  console.log(formatter.format(data));