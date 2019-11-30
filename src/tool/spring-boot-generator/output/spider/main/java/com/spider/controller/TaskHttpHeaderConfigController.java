package com.spider.controller;

import com.spider.pojo.dao.TaskHttpHeaderConfigDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskHttpHeaderConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务 header 配置")
@RestController
public class TaskHttpHeaderConfigController {

    @Autowired
    private TaskHttpHeaderConfigService service;

    @PostMapping("/TaskHttpHeaderConfig")
    @ApiOperation("新增任务 header 配置")
    public R add(@Validated @ModelAttribute TaskHttpHeaderConfigDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskHttpHeaderConfig/{id}")
    @ApiOperation("通过id删除任务 header 配置")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskHttpHeaderConfig/{id}")
    @ApiOperation("通过id更新任务 header 配置")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskHttpHeaderConfigDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskHttpHeaderConfig/{id}")
    @ApiOperation("通过id更新任务 header 配置")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
