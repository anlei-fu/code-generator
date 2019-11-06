/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 14:38:30
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 15:06:32
 */

const name="damageRepository";


function create(){
        return {
                orderDetailId: 20192030,
                orderNo: "OD-20191101171632-90",
                detectTime: "2019-10-13T09:52:42.000Z",
                detectStuff: 6,
                damageType: 1,
                damageLevel: 3,
                damageDetail: "十分严重",
                damageCode: "123456789",
                damageOld: 1,
                damageOldId: 1,
                receivingUnit: "成都段",
                receivingUser: "xyz",
                remark: "测试数据",
                receivingWorkareaInfo: 1,
                dealStatus: -1,
                importStatus: 3,
                checkEquipment: 1001,
                analysisResult: 2002,
                isDelete: 1,
                createTime: "2019-11-6",
                updateTime: "2019-11-6",
                operator: "2019-11-6",
                cancel: -1,
                auditStatus: 0,
                lastDetectTime: "2019-11-6",
                deleteTime: "2019-11-6"
        }
}

/**
 * 
 * @param {{createTime:{value,compare,connector,notIn}}} option 
 */
function query(option){

}

function insert(data){

}

function insertBatch(datas){

}

function remove(option){

}

function update(data){

}

function updateBtach(datas){

}

exports.damageRepository={
     create,
}
    