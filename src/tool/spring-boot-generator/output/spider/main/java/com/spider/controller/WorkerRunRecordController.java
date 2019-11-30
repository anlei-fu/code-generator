package com.spider.controller;

import com.spider.pojo.dao.WorkerRunRecordDao;
import com.spider.pojo.resp.R;
import com.spider.service.WorkerRunRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "worker 运行记录")
@RestController
public class WorkerRunRecordController {

    @Autowired
    private WorkerRunRecordService service;

    @PostMapping("/WorkerRunRecord")
    @ApiOperation("新增worker 运行记录")
    public R add(@Validated @ModelAttribute WorkerRunRecordDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/WorkerRunRecord/{id}")
    @ApiOperation("通过id删除worker 运行记录")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/WorkerRunRecord/{id}")
    @ApiOperation("通过id更新worker 运行记录")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute WorkerRunRecordDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/WorkerRunRecord/{id}")
    @ApiOperation("通过id更新worker 运行记录")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
