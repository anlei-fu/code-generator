package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskHttpHeaderConfig;
import com.spider.pojo.req.AddTaskHttpHeaderConfigReq;
import com.spider.pojo.req.GetTaskHttpHeaderConfigListReq;
import com.spider.pojo.req.UpdateTaskHttpHeaderConfigByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskHttpHeaderConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskHttpHeaderConfigController {

    @Autowired
    private TaskHttpHeaderConfigService taskHttpHeaderConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskHttpHeaderConfig")
    public R addTaskHttpHeaderConfig(@Validated @ModelAttribute AddTaskHttpHeaderConfigReq req) {
        return R.doResponse(taskHttpHeaderConfigService.addTaskHttpHeaderConfig(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskHttpHeaderConfig/{id}")
    public R deleteTaskHttpHeaderConfigById(@PathVariable Integer id) {
        return R.doResponse(taskHttpHeaderConfigService.deleteTaskHttpHeaderConfigById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskHttpHeaderConfig/{id}")
    public R updateTaskHttpHeaderConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskHttpHeaderConfigByIdReq req) {
        return R.doResponse(taskHttpHeaderConfigService.updateTaskHttpHeaderConfigById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskHttpHeaderConfig/{id}")
    public R<TaskHttpHeaderConfig> getTaskHttpHeaderConfigById(@PathVariable Integer id) {
        return R.doResponse(taskHttpHeaderConfigService.getTaskHttpHeaderConfigById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskHttpHeaderConfig")
    public R<PageInfo<TaskHttpHeaderConfig>> getTaskHttpHeaderConfigList(@Validated @ModelAttribute GetTaskHttpHeaderConfigListReq req) {
        return R.doResponse(taskHttpHeaderConfigService.getTaskHttpHeaderConfigList(req));
    }

}
