class SpeedCaculator {

        constructor(){
                this._items=[];
        }

        add(item) {
                this._items.push(item);
        }

        get avarageSpeedOfAll() {
               this._items.reduce((previous,current)=> {return{elpased:previous.elapsed+current.elapsed}})/this._items.length;
        }

        get averageSpeedOfSuccess(){
             let succeed= this._items.filter(x=>x.success);
             if(succeed.length==0)
               return 0;

             succeed.reduce((previous,current)=> {return{elpased:previous.elapsed+current.elapsed}})/succeed.length;
        }

        get meanSpeedOfSuccess() {
                let succeed= this._items.filter(x=>x.success);
                succeed= succeed.sort((x,y)=>x.elapsed-y.elapsed);

                if(succeed.length==0)
                   return 0;

                if(succeed%2==0){
                        return (succeed[succeed.length/2-1].elapsed+succeed[succeed.length/2].elapsed)/2;
                }else{
                        return succeed[succeed.length/2].elapsed;
                }
        }

        get maxSpeedOfSuccess() {
                let succeed= this._items.filter(x=>x.success);
                succeed= succeed.sort((x,y)=>x.elapsed-y.elapsed);
                if(succeed.length==0)
                  return 0;

                return succeed[0];
        }
}

exports.SpeedCaculator = SpeedCaculator;