package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.entity.TaskScriptConfigRecord;
import com.spider.pojo.req.AddTaskScriptConfigRecordReq;
import com.spider.pojo.req.GetTaskScriptConfigRecordListReq;
import com.spider.pojo.req.UpdateTaskScriptConfigRecordByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskScriptConfigRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskScriptConfigRecordController {

    @Autowired
    private TaskScriptConfigRecordService taskScriptConfigRecordService;

    @ApiOperation("")
    @PostMapping(path = "/taskScriptConfigRecord")
    public R addTaskScriptConfigRecord(@Validated @ModelAttribute AddTaskScriptConfigRecordReq req) {
        return R.doResponse(taskScriptConfigRecordService.addTaskScriptConfigRecord(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskScriptConfigRecord/{id}")
    public R deleteTaskScriptConfigRecordById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigRecordService.deleteTaskScriptConfigRecordById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskScriptConfigRecord/{id}")
    public R updateTaskScriptConfigRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskScriptConfigRecordByIdReq req) {
        return R.doResponse(taskScriptConfigRecordService.updateTaskScriptConfigRecordById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfigRecord/{id}")
    public R<TaskScriptConfigRecord> getTaskScriptConfigRecordById(@PathVariable Integer id) {
        return R.doResponse(taskScriptConfigRecordService.getTaskScriptConfigRecordById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskScriptConfigRecord")
    public R<PageInfo<TaskScriptConfigRecord>> getTaskScriptConfigRecordList(@Validated @ModelAttribute GetTaskScriptConfigRecordListReq req) {
        return R.doResponse(taskScriptConfigRecordService.getTaskScriptConfigRecordList(req));
    }

}
