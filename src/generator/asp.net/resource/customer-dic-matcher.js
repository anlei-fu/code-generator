exports.customerMatchers = {
        int: {
                pid: {

                },

                fid: {

                },
                Status: {
                        matcher: x => x.endsWith("Status"),
                        text: "@text",
                        value: "Value",
                        defaultText: "--请选择--",
                        type: "@type",
                        table: "@table",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        text: "@text",
                        defaultText: "--请选择--",
                        type: "@type",
                        table: "@table",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        text: "@text",
                        value: "Value",
                        type: "@type",
                        defaultText: "--请选择--",
                        table: "@table",
                },
                Has: {
                        matcher: x => x.startsWith("Has"),
                        text: "@text",
                        value: "Value",
                        type: "@type",
                        defaultText: "--请选择--",
                        table: "@table",
                },
                Is: {
                        matcher: x => x.startsWith("Has"),
                        text: "@text",
                        value: "Value",
                        type: "@type",
                        defaultText: "--请选择--",
                        table: "@table",
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