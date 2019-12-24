package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.req.AddTaskScriptConfigReq;
import com.spider.pojo.req.GetTaskScriptConfigListReq;
import com.spider.pojo.req.UpdateTaskScriptConfigByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskScriptConfigService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskScriptConfigController {

    @Autowired
    private TaskScriptConfigService taskScriptConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskScriptConfig")
    public R addTaskScriptConfig(@Validated @ModelAttribute AddTaskScriptConfigReq req) {
        return R.doResponse(taskScriptConfigService.addTaskScriptConfig(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskScriptConfig/{id}")
    public R deleteTaskScriptConfigById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigService.deleteTaskScriptConfigById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskScriptConfig/{id}")
    public R updateTaskScriptConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskScriptConfigByIdReq req) {
        return R.doResponse(taskScriptConfigService.updateTaskScriptConfigById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfig/{id}")
    public R<TaskScriptConfig> getTaskScriptConfigById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigService.getTaskScriptConfigById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfig")
    public R<PageInfo<TaskScriptConfig>> getTaskScriptConfigList(@Validated @ModelAttribute GetTaskScriptConfigListReq req) {
        return R.doResponse(taskScriptConfigService.getTaskScriptConfigList(req));
    }

}
