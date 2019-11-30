/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-25 09:09:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 16:21:26
 */

/**
 * @member {[any]} resultQueue
 * @member {[any]} errorQueue
 * @member {number} downloaded
 * @member {number} failedCount
 * @member {number} excuting
 */
class TaskRecord{
        constructor(){
                this.resultQueue;
                this.errorQueue;
                this.downloaded;
                this.failedCount;
                this.excuting;
        }
}