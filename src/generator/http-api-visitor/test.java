package com.qxnw.os.admin.api.conntroller;

import com.qxnw.os.admin.api.service.AdvertiserService;
import com.qxnw.os.commons.annotation.OperateAnnotation;
import com.qxnw.os.commons.response.APIResponse;
import com.qxnw.os.dao.base.PageList;
import com.qxnw.os.model.database.AgentAdvertiserCostDO;
import com.qxnw.os.model.database.AgentAdvertiserDO;
import com.qxnw.os.model.request.*;
import com.qxnw.os.model.response.AgentAdvertiserConvertVO;
import com.qxnw.os.model.response.AgentAdvertiserFundVO;
import com.qxnw.os.model.response.AgentAdvertiserPageVO;
import com.qxnw.os.model.response.AgentAdvertiserVO;
import io.swagger.annotations.ApiOperation;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * 广告主管理
 *
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
@RestController
@RequestMapping(path="/advertiser",method="get")
public class AdvertiserManageController {
    @Resource
    private AdvertiserService advertiserService;

    // 代理商广告主 管理
    @ApiOperation(value = "添加 代理商广告主")
    @PostMapping("advertiser")
    public APIResponse addAgentAdvertiser(@RequestBody @Validated AgentAdvertiserCreateDTO dto) {
        boolean result = advertiserService.addAgentAdvertiser(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "更新 代理商广告主")
    @PutMapping("advertiser")
    @OperateAnnotation(daoBean = "agentAdvertiserDAO", daoKey = "advertiserUid")
    public APIResponse updateAgentAdvertiser(@RequestBody @Validated AgentAdvertiserUpdateDTO dto) {
        boolean result = advertiserService.updateAgentAdvertiser(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "删除 代理商广告主")
    @DeleteMapping(path = "advertiser/{advertiserUid}")
    @OperateAnnotation(daoBean = "agentAdvertiserDAO", daoKey = "id")
    public APIResponse deleteAgentAdvertiserByAdvertiserUid(@PathVariable Integer advertiserUid) {
        boolean result = advertiserService.deleteAgentAdvertiserByAdvertiserUid(advertiserUid);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 代理商广告主 分页列表")
    @GetMapping(path = "advertiser/page")
    public APIResponse<PageList<AgentAdvertiserPageVO>> getAgentAdvertiserPage(AgentAdvertiserPageDTO dto) {
        PageList<AgentAdvertiserVO> result = advertiserService.getAgentAdvertiserPage(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 所有广告主信息")
    @GetMapping(path = "advertiser/all")
    public APIResponse getAdvertiserAll() {
        return APIResponse.success(advertiserService.getAdvertiserAll());
    }

    // 广告主转化 管理
    @ApiOperation(value = "添加 广告主转化")
    @PostMapping("advertiser-convert")
    public APIResponse addAgentAdvertiserConvert(@RequestBody @Validated AgentAdvertiserConvertCreateDTO dto) {
        boolean result = advertiserService.addAgentAdvertiserConvert(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "更新 广告主转化")
    @PutMapping("advertiser-convert")
    @OperateAnnotation(daoBean = "agentAdvertiserConvertDAO", daoKey = "convertUid")
    public APIResponse updateAgentAdvertiserConvert(@RequestBody @Validated AgentAdvertiserConvertUpdateDTO dto) {
        boolean result = advertiserService.updateAgentAdvertiserConvert(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "删除 广告主转化")
    @DeleteMapping(path = "advertiser-convert/{advertiserId}")
    @OperateAnnotation(daoBean = "agentAdvertiserConvertDAO", daoKey = "id")
    public APIResponse deleteAgentAdvertiserConvertByAdvertiserId(@PathVariable Integer advertiserId) {
        boolean result = advertiserService.deleteAgentAdvertiserConvertByAdvertiserId(advertiserId);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 广告主转化 分页列表")
    @GetMapping(path = "advertiser-convert/page")
    public APIResponse<PageList<AgentAdvertiserConvertVO>> getAgentAdvertiserConvertPage(AgentAdvertiserConvertPageDTO dto) {
        PageList<AgentAdvertiserConvertVO> result = advertiserService.getAgentAdvertiserConvertPage(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 广告主转化 分页列表")
    @PostMapping(path = "advertiser-convert/activate")
    public APIResponse activateLink(@RequestBody ActivateDTO dto) throws UnsupportedEncodingException {
        return APIResponse.success(advertiserService.activateLink(dto));
    }

    @ApiOperation(value = "获取 代理商广告主消耗 分页列表")
    @GetMapping(path = "advertiser-cost/page")
    public APIResponse<PageList<AgentAdvertiserCostDO>> getAgentAdvertiserCostPage(AgentAdvertiserCostPageDTO dto) {
        PageList<AgentAdvertiserCostDO> result = advertiserService.getAgentAdvertiserCostPage(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 广告主资金流水 分页列表")
    @GetMapping(path = "advertiser-fund/list")
    public APIResponse<List<AgentAdvertiserFundVO>> getAgentAdvertiserFundList(AgentAdvertiserFundPageDTO dto) {
        List<AgentAdvertiserFundVO> result = advertiserService.getAgentAdvertiserFundList(dto);
        return APIResponse.success(result);
    }

    @ApiOperation(value = "获取 广告主资金流水 分页列表")
    @GetMapping(path = "advertiser/get-by-agent-no/{agentNo}")
    public APIResponse<List<AgentAdvertiserDO>> getAdvertiserByAgentNo(@PathVariable String agentNo) {
        List<AgentAdvertiserDO> result = advertiserService.getAdvertiserByAgentNo(agentNo);
        return APIResponse.success(result);
    }

}
