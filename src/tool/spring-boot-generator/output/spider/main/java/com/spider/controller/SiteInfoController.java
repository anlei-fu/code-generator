package com.spider.controller;

import com.spider.pojo.dao.SiteInfoDao;
import com.spider.pojo.resp.R;
import com.spider.service.SiteInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "网站信息")
@RestController
public class SiteInfoController {

    @Autowired
    private SiteInfoService service;

    @PostMapping("/SiteInfo")
    @ApiOperation("新增网站信息")
    public R add(@Validated @ModelAttribute SiteInfoDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/SiteInfo/{id}")
    @ApiOperation("通过id删除网站信息")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/SiteInfo/{id}")
    @ApiOperation("通过id更新网站信息")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute SiteInfoDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/SiteInfo/{id}")
    @ApiOperation("通过id更新网站信息")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
