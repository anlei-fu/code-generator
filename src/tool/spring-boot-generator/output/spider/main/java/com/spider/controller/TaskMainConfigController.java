package com.spider.controller;

import com.spider.pojo.dao.TaskMainConfigDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskMainConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务主配置")
@RestController
public class TaskMainConfigController {

    @Autowired
    private TaskMainConfigService service;

    @PostMapping("/TaskMainConfig")
    @ApiOperation("新增任务主配置")
    public R add(@Validated @ModelAttribute TaskMainConfigDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskMainConfig/{id}")
    @ApiOperation("通过id删除任务主配置")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskMainConfig/{id}")
    @ApiOperation("通过id更新任务主配置")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskMainConfigDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskMainConfig/{id}")
    @ApiOperation("通过id更新任务主配置")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
