module.exports.report={
      async  getReportList(req){
            return request.get({url:"",param:{}});
        },
      
      async getById(id,req){
              return request.get({url:`/report/${id}`,param:req});
      }
}