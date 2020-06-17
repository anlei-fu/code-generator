function formatObject(obj, name) {

}

function formatObjects(obj, ignoreNull = true) {
        let content = "";
        if (!obj)
                return content;

        Object.keys(obj).forEach(key => {
                if (ignoreNull && !obj[key])
                        return;

                content += formatSingleObject(key, obj[key]);
        });

        return content;
}

function desciptionAndContent() {

}

function formatError() {

}

function formatSingleObject(key, value) {
        let content = `${key} : `+"\r\n";
        try {
                if(typeof value =="string"){
                        content+=value+"\r\n";
                }else{
                        content += JSON.stringify(value, null,"  ");
                        content+="\r\n";
                }
        } catch{
                content += value.toString();
                content+="\r\n";
        }

        return content;
}

exports.formatUtils = {
        formatObject,
        desciptionAndContent,
        formatError,
        formatObjects,
        formatSingleObject
}