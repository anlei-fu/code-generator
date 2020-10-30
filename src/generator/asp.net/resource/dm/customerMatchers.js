exports.customerMatchers = {
        int: {
                pid: {

                },

                fid: {

                },
                PromoterId:{
                        matcher: x => x.toLowerCase().startsWith("PromoterId"),
                },
                Status: {
                        matcher: x => x.endsWith("Status"),
                        text: "Name",
                        value: "Value",
                        defaultText: "--请选择--",
                        type: "Type",
                        table: "DmSystemDictionary",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        text: "Name",
                        defaultText: "--请选择--",
                        type: "Type",
                        value: "Value",
                        table: "DmSystemDictionary",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "DmSystemDictionary",
                },
                Has: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "DmSystemDictionary",
                },
                Is: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "DmSystemDictionary",
                },
                AccountId: {
                        matcher: x => STR.includesAny(x, ["AccountId", "CompanyId", "FlowId", "StepId", "ProductId"]),
                        generator: x => {
                                return {
                                        table: x.replace("Id", ""),
                                        table: x.replace("Id", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("Id", "Name"),
                                        value: x,
                                }
                        }
                }
        },
        string: {
                CityNo: {
                        generator: x => {
                                return {
                                        table: "DmSystemCity",
                                        defaultText: "--请选择--",
                                        text: "CityName",
                                        value: "CityNo",
                                }
                        }
                },
                ProvinceNo: {
                        generator: x => {
                                return {
                                        table: "DmSystemProvince",
                                        defaultText: "--请选择--",
                                        text: "ProvinceName",
                                        value: "ProvinceNo",
                                }
                        }
                },

                ChannelNo: {
                        generator: x => {
                                return {
                                        table: "DmDownChannel",
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name").replace("up","").replace("down",""),
                                        value: "ChannelNo",
                                }
                        }
                },
                ProductNo: {
                        generator: x => {
                                return {
                                        table: "DmDownProduct",
                                        defaultText: "--请选择--",
                                        text: "ProductName",
                                        value: "ProductNo",
                                }
                        }
                },

                PlatNo: {
                        generator: x => {
                                return {
                                        table: "PutPlatInfo",
                                        defaultText: "--请选择--",
                                        text: "PlatName",
                                        value: "PlatNo",
                                }
                        }
                },
                AgentNo:{
                        generator: x => {
                                return {
                                        table: "PutAgentInfo",
                                        defaultText: "--请选择--",
                                        text: "AgentName",
                                        value: "AgentNo",
                                }
                        }
                },
                TermNo:{
                        generator: x => {
                                return {
                                        table: "DmTermInfo",
                                        defaultText: "--请选择--",
                                        text: "TermName",
                                        value: "TermNo",
                                }
                        }
                }
        }
}