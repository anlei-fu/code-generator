package com.jasmine.crud_project.pojo.resp;

import lombok.Data;

@Data
public class ProjectIdsResp {
    private Integer projectId;

    private Integer tableId;

    private Integer enumId;

    private Integer tableEnumId;

    private Integer checkboxEnumId;

    private Integer backendConfigId;

    private Integer frontendConfigId;

    private Integer analyzeConfigId;

    private Integer defaultValueConfigId;

    private Integer ruleConfigId;

    private Integer controlConfigId;
}
