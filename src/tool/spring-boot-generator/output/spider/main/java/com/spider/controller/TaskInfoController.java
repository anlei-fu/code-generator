package com.spider.controller;

import com.spider.pojo.dao.TaskInfoDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务信息")
@RestController
public class TaskInfoController {

    @Autowired
    private TaskInfoService service;

    @PostMapping("/TaskInfo")
    @ApiOperation("新增任务信息")
    public R add(@Validated @ModelAttribute TaskInfoDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskInfo/{id}")
    @ApiOperation("通过id删除任务信息")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskInfo/{id}")
    @ApiOperation("通过id更新任务信息")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskInfoDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskInfo/{id}")
    @ApiOperation("通过id更新任务信息")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
