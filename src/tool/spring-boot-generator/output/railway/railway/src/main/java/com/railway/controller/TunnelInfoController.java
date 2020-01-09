package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TunnelInfo;
import com.railway.pojo.req.AddTunnelInfoReq;
import com.railway.pojo.req.GetTunnelInfoListReq;
import com.railway.pojo.req.UpdateTunnelInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.TunnelInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class TunnelInfoController {

    @Autowired
    private TunnelInfoService tunnelInfoService;

    @ApiOperation("")
    @PostMapping(path = "/tunnelInfo")
    public R addTunnelInfo(@Validated @ModelAttribute AddTunnelInfoReq req) {
        return R.doResponse(tunnelInfoService.addTunnelInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/tunnelInfo/{id}")
    public R deleteTunnelInfoById(@PathVariable Integer id) {
        return R.doResponse(tunnelInfoService.deleteTunnelInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/tunnelInfo/{id}")
    public R updateTunnelInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTunnelInfoByIdReq req) {
        return R.doResponse(tunnelInfoService.updateTunnelInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/tunnelInfo/{id}")
    public R<TunnelInfo> getTunnelInfoById(@PathVariable Integer id) {
        return R.doResponse(tunnelInfoService.getTunnelInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/tunnelInfo")
    public R<PageInfo<TunnelInfo>> getTunnelInfoList(@Validated @ModelAttribute GetTunnelInfoListReq req) {
        return R.doResponse(tunnelInfoService.getTunnelInfoList(req));
    }

}

