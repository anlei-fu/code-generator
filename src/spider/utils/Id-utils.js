if (!global.id)
        global.id = 10000;

function newGuid() {

}

function nextId() {
        return ++global.id;
}

exports.idUtils = {
        newGuid,
        nextId
}


