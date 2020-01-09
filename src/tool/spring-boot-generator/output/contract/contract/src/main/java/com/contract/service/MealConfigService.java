package com.contract.service;

import com.contract.pojo.entity.MealConfig;
import com.contract.pojo.req.AddMealConfigReq;
import com.contract.pojo.req.GetMealConfigListReq;
import com.contract.pojo.req.UpdateMealConfigByIdReq;
import com.github.pagehelper.PageInfo;

public interface MealConfigService {

    boolean addMealConfig(AddMealConfigReq req);

    boolean deleteMealConfigById(Integer id);

    boolean updateMealConfigById(Integer id, UpdateMealConfigByIdReq req);

    MealConfig getMealConfigById(Integer id);

    PageInfo<MealConfig> getMealConfigList(GetMealConfigListReq req);

}
