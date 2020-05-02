exports.customerMatchers = {
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
                        table: "MrSystemDictionary",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        text: "Name",
                        defaultText: "--请选择--",
                        type: "Type",
                        table: "MrSystemDictionary",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "MrSystemDictionary",
                },
                Has: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "MrSystemDictionary",
                },
                Is: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "MrSystemDictionary",
                },
                Need :{
                        matcher: x => x.startsWith("Need"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "MrSystemDictionary",
                },
                Permit:{
                        matcher: x => x.startsWith("Permit"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "MrSystemDictionary",
                },
                Support:{
                        matcher: x => x.startsWith("Support"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "MrSystemDictionary",
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
                                        table: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ProvinceNo: {
                        generator: x => {
                                return {
                                        table: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },

                ChannelNo: {
                        generator: x => {
                                return {
                                        table: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ProductNo: {
                        generator: x => {
                                return {
                                        table: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
        }
}