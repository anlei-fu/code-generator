package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskMainConfig;
import com.spider.pojo.req.AddTaskMainConfigReq;
import com.spider.pojo.req.GetTaskMainConfigListReq;
import com.spider.pojo.req.UpdateTaskMainConfigByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskMainConfigService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskMainConfigController {

    @Autowired
    private TaskMainConfigService taskMainConfigService;

    @ApiOperation("")
    @PostMapping(path = "/taskMainConfig")
    public R addTaskMainConfig(@Validated @ModelAttribute AddTaskMainConfigReq req) {
        return R.doResponse(taskMainConfigService.addTaskMainConfig(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskMainConfig/{id}")
    public R deleteTaskMainConfigById(@PathVariable Integer id) {
        return R.doResponse(taskMainConfigService.deleteTaskMainConfigById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskMainConfig/{id}")
    public R updateTaskMainConfigById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskMainConfigByIdReq req) {
        return R.doResponse(taskMainConfigService.updateTaskMainConfigById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskMainConfig/{id}")
    public R<TaskMainConfig> getTaskMainConfigById(@PathVariable Integer id) {
        return R.doResponse(taskMainConfigService.getTaskMainConfigById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskMainConfig")
    public R<PageInfo<TaskMainConfig>> getTaskMainConfigList(@Validated @ModelAttribute GetTaskMainConfigListReq req) {
        return R.doResponse(taskMainConfigService.getTaskMainConfigList(req));
    }

}
