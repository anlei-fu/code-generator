
class OutputConfig{

}


class ControllerConfig{
        constructor(){
                this.name;
                this.description;
                this.path;
        }
}

class ModeConfig{
        constructor(){
                this.withSwagger;
                this.withCommment;
        }
}

class ServiceConfig{
      constructor(){
              this.withMappers;
              this.methods;
      }
}

class MethodConfig{
        constructor(){
                this.name;
                this.returnType;
                this.mappers;
                this.service;
                this.method;
                this.path;
                this.description;
                this.transanction;
                this.transanctionType;
                this.pagable;

        }
}

class ParameterConfig{
       constructor(){
               this.name;
               this.parameterType;
               this.patheVarible,
               this.nullable;
               this.validate;
       }
}





class Genearator{
        constructor(){
                this.modelConfig;
        }
        generateModel(){

        }

        generateService(){

        }

        generateServiceMethod(){

        }

        genearteIService(){

        }

        generateIServiceMethod(){

        }

        genareMapper(){

        }

        generateMapperMethod(){

        }

        generateController(){

        }

        generateServerlet(){

        }

        genarateTest(){

        }

        generateTestMethod(){

        }



        
}