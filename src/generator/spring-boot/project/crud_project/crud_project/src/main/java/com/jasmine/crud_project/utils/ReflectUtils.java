package com.jasmine.crud_project.utils;

import org.springframework.beans.BeanUtils;

import javax.validation.constraints.NotNull;
import java.beans.PropertyDescriptor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Objects;

public class ReflectUtils {

    public  static PropertyDescriptor[] getAllPropertyDescriptor(Class<?> clazz){
        return  BeanUtils.getPropertyDescriptors(clazz);
    }

    public  static Method getGetter(Class<?> clazz,String property){
        PropertyDescriptor descriptor= BeanUtils.getPropertyDescriptor(clazz, property);
        return descriptor.getReadMethod();
    }

    public  static Method getSetter(Class<?> clazz,String property){
        PropertyDescriptor descriptor= BeanUtils.getPropertyDescriptor(clazz, property);
        return descriptor.getWriteMethod();
    }

    public  static boolean hasGetter(Class<?> clazz,String property){
        return !Objects.isNull(getGetter(clazz,property));
    }

    public  static boolean hasSetter(Class<?> clazz,String property){
        return !Objects.isNull(getSetter(clazz,property));
    }

    public static<T> T instantiate(Class<T> targetClazz){
        T instance = BeanUtils.instantiateClass(targetClazz);
        return  instance;
    }

    public  static <T>  T instantiate(Class<T> targetClazz,Object source){
        T instance = BeanUtils.instantiateClass(targetClazz);
        BeanUtils.copyProperties(source, instance);
        return  instance;
    }

    public  static <T>  T instantiate(Class<T> targetClazz,Object source,String... ignoreProperties){
        T instance = BeanUtils.instantiateClass(targetClazz);
        BeanUtils.copyProperties(source, instance,ignoreProperties);
        return  instance;
    }



    public  static <T>  T instantiateWithSpecificProperties(Class<T> targetClazz,Object source,String... properties){
        T instance = BeanUtils.instantiateClass(targetClazz);
        for (String property:properties){
            copyProperty(instance,source,property);
        }

        return  instance;
    }

    public  static  void  setPropertiesToNull(@NotNull Object source,String... properties){
        for (String property : properties){
            setPropertyToNull(source, property);
        }
    }

    public static  void  setPropertyToNull(@NotNull Object source,@NotNull String property){
        if(Objects.isNull(source)){
            throw  new NullPointerException("source is null");
        }

        Method targetSetter =getSetter(source.getClass(), property);
        if(Objects.isNull(targetSetter)){
            throw  new RuntimeException(
                    String.format("no setter for property(%s) of class(%s)", property,source.getClass())
            );
        }

        try{
            targetSetter.invoke(source, new Object[]{null});
        }catch (IllegalAccessException | InvocationTargetException ex){
            ex.printStackTrace();
            throw  new RuntimeException(String.format(
                    "set property(%) of class(%s) to target class(%s) failed",
                    property,
                    source.getClass()
            ));
        }
    }

    public  static void  copyProperty(@NotNull Object target, @NotNull Object source, @NotNull String property){
        Method sourceGetter = getGetter(source.getClass(), property);
        if(Objects.isNull(sourceGetter)){
            throw  new RuntimeException(
                    String.format("no getter for property(%s) of class(%s)", property,source.getClass())
            );
        }

        Method targetSetter =getSetter(target.getClass(), property);
        if(Objects.isNull(targetSetter)){
            throw  new RuntimeException(
                    String.format("no setter for property(%s) of class(%s)", property,target.getClass())
            );
        }

        try{
             Object value = sourceGetter.invoke(source, new Object[] {});
             targetSetter.invoke(target, new Object[]{value});
        }catch (IllegalAccessException | InvocationTargetException ex){
            ex.printStackTrace();
            throw  new RuntimeException(String.format(
                    "copy property(%) from source class(%s) to target class(%s) failed",
                    property,
                    source.getClass(),
                    target.getClass()
            ));
        }
    }
}
