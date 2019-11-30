package com.spider.controller;

import com.spider.pojo.dao.UserInfoDao;
import com.spider.pojo.resp.R;
import com.spider.service.UserInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "用户信息")
@RestController
public class UserInfoController {

    @Autowired
    private UserInfoService service;

    @PostMapping("/UserInfo")
    @ApiOperation("新增用户信息")
    public R add(@Validated @ModelAttribute UserInfoDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/UserInfo/{id}")
    @ApiOperation("通过id删除用户信息")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/UserInfo/{id}")
    @ApiOperation("通过id更新用户信息")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UserInfoDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/UserInfo/{id}")
    @ApiOperation("通过id更新用户信息")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
