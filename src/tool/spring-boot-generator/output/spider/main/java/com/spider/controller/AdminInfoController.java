package com.spider.controller;

import com.spider.pojo.dao.AdminInfoDao;
import com.spider.pojo.resp.R;
import com.spider.service.AdminInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "管理员")
@RestController
public class AdminInfoController {

    @Autowired
    private AdminInfoService service;

    @PostMapping("/AdminInfo")
    @ApiOperation("新增管理员")
    public R add(@Validated @ModelAttribute AdminInfoDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/AdminInfo/{id}")
    @ApiOperation("通过id删除管理员")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/AdminInfo/{id}")
    @ApiOperation("通过id更新管理员")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute AdminInfoDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/AdminInfo/{id}")
    @ApiOperation("通过id更新管理员")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
