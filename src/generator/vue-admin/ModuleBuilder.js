const ICONS={
        
}

class BaseBuilder{
    name(name){
       this.name=name;
       return this;
    }
    icon(icon){
       this.icon=icon;
       return this;
    }
    label(label){
       this.label=label;
       return this;
    }
}

class MenuBuilder extends BaseBuilder{
    path(path){
       this.path=path;
       return this;
    }
}

class MenuGroupBuilder extends BaseBuilder{

}

class ModuleBuilder extends BaseBuilder{
      
        
}