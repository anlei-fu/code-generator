package com.contractSign.service;



public interface @nameService {

    boolean addMealConfig(AddMealConfigReq req);
    boolean deleteMealConfigById(Integer id);
    boolean updateMealConfigById(Integer id, UpdateMealConfigByIdReq req);
    MealConfig getMealConfigById(Integer id);
    PageInfo<MealConfig> getMealConfigList(GetMealConfigListReq req);

}