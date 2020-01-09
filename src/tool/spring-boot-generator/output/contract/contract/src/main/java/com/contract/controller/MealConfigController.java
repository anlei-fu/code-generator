package com.contract.controller;

import com.contract.pojo.entity.MealConfig;
import com.contract.pojo.req.AddMealConfigReq;
import com.contract.pojo.req.GetMealConfigListReq;
import com.contract.pojo.req.UpdateMealConfigByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.MealConfigService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class MealConfigController {

    @Autowired
    private MealConfigService mealConfigService;

    @ApiOperation("")
    @PostMapping(path = "/mealConfig")
    public R addMealConfig(@Validated @ModelAttribute AddMealConfigReq req) {
        return R.doResponse(mealConfigService.addMealConfig(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/mealConfig/{id}")
    public R deleteMealConfigById(@PathVariable Integer id) {
        return R.doResponse(mealConfigService.deleteMealConfigById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/mealConfig/{id}")
    public R updateMealConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateMealConfigByIdReq req) {
        return R.doResponse(mealConfigService.updateMealConfigById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/mealConfig/{id}")
    public R<MealConfig> getMealConfigById(@PathVariable Integer id) {
        return R.doResponse(mealConfigService.getMealConfigById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/mealConfig")
    public R<PageInfo<MealConfig>> getMealConfigList(@Validated @ModelAttribute GetMealConfigListReq req) {
        return R.doResponse(mealConfigService.getMealConfigList(req));
    }

}

