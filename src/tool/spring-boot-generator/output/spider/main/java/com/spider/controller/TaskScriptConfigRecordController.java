package com.spider.controller;

import com.spider.pojo.dao.TaskScriptConfigRecordDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskScriptConfigRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务脚本更改配置")
@RestController
public class TaskScriptConfigRecordController {

    @Autowired
    private TaskScriptConfigRecordService service;

    @PostMapping("/TaskScriptConfigRecord")
    @ApiOperation("新增任务脚本更改配置")
    public R add(@Validated @ModelAttribute TaskScriptConfigRecordDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskScriptConfigRecord/{id}")
    @ApiOperation("通过id删除任务脚本更改配置")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskScriptConfigRecord/{id}")
    @ApiOperation("通过id更新任务脚本更改配置")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskScriptConfigRecordDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskScriptConfigRecord/{id}")
    @ApiOperation("通过id更新任务脚本更改配置")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
