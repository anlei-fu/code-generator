class VueAdminGenerator{
        generate(configGroup){
            configGroup.items.forEach(configItem=>{
                   this.generateQueryPage(configItem);
                   this.generateEditPage(configItem);
                   
            });
        }

        generateQueryPage(){

        }

        generateEditPage(){

        }

        generateRoute(){

        }

        generateModule(){

        }
}