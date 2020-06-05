var o2 = {
        name: 'o2',
        getName: function () {
                        return this.name;
        },
        getName2:()=>{ return this.name;}
}

console.log(o2.getName())	//window
console.log(o2.getName2(o2));

var obj1 = {
        birth: 1990,
        getAge: function (year) {   
            let fn=function(y){
                return y - this.birth; // this指向window或undefined
            };  
            return fn(year); 
        }
    };
    
    var obj2 = {
        birth: 1990,
        getAge: function (year) {
            var fn = (y) => y - this.birth; // this.birth为1990
            return fn(year);
        }
    };


  console.log(obj1.getAge(2020));
  console.log(obj2.getAge(2020));

  class ObA{
          constructor(){
                  this.name="a";
          }

         
  }