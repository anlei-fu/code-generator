package com.spider.controller;

import com.spider.pojo.dao.TaskScriptConfigDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskScriptConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务脚本配置")
@RestController
public class TaskScriptConfigController {

    @Autowired
    private TaskScriptConfigService service;

    @PostMapping("/TaskScriptConfig")
    @ApiOperation("新增任务脚本配置")
    public R add(@Validated @ModelAttribute TaskScriptConfigDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskScriptConfig/{id}")
    @ApiOperation("通过id删除任务脚本配置")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskScriptConfig/{id}")
    @ApiOperation("通过id更新任务脚本配置")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskScriptConfigDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskScriptConfig/{id}")
    @ApiOperation("通过id更新任务脚本配置")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
