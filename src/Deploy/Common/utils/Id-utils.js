
let id = 10000;

function newGuid() {

}

function nextId() {
        return ++id;
}

exports.idUtils = {
        newGuid,
        nextId
}


