package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.SysSystemDictionary;
import com.railway.pojo.req.AddSysSystemDictionaryReq;
import com.railway.pojo.req.GetSysSystemDictionaryListReq;
import com.railway.pojo.req.UpdateSysSystemDictionaryByDicidReq;
import com.railway.pojo.resp.R;
import com.railway.service.SysSystemDictionaryService;
import com.railway.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class SysSystemDictionaryController {

    @Autowired
    private SysSystemDictionaryService sysSystemDictionaryService;

    @ApiOperation("")
    @PostMapping(path = "/sysSystemDictionary")
    public R addSysSystemDictionary(@Validated @ModelAttribute AddSysSystemDictionaryReq req) {
        return R.doResponse(sysSystemDictionaryService.addSysSystemDictionary(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/sysSystemDictionary/{dicid}")
    public R deleteSysSystemDictionaryByDicid(@PathVariable Integer dicid) {
        return R.doResponse(sysSystemDictionaryService.deleteSysSystemDictionaryByDicid(dicid));
    }

    @ApiOperation("")
    @PutMapping(path = "/sysSystemDictionary/{dicid}")
    public R updateSysSystemDictionaryByDicid(@PathVariable Integer dicid, @Validated @ModelAttribute UpdateSysSystemDictionaryByDicidReq req) {
        return R.doResponse(sysSystemDictionaryService.updateSysSystemDictionaryByDicid(dicid, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/sysSystemDictionary/{dicid}")
    public R<SysSystemDictionary> getSysSystemDictionaryByDicid(@PathVariable Integer dicid) {
        return R.doResponse(sysSystemDictionaryService.getSysSystemDictionaryByDicid(dicid));
    }

    @ApiOperation("")
    @GetMapping(path = "/sysSystemDictionary")
    public R<PageInfo<SysSystemDictionary>> getSysSystemDictionaryList(@Validated @ModelAttribute GetSysSystemDictionaryListReq req) {
        return R.doResponse(sysSystemDictionaryService.getSysSystemDictionaryList(req));
    }

}
