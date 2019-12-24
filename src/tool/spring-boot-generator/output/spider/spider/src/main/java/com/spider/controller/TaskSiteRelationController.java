package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskSiteRelation;
import com.spider.pojo.req.AddTaskSiteRelationReq;
import com.spider.pojo.req.GetTaskSiteRelationListReq;
import com.spider.pojo.req.UpdateTaskSiteRelationByIdReq;
import com.spider.pojo.resp.R;
import com.spider.service.TaskSiteRelationService;
import com.spider.validate.annotation.Path;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@Api(tags = "@description")
@RestController
public class TaskSiteRelationController {

    @Autowired
    private TaskSiteRelationService taskSiteRelationService;

    @ApiOperation("")
    @PostMapping(path = "/taskSiteRelation")
    public R addTaskSiteRelation(@Validated @ModelAttribute AddTaskSiteRelationReq req) {
        return R.doResponse(taskSiteRelationService.addTaskSiteRelation(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/taskSiteRelation/{id}")
    public R deleteTaskSiteRelationById(@PathVariable Integer id) {
        return R.doResponse(taskSiteRelationService.deleteTaskSiteRelationById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/taskSiteRelation/{id}")
    public R updateTaskSiteRelationById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskSiteRelationByIdReq req) {
        return R.doResponse(taskSiteRelationService.updateTaskSiteRelationById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskSiteRelation/{id}")
    public R<TaskSiteRelation> getTaskSiteRelationById(@PathVariable Integer id) {
        return R.doResponse(taskSiteRelationService.getTaskSiteRelationById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/taskSiteRelation")
    public R<PageInfo<TaskSiteRelation>> getTaskSiteRelationList(@Validated @ModelAttribute GetTaskSiteRelationListReq req) {
        return R.doResponse(taskSiteRelationService.getTaskSiteRelationList(req));
    }

}
