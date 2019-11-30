package com.spider.controller;

import com.spider.pojo.dao.DomainBlockRecordDao;
import com.spider.pojo.resp.R;
import com.spider.service.DomainBlockRecordService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "屏蔽记录")
@RestController
public class DomainBlockRecordController {

    @Autowired
    private DomainBlockRecordService service;

    @PostMapping("/DomainBlockRecord")
    @ApiOperation("新增屏蔽记录")
    public R add(@Validated @ModelAttribute DomainBlockRecordDao dao) {
       return R.add( () -> service.add(dao));
    }

    @DeleteMapping("/DomainBlockRecord/{id}")
    @ApiOperation("通过id删除屏蔽记录")
    public R deleteById(@PathVariable Integer id) {
      return R.deleteById(id, () -> service.deleteById(id));
    }
  
    @PutMapping("/DomainBlockRecord/{id}")
    @ApiOperation("通过id更新屏蔽记录")
    public R updateById(@PathVariable Integer id, @Validated @ModelAttribute DomainBlockRecordDao dao) {
        return R.updateById(id, () -> service.updateById(id, dao));
    }

    @GetMapping("/DomainBlockRecord/{id}")
    @ApiOperation("通过id更新屏蔽记录")
    public R findById(@PathVariable Integer id) {
        return R.findById(id, () -> service.findById(id));
    }
}
