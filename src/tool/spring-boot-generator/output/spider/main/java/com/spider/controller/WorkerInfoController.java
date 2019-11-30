package com.spider.controller;

import com.spider.pojo.dao.WorkerInfoDao;
import com.spider.pojo.resp.R;
import com.spider.service.WorkerInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "worker info")
@RestController
public class WorkerInfoController {

    @Autowired
    private WorkerInfoService service;

    @PostMapping("/WorkerInfo")
    @ApiOperation("新增worker info")
    public R add(@Validated @ModelAttribute WorkerInfoDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/WorkerInfo/{id}")
    @ApiOperation("通过id删除worker info")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/WorkerInfo/{id}")
    @ApiOperation("通过id更新worker info")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute WorkerInfoDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/WorkerInfo/{id}")
    @ApiOperation("通过id更新worker info")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
