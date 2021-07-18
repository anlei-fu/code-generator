package com.jasmine.crud.enum;

/**
 * Table info 
 *
 * @Version v1.0
 * @Author fal
 * @Date 2021-06-11
 * @Copyright ©jasmine crud project
 */
public enum Sex {

        /**
         * 
         * 
         * id
         */
         id(1),

        /**
         * 
         * 
         * id
         */
         id(1);

    private final int value;

    private Sex(int value) {
        this.value = value;
    }

    public Sex valueOf(int value) {
        switch (value) { 
                case 1:
                     return Sex.id;
                case 1:
                     return Sex.id;
                default:
                     return null;
        }
    }
}