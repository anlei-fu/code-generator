exports.cutomerDics = {
        int: {
                pid: {

                },

                fid: {

                },
                Status: {
                        matcher: x => x.endsWith("Status"),
                        text: "Name",
                        value: "Value",
                        defaultText: "--请选择--",
                        type: "Type",
                        service: "SystemDictionary",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        text: "Name",
                        defaultText: "--请选择--",
                        type: "Type",
                        service: "SystemDictionary",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        service: "SystemDictionary",
                },
                Has: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        service: "SystemDictionary",
                },
                Is: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        service: "SystemDictionary",
                },
                AccountId: {
                        matcher: x => STR.includesAny(x, ["AccountId", "CompanyId", "FlowId", "StepId", "ProductId"]),
                        generator: x => {
                                return {
                                        service: x.replace("Id", ""),
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
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ProvinceNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },

                ChannelNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ProductNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
        }
}