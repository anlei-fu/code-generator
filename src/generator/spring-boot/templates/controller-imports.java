package com.test.controller;

import com.github.pagehelper.PageInfo;
import com.test.pojo.entity.DamageRepositoryDevice;
import com.test.pojo.req.AddDamageRepositoryDeviceReq;
import com.test.pojo.req.GetDamageRepositoryDeviceListReq;
import com.test.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;
import com.test.pojo.resp.R;
import com.test.service.DamageRepositoryDeviceService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;