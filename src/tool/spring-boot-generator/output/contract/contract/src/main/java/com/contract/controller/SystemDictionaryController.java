package com.contract.controller;

import com.contract.pojo.entity.SystemDictionary;
import com.contract.pojo.req.AddSystemDictionaryReq;
import com.contract.pojo.req.GetSystemDictionaryListReq;
import com.contract.pojo.req.UpdateSystemDictionaryByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.SystemDictionaryService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class SystemDictionaryController {

    @Autowired
    private SystemDictionaryService systemDictionaryService;

    @ApiOperation("")
    @PostMapping(path = "/systemDictionary")
    public R addSystemDictionary(@Validated @ModelAttribute AddSystemDictionaryReq req) {
        return R.doResponse(systemDictionaryService.addSystemDictionary(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/systemDictionary/{id}")
    public R deleteSystemDictionaryById(@PathVariable Integer id) {
        return R.doResponse(systemDictionaryService.deleteSystemDictionaryById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/systemDictionary/{id}")
    public R updateSystemDictionaryById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSystemDictionaryByIdReq req) {
        return R.doResponse(systemDictionaryService.updateSystemDictionaryById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemDictionary/{id}")
    public R<SystemDictionary> getSystemDictionaryById(@PathVariable Integer id) {
        return R.doResponse(systemDictionaryService.getSystemDictionaryById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/systemDictionary")
    public R<PageInfo<SystemDictionary>> getSystemDictionaryList(@Validated @ModelAttribute GetSystemDictionaryListReq req) {
        return R.doResponse(systemDictionaryService.getSystemDictionaryList(req));
    }

}

