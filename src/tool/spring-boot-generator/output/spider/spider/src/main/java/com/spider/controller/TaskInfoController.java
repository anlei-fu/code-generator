package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskInfo;
import com.spider.pojo.req.AddTaskInfoReq;
import com.spider.pojo.req.GetTaskInfoListReq;
import com.spider.pojo.req.UpdateTaskInfoByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskInfoController {

    @Autowired
    private TaskInfoService taskInfoService;

    @ApiOperation("")
    @PostMapping(path = "/taskInfo")
    public R addTaskInfo(@Validated @ModelAttribute AddTaskInfoReq req) {
        return R.doResponse(taskInfoService.addTaskInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskInfo/{id}")
    public R deleteTaskInfoById(@PathVariable Integer id) {
        return R.doResponse(taskInfoService.deleteTaskInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskInfo/{id}")
    public R updateTaskInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskInfoByIdReq req) {
        return R.doResponse(taskInfoService.updateTaskInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskInfo/{id}")
    public R<TaskInfo> getTaskInfoById(@PathVariable Integer id) {
        return R.doResponse(taskInfoService.getTaskInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskInfo")
    public R<PageInfo<TaskInfo>> getTaskInfoList(@Validated @ModelAttribute GetTaskInfoListReq req) {
        return R.doResponse(taskInfoService.getTaskInfoList(req));
    }

}
