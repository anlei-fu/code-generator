/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 11:36:08
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-22 09:30:22
 */

exports.REGEX={
        isNumber:/^[0-9]+$/,
        isPhone:/d/,
        isChinese:/^[\u4e00-\u9fa5]{0,}$/,
        isAlphaNumber:/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/,
        isAlpha:/^[A-Za-z]+$/,
        isEmail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        isTelephone:/\d{3}-\d{8}|\d{4}-\d{7}/,
        isMobile:/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        isIdNumber:/^\d{15}|\d{18}$/,
}