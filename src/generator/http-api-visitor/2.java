package com.qxnw.os.admin.api.conntroller;\r\n\r\nimport com.qxnw.os.admin.api.service.AdvertiserService;\r\nimport com.qxnw.os.commons.annotation.OperateAnnotation;\r\nimport com.qxnw.os.commons.response.APIResponse;\r\nimport com.qxnw.os.dao.base.PageList;\r\nimport com.qxnw.os.model.database.AgentAdvertiserCostDO;\r\nimport com.qxnw.os.model.database.AgentAdvertiserDO;\r\nimport com.qxnw.os.model.request.*;\r\nimport com.qxnw.os.model.response.AgentAdvertiserConvertVO;\r\nimport com.qxnw.os.model.response.Agent…tAdvertiserFundVO>result=advertiserService.getAgentAdvertiserFundList(dto);\r\n return APIResponse.success(result);\r\n}\r\n\r\n @ApiOperation(value="获取 广告主资金流水 分页列表")\r\n @GetMapping(path="advertiser/get-by-agent-no/{agentNo}")\r\n public APIResponse<List<AgentAdvertiserDO>>getAdvertiserByAgentNo(@PathVariable String agentNo){\r\n List<AgentAdvertiserDO>result=advertiserService.getAdvertiserByAgentNo(agentNo);\r\n return APIResponse.success(result);\r\n}\r\n\r\n}\r\n