package com.contract.controller;

import com.contract.pojo.entity.NotaryChannel;
import com.contract.pojo.req.AddNotaryChannelReq;
import com.contract.pojo.req.GetNotaryChannelListReq;
import com.contract.pojo.req.UpdateNotaryChannelByIdReq;
import com.contract.pojo.resp.R;
import com.contract.service.NotaryChannelService;
import com.github.pagehelper.PageInfo;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class NotaryChannelController {

    @Autowired
    private NotaryChannelService notaryChannelService;

    @ApiOperation("")
    @PostMapping(path = "/notaryChannel")
    public R addNotaryChannel(@Validated @ModelAttribute AddNotaryChannelReq req) {
        return R.doResponse(notaryChannelService.addNotaryChannel(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/notaryChannel/{id}")
    public R deleteNotaryChannelById(@PathVariable Integer id) {
        return R.doResponse(notaryChannelService.deleteNotaryChannelById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/notaryChannel/{id}")
    public R updateNotaryChannelById(@PathVariable Integer id, @Validated @ModelAttribute UpdateNotaryChannelByIdReq req) {
        return R.doResponse(notaryChannelService.updateNotaryChannelById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/notaryChannel/{id}")
    public R<NotaryChannel> getNotaryChannelById(@PathVariable Integer id) {
        return R.doResponse(notaryChannelService.getNotaryChannelById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/notaryChannel")
    public R<PageInfo<NotaryChannel>> getNotaryChannelList(@Validated @ModelAttribute GetNotaryChannelListReq req) {
        return R.doResponse(notaryChannelService.getNotaryChannelList(req));
    }

}

