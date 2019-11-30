package com.spider.controller;

import com.spider.pojo.dao.TaskCookieConfigDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskCookieConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务cookie配置")
@RestController
public class TaskCookieConfigController {

    @Autowired
    private TaskCookieConfigService service;

    @PostMapping("/TaskCookieConfig")
    @ApiOperation("新增任务cookie配置")
    public R add(@Validated @ModelAttribute TaskCookieConfigDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskCookieConfig/{id}")
    @ApiOperation("通过id删除任务cookie配置")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskCookieConfig/{id}")
    @ApiOperation("通过id更新任务cookie配置")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskCookieConfigDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskCookieConfig/{id}")
    @ApiOperation("通过id更新任务cookie配置")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
