package com.spider.controller;

import com.spider.pojo.dao.DomainModelDao;
import com.spider.pojo.resp.R;
import com.spider.service.DomainModelService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "网站提取模型")
@RestController
public class DomainModelController {

    @Autowired
    private DomainModelService service;

    @PostMapping("/DomainModel")
    @ApiOperation("新增网站提取模型")
    public R add(@Validated @ModelAttribute DomainModelDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/DomainModel/{id}")
    @ApiOperation("通过id删除网站提取模型")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/DomainModel/{id}")
    @ApiOperation("通过id更新网站提取模型")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute DomainModelDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/DomainModel/{id}")
    @ApiOperation("通过id更新网站提取模型")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
