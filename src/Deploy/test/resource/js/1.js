exports.main=function(context,sth){
        console.log("you got me to say "+ sth);
        return context.factories.ExecuteResultFactory.jsSuccessed("1.js","111")
}