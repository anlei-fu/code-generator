package com.spider.controller;

import com.spider.pojo.dao.UserWalletDao;
import com.spider.pojo.resp.R;
import com.spider.service.UserWalletService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "用户钱包")
@RestController
public class UserWalletController {

    @Autowired
    private UserWalletService service;

    @PostMapping("/UserWallet")
    @ApiOperation("新增用户钱包")
    public R add(@Validated @ModelAttribute UserWalletDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/UserWallet/{id}")
    @ApiOperation("通过id删除用户钱包")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/UserWallet/{id}")
    @ApiOperation("通过id更新用户钱包")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UserWalletDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/UserWallet/{id}")
    @ApiOperation("通过id更新用户钱包")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
