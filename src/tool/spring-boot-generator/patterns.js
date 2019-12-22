const SELECT_CANDIDATE_PATTERNS = [
        "price",
        "total",
        "discount",
]

const SELECT_EXCLUDES = [
        "remark",
        "message",
        "description",
        "msg",
        "detail",
        "name"
];

const RANGE_PATTERNS = [
        "price",
        "total",
        "discount",
]


const VALIDATE_PATTERNS = {
        "phone": {
                validate: "@Phone"
        },
        "mobile": {
                validate: "@Phone"
        },
        "telephone": {
                validate: "@Telephone"
        },
        "idCardNo": {
                validate: "@IdCardNo"
        },
        "type": {
                validate: "@Enum(@type)",
        },
        "status": {
                validate: "@Enum(@type)",
        },
        "email": {
                validate: "@Email"
        },
        "password": {
                validate: "@Password"
        },
        "url": {
                validate: "@Url"
        },
        "path": {
                validate: "@Path"
        },
        "file": {
                validate: "@Path"
        },
        "domain": {
                validate: "@Url"
        },
        "host": {
                validate: "@Url"
        },
        "ip": {
                validate: "@Ip"
        },
        "postCode": {
                validate: "@PostCode"
        },
        "age":{
                validate:""
        }
}


const UPDATE_DEFAULT_PATTERNS = {
        "updateTime": "new Date()",
}

module.exports={
        validate:VALIDATE_PATTERNS,
        updateDefaultPatterns:UPDATE_DEFAULT_PATTERNS,
        rangePattern:RANGE_PATTERNS,
        selectExcludesPattern:SELECT_EXCLUDES,
        selectCandidatePatterns:SELECT_CANDIDATE_PATTERNS
}