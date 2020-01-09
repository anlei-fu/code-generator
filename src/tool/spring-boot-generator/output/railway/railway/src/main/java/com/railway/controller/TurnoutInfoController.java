package com.railway.controller;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TurnoutInfo;
import com.railway.pojo.req.AddTurnoutInfoReq;
import com.railway.pojo.req.GetTurnoutInfoListReq;
import com.railway.pojo.req.UpdateTurnoutInfoByIdReq;
import com.railway.pojo.resp.R;
import com.railway.service.TurnoutInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Api(tags = "@description")
@RestController
public class TurnoutInfoController {

    @Autowired
    private TurnoutInfoService turnoutInfoService;

    @ApiOperation("")
    @PostMapping(path = "/turnoutInfo")
    public R addTurnoutInfo(@Validated @ModelAttribute AddTurnoutInfoReq req) {
        return R.doResponse(turnoutInfoService.addTurnoutInfo(req));
    }

    @ApiOperation("")
    @DeleteMapping(path = "/turnoutInfo/{id}")
    public R deleteTurnoutInfoById(@PathVariable Integer id) {
        return R.doResponse(turnoutInfoService.deleteTurnoutInfoById(id));
    }

    @ApiOperation("")
    @PutMapping(path = "/turnoutInfo/{id}")
    public R updateTurnoutInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTurnoutInfoByIdReq req) {
        return R.doResponse(turnoutInfoService.updateTurnoutInfoById(id, req));
    }

    @ApiOperation("")
    @GetMapping(path = "/turnoutInfo/{id}")
    public R<TurnoutInfo> getTurnoutInfoById(@PathVariable Integer id) {
        return R.doResponse(turnoutInfoService.getTurnoutInfoById(id));
    }

    @ApiOperation("")
    @GetMapping(path = "/turnoutInfo")
    public R<PageInfo<TurnoutInfo>> getTurnoutInfoList(@Validated @ModelAttribute GetTurnoutInfoListReq req) {
        return R.doResponse(turnoutInfoService.getTurnoutInfoList(req));
    }

}

