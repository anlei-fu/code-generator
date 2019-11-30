package com.spider.controller;

import com.spider.pojo.dao.DomainInfoDao;
import com.spider.pojo.resp.R;
import com.spider.service.DomainInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "domain信息")
@RestController
public class DomainInfoController {

    @Autowired
    private DomainInfoService service;

    @PostMapping("/DomainInfo")
    @ApiOperation("新增domain信息")
    public R add(@Validated @ModelAttribute DomainInfoDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/DomainInfo/{id}")
    @ApiOperation("通过id删除domain信息")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/DomainInfo/{id}")
    @ApiOperation("通过id更新domain信息")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute DomainInfoDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/DomainInfo/{id}")
    @ApiOperation("通过id更新domain信息")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
