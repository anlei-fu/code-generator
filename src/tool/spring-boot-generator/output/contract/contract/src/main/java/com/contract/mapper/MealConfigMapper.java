package com.contract.mapper;

import com.contract.pojo.entity.MealConfig;
import com.contract.pojo.param.UpdateMealConfigByIdParams;
import com.contract.pojo.req.AddMealConfigReq;
import com.contract.pojo.req.GetMealConfigListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface MealConfigMapper {

    int addMealConfig(AddMealConfigReq req);

    int deleteMealConfigById(@Param("id") Integer id);

    int updateMealConfigById(UpdateMealConfigByIdParams params);

    MealConfig getMealConfigById(@Param("id") Integer id);

    List<MealConfig> getMealConfigList(GetMealConfigListReq req);

}
