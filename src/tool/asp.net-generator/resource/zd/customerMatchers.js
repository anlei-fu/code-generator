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
                        table: "SysDictionary",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        text: "Name",
                        defaultText: "--请选择--",
                        type: "Type",
                        table: "SysDictionary",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "SysDictionary",
                },
                Has: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "SysDictionary",
                },
                Is: {
                        matcher: x => x.startsWith("Has"),
                        text: "Name",
                        value: "Value",
                        type: "Type",
                        defaultText: "--请选择--",
                        table: "SysDictionary",
                },
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