const fs =require("fs");


const util_template=`
package com.qianxingniwo.util;

import java.util.HashMap;
import java.util.Map;

public final class FlagsUtil {
@items
@methods


    private static boolean checkValue(Integer input, Map<Integer, String> map) {
        return input == null ? true : map.containsKey(input);
    }

    private static String getName(Integer input, Map<Integer, String> map) {
        return map.containsKey(input) ? map.get(input) : "未知";
    }

}
`;

const utilItemTemplate=`    
// @description
private static final Map<Integer, String> @name;

static {
    @name = new HashMap<>();
    @content
}
`;

const utilEnumItemTemplate=`
        @name.put(@value, "@text")`;

const method =`
public static boolean check@uname(Integer input) {
        return checkValue(input, @name);
    }

public static String get@unameName(Integer input) {
        return getName(input, @name);
    }
`;

const validatorAnnotationTemplate=`
package com.qianxingniwo.validate.flags.annotation;

import com.qianxingniwo.validate.flags.validator.@unameValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.METHOD})
@Constraint(validatedBy = @unameValidator.class)
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface @unameValidate {

    String message() default "参数不在枚举范围内";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
`;

let validatorTemplate= `
package com.qianxingniwo.validate.flags.validator;

import com.qianxingniwo.util.FlagsUtil;
import com.qianxingniwo.validate.flags.annotation.@unameValidate;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class BallastTypeValidator implements ConstraintValidator<@unameValidate, Integer> {

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext constraintValidatorContext) {
        return FlagsUtil.check@uname(value);
    }
}

`;


function main(){
       let items=[]; 

       if(!fs.existsSync("./output"))
       fs.mkdirSync("./output");
       if(!fs.existsSync("./output/annotation"))
       fs.mkdirSync("./output/annotation");
       if(!fs.existsSync("./output/validator"))
       fs.mkdirSync("./output/validator");

        fs.readFileSync("dic.csv").toString().split('\r\n').forEach((row,i)=>{
                if(i==0)
                  return;

                row=row.trim();
                if(row!=""){
                      let cells= row.split(",");
                      items.push({
                              name:cells[0],
                              type:cells[1],
                              text:cells[2],
                              value:cells[3]
                      })
                }
        });

        let map =new Map();
        items.forEach(item=>{
                   if(!map.has(item.type))
                      map.set(item.type,[]);

                   map.get(item.type).push(item);
        });

        let methodsStr="";
        let itemsStr="";
        map.forEach((value,type)=>{
               let content="";
               let description="";
               value.forEach(item=>{
                   content+=utilEnumItemTemplate.replace(/@name/g,type)
                                     .replace(/@value/g,item.value)
                                     .replace(/@text/g,item.text);
                  description=item.name;
               });

               itemsStr+=utilItemTemplate.replace(/@name/g,type)
                                 .replace(/@content/g,content)
                                 .replace("@description",description);

                methodsStr+=method.replace(/@uname/g,upperFirstLetter(type))
                                   .replace(/@name/g,type);

                writeAnnotation(type);
                writeValidator(type);
        });

        fs.writeFileSync(`./output/FlagsUtil.java`,
        util_template.replace(/@items/g,itemsStr)
            .replace(/@methods/g,methodsStr));

}

function writeAnnotation(type){
       let uname=upperFirstLetter(type);
       let content =validatorAnnotationTemplate.replace(/@uname/g,uname);
       fs.writeFileSync(`./output/annotation/${uname}Validate.java`,content);
}

function writeValidator(type){
        let uname=upperFirstLetter(type);
        let content =validatorTemplate.replace(/@uname/g,uname);
        fs.writeFileSync(`./output/validator/${uname}Validator.java`,content);
}

function upperFirstLetter(name){
        return name.substr(0,1).toUpperCase()+name.substr(1,name.length-1);
}

/************************************************************************************************************************************************************/
main();