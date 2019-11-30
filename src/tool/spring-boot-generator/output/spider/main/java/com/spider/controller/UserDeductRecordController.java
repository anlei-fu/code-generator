package com.spider.controller;

import com.spider.pojo.dao.UserDeductRecordDao;
import com.spider.pojo.resp.R;
import com.spider.service.UserDeductRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "用户消费记录")
@RestController
public class UserDeductRecordController {

    @Autowired
    private UserDeductRecordService service;

    @PostMapping("/UserDeductRecord")
    @ApiOperation("新增用户消费记录")
    public R add(@Validated @ModelAttribute UserDeductRecordDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/UserDeductRecord/{id}")
    @ApiOperation("通过id删除用户消费记录")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/UserDeductRecord/{id}")
    @ApiOperation("通过id更新用户消费记录")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute UserDeductRecordDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/UserDeductRecord/{id}")
    @ApiOperation("通过id更新用户消费记录")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
