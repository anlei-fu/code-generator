package com.@project.controller;

import com.spider.pojo.dao.@nameDao;
import com.spider.pojo.resp.R;
import com.@project.service.@nameService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class @nameController {

    @Autowired
    private @nameService service;

    @PostMapping("/@name")
    @ApiOperation("新增@description")
    public R add(@Validated @ModelAttribute @nameDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/@name/{id}")
    @ApiOperation("通过id删除@description")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/@name/{id}")
    @ApiOperation("通过id更新@description")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute @nameDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/@name/{id}")
    @ApiOperation("通过id更新@description")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
