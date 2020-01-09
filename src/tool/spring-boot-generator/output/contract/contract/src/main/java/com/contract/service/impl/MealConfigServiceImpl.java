package com.contract.service.impl;

import com.contract.mapper.MealConfigMapper;
import com.contract.pojo.entity.MealConfig;
import com.contract.pojo.entity.MealConfig;
import com.contract.pojo.param.UpdateMealConfigByIdParams;
import com.contract.pojo.req.AddMealConfigReq;
import com.contract.pojo.req.GetMealConfigListReq;
import com.contract.pojo.req.UpdateMealConfigByIdReq;
import com.contract.service.MealConfigService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MealConfigServiceImpl implements MealConfigService {

    @Autowired
    private MealConfigMapper mealConfigMapper;

    @Override
    public boolean addMealConfig(AddMealConfigReq req) {
        return mealConfigMapper.addMealConfig(req) > 0;
    }

    @Override
    public boolean deleteMealConfigById(Integer id) {
        return mealConfigMapper.deleteMealConfigById(id) > 0;
    }

    @Override
    public boolean updateMealConfigById(Integer id, UpdateMealConfigByIdReq req) {
        UpdateMealConfigByIdParams params = new UpdateMealConfigByIdParams(id, req);
        return mealConfigMapper.updateMealConfigById(params) > 0;
    }

    @Override
    public MealConfig getMealConfigById(Integer id) {
        return mealConfigMapper.getMealConfigById(id);
    }

    @Override
    public PageInfo<MealConfig> getMealConfigList(GetMealConfigListReq req) {
        return PageHelperUtils.paging(req, () -> mealConfigMapper.getMealConfigList(req));
    }

}

