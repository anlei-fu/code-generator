package com.spider.controller;

import com.spider.pojo.dao.UserChargeRecordDao;
import com.spider.pojo.resp.R;
import com.spider.service.UserChargeRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "用户充值记录")
@RestController
public class UserChargeRecordController {

    @Autowired
    private UserChargeRecordService service;

    @PostMapping("/UserChargeRecord")
    @ApiOperation("新增用户充值记录")
    public R add(@Validated @ModelAttribute UserChargeRecordDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/UserChargeRecord/{id}")
    @ApiOperation("通过id删除用户充值记录")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/UserChargeRecord/{id}")
    @ApiOperation("通过id更新用户充值记录")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UserChargeRecordDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/UserChargeRecord/{id}")
    @ApiOperation("通过id更新用户充值记录")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
