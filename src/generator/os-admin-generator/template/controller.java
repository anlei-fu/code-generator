package com.qxnw.os.admin.api.conntroller;

import com.qxnw.os.admin.api.service.@nameService;
import com.qxnw.os.commons.response.APIResponse;
import com.qxnw.os.dao.base.PageList;
import com.qxnw.os.model.database.@nameDO;
import com.qxnw.os.model.request.@namePageDTO;
import io.swagger.annotations.ApiOperation;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date: 2020-12-22
 * @Description:
 */
@RestController
public class @nameController {

    @Resource
    private @nameService @snameService;

    // @description 管理
    @ApiOperation(value = "添加 @description")
    @PostMapping("")
    public APIResponse add@name(@RequestBody @Validated @nameCreateDTO dto) {
        boolean result = service.add@name(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "删除 @description")
    @DeleteMapping(path = "/{@pkName}")
    public APIResponse delete@nameBy@pkUpperName(@PathVariable @pkType @pkName) {
        boolean result = service.delete@nameBy@pkUpperName(@pkName);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "更新 @description")
    @PutMapping("")
    public APIResponse update@name(@RequestBody @Validated @nameUpdateDTO dto) {
        boolean result = service.update@name(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 @description 分页列表")
    @GetMapping(path = "/page")
    public APIResponse<PageList<@nameDO>> get@namePage(@RequestParam @namePageDTO dto) {
        PageList<@nameDO> result = service.get@namePage(dto);
        return APIResponse.success(result);
    }
}
