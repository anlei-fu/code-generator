
const { OBJECT } = require("./../../../libs/utils");

function getRequestType(method) {

}

function getResponseType(method) {

}

function shouldValidate(method) {

}

function shouldNotNull() {

}

class Generator {

        constructor(config) {
                this.config = config;
        }

        generateController() {

                let method = "";

                OBJECT.forEach(this.config.method, (key, value) => {
                        let hearder = "";

                        if (value.description) {
                                header += `\r\n`;
                        } else {

                        }

                        if (value.method) {

                                if (value.path) {

                                } else {

                                }

                        } else {

                        }

                        let parameter = "";

                        if (shouldValidate(value)) {
                                parameter
                        }



                });
        }

        generateService() {

        }

        generateServiceImpl() {

        }

        generateRequests() {

        }

        generateResponse() {

        }

        generateTestMethods() {

        }
}

const METHOD = {
        GET: "",
        POST: "",
        DELETE: ""
};

const RESPOSETYPE = {
        BASERESPOSE: "BaseResponse",
        DATARESPONSE: "DataResPonse",
        PAGABLE: "PageInfo<?>"
};

const REQUES_TTYPE = {

};
const BIDING_METHODS = {

};
const MODE_ATTRIBUTE = " ";
const VALIDATED = "";
const NOTNULL = "";
const RANGE = "";
const API = "";
const API_OPERATE = "";
const API_MODEL = "";
const API_MODEL_PROPERTY = "";
const PAGE_OBJECT = "";
const JAVATYPE = {
        STRING: "String",
        INTERGER: "Integer",
        BOOLEAN: "Boolean",
        DATETIME: "Date"
};


let model = {
        name: "",
        description: "",
        items: [{ name, type, dexription }]
}

let req = {
        
        name: "",
        description: "",
        items: [{ name, type, dexription }]
}

let resp = {
        type,
        model,
        name

}

let parameter = {
        name: "",
        description: "",
        items: [{ name, type, dexription }]
}

let service = {
        name: "",
        mapper: { name, method },
        parameter: { type, name }

}

let mapper = {

}

let controller = {
        name: "",
        path: "",
        description: "",
        serverlet: []
}

let serverlet = {
        name: "",
        method: "",
        path: "",
        description: "",
        reqs: [],
        resp,
        service,
}




let config = {
        controllers: [
                {
                        name: "",
                        path: "",
                        description: "",
                        serverlet: [
                                +k+
                                {
                                        name: "",
                                        method: "",
                                        path: "",
                                        description: "",
                                        reqs: [
                                                {

                                                }
                                        ],
                                        resp: {
                                                name,
                                                type,
                                                model: [
                                                        {
                                                                name: "",
                                                                description: "",
                                                                items: [
                                                                        {
                                                                                name, type, dexription
                                                                        }
                                                                ]
                                                        }
                                                ]
                                        },
                                        service:{
                                                name:"",
                                                serviceName:"",
                                                parameter:{
                                                        name: "",
                                                        description: "",
                                                        items: [
                                                                {
                                                                        name, type, dexription
                                                                }
                                                        ]
                                                },
                                                mapper:{
                                                        name:"",
                                                        mapperMethod:"",
                                                        ret:{

                                                        }
                                                }

                                        }
                                }
                        ]
                }
        ]
}