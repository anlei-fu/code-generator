package com.spider.controller;

import com.spider.pojo.dao.TaskRunRecordDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskRunRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务运行记录")
@RestController
public class TaskRunRecordController {

    @Autowired
    private TaskRunRecordService service;

    @PostMapping("/TaskRunRecord")
    @ApiOperation("新增任务运行记录")
    public R add(@Validated @ModelAttribute TaskRunRecordDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskRunRecord/{id}")
    @ApiOperation("通过id删除任务运行记录")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskRunRecord/{id}")
    @ApiOperation("通过id更新任务运行记录")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskRunRecordDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskRunRecord/{id}")
    @ApiOperation("通过id更新任务运行记录")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
