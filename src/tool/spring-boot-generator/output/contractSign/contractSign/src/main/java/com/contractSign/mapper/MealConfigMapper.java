package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addMealConfig(@Params("req") AddMealConfigReq req);
        int deleteMealConfigById(Integer id);
        int updateMealConfigById(@Params("id") Integer id, @Params("req") UpdateMealConfigByIdReq req);
        MealConfig getMealConfigById(Integer id);
        List<MealConfig> getMealConfigList(@Params("req") GetMealConfigListReq req);
       
}