package com.spider.controller;

import com.spider.pojo.dao.TaskSiteRelationDao;
import com.spider.pojo.resp.R;
import com.spider.service.TaskSiteRelationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "任务 网站关联")
@RestController
public class TaskSiteRelationController {

    @Autowired
    private TaskSiteRelationService service;

    @PostMapping("/TaskSiteRelation")
    @ApiOperation("新增任务 网站关联")
    public R add(@Validated @ModelAttribute TaskSiteRelationDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/TaskSiteRelation/{id}")
    @ApiOperation("通过id删除任务 网站关联")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/TaskSiteRelation/{id}")
    @ApiOperation("通过id更新任务 网站关联")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute TaskSiteRelationDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/TaskSiteRelation/{id}")
    @ApiOperation("通过id更新任务 网站关联")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
