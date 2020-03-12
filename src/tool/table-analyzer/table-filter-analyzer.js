const MATCHER = {
        Integer: {
                Status: {
                        matcher: x => x.endsWith("Status"),
                        textField: "Name",
                        valueField: "Value",
                        placeHolder: "请选择",
                        table: "SystemDictionary",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        textField: "Name",
                        valueField: "Value",
                        placeHolder: "请选择",
                        table: "SystemDictionary",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        textField: "Name",
                        valueField: "Value",
                        placeHolder: "请选择",
                        table: "SystemDictionary",
                },
                Has: {
                        matcher: x => x.startsWith("Has"),
                        textField: "Name",
                        valueField: "Value",
                        type: "CheckBox",
                        table: "SystemDictionary",
                },
                Is: {
                        matcher: x => x.startsWith("Has"),
                        textField: "Name",
                        valueField: "Value",
                        type: "CheckBox",
                        table: "SystemDictionary",
                },
        }
}

const TEXT_AREA_MATCHER={
        String:{
                
        }
}