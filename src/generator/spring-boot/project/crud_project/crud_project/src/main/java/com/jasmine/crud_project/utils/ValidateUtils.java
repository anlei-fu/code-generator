package com.jasmine.crud_project.utils;

import java.util.Objects;

public class ValidateUtils {
    public static void  requireNotNull(Object obj,String name){
        if(Objects.isNull(obj)){
            throw  new NullPointerException(String.format("%s is null", name));
        }
    }
}
