
package com.qianxingniwo.util;

import java.util.HashMap;
import java.util.Map;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
public  final class FlagsUtil {
    // enum_name
    private  static  final Map<Integer,String> enum_type;
    static {
        enum_type=new HashMap<>();
        enum_type.put(value,"text");
    }
        // 伤损程度
    private  static  final Map<Integer,String> defectsExtent;
    static {
        defectsExtent=new HashMap<>();
        defectsExtent.put(1,"↑△");
defectsExtent.put(2,"↓△");
defectsExtent.put(3,"←△→");
defectsExtent.put(4,"↑△△");
defectsExtent.put(5,"↓△△");
defectsExtent.put(6,"←△△→");
defectsExtent.put(7,"↑△△△");
defectsExtent.put(8,"↓△△△");
defectsExtent.put(9,"←△△△→");
defectsExtent.put(10,"折断");
    }
        // 处置状态
    private  static  final Map<Integer,String> dealStatus;
    static {
        dealStatus=new HashMap<>();
        dealStatus.put(1,"已处理");
dealStatus.put(-1,"未处理");
    }
        // 删除状态
    private  static  final Map<Integer,String> delStatus;
    static {
        delStatus=new HashMap<>();
        delStatus.put(1,"正常");
delStatus.put(-1,"已删除");
    }
        // 伤损位置
    private  static  final Map<Integer,String> damagePosition;
    static {
        damagePosition=new HashMap<>();
        damagePosition.put(1,"轨头");
damagePosition.put(2,"轨腰");
damagePosition.put(3,"轨底");
damagePosition.put(4,"螺孔");
    }
        // 轨型
    private  static  final Map<Integer,String> trackType;
    static {
        trackType=new HashMap<>();
        trackType.put(1,"P75");
trackType.put(4,"P43");
trackType.put(3,"P50");
trackType.put(2,"P60");
trackType.put(5,"其他");
    }
        // 轨枕
    private  static  final Map<Integer,String> tieCategory;
    static {
        tieCategory=new HashMap<>();
        tieCategory.put(1,"土枕");
tieCategory.put(2,"混疑土枕");
tieCategory.put(3,"其他");
    }
        // 线别
    private  static  final Map<Integer,String> lineCategory;
    static {
        lineCategory=new HashMap<>();
        lineCategory.put(1,"正线");
lineCategory.put(2,"到发线");
lineCategory.put(3,"其他站线");
    }
        // 伤损类型
    private  static  final Map<Integer,String> damageType;
    static {
        damageType=new HashMap<>();
        damageType.put(1,"横向裂纹");
damageType.put(2,"螺孔裂纹");
damageType.put(3,"轨端裂纹");
damageType.put(4,"剥离掉块");
damageType.put(5,"轨面擦伤");
damageType.put(6,"水平裂纹");
damageType.put(7,"其他伤损");
damageType.put(8,"灰斑");
damageType.put(9,"光斑");
damageType.put(10,"裂纹");
damageType.put(11,"气孔");
damageType.put(12,"夹渣");
damageType.put(13,"未焊合");
    }
        // 行别
    private  static  final Map<Integer,String> direction;
    static {
        direction=new HashMap<>();
        direction.put(1,"上行");
direction.put(2,"下行");
direction.put(3,"单线");
direction.put(4,"三线");
direction.put(5,"四线");
direction.put(6,"五线");
direction.put(7,"专用线");
    }
        // 设备名称
    private  static  final Map<Integer,String> deviceName;
    static {
        deviceName=new HashMap<>();
        deviceName.put(1,"钢轨");
deviceName.put(3,"道岔");
deviceName.put(2,"焊缝");
    }
        // 设备类型
    private  static  final Map<Integer,String> deviceType;
    static {
        deviceType=new HashMap<>();
        deviceType.put(101,"P75");
deviceType.put(102,"P60");
deviceType.put(103,"P50");
deviceType.put(104,"P43");
deviceType.put(201,"可动心岔");
deviceType.put(202,"合金钢岔");
deviceType.put(203,"高锰钢岔");
deviceType.put(301,"铝热焊");
deviceType.put(302,"气压焊");
deviceType.put(303,"厂闪光焊");
deviceType.put(304,"现闪光焊");
deviceType.put(305,"电弧焊");
    }
        // 焊缝类型
    private  static  final Map<Integer,String> weldingType;
    static {
        weldingType=new HashMap<>();
        weldingType.put(1,"铝热焊");
weldingType.put(2,"气压焊");
weldingType.put(3,"厂闪光焊");
weldingType.put(4,"现闪光焊");
weldingType.put(5,"电弧焊");
weldingType.put(1,"闪光焊");
weldingType.put(2,"气压焊");
weldingType.put(3,"铝热焊");
weldingType.put(4,"电弧焊");
    }
        // 辙叉构造
    private  static  final Map<Integer,String> frogStructure;
    static {
        frogStructure=new HashMap<>();
        frogStructure.put(1,"可动心岔");
frogStructure.put(2,"合金钢岔");
frogStructure.put(3,"高锰钢岔");
    }
        // 线路性质
    private  static  final Map<Integer,String> lineNature;
    static {
        lineNature=new HashMap<>();
        lineNature.put(1,"普速");
lineNature.put(2,"高铁");
    }
        // 线路等级
    private  static  final Map<Integer,String> lineGrade;
    static {
        lineGrade=new HashMap<>();
        lineGrade.put(1,"普速I");
lineGrade.put(2,"普速II");
lineGrade.put(3,"普速III");
lineGrade.put(4,"高铁250km/H");
lineGrade.put(5,"高铁300Km/H");
lineGrade.put(6,"高铁350Km/H");
lineGrade.put(7,"其他");
    }
        // 正线数目
    private  static  final Map<Integer,String> lineNum;
    static {
        lineNum=new HashMap<>();
        lineNum.put(1,"单线");
lineNum.put(2,"双线");
lineNum.put(3,"三线");
lineNum.put(4,"四线");
lineNum.put(5,"五线");
    }
        // 牵引类型
    private  static  final Map<Integer,String> tractionType;
    static {
        tractionType=new HashMap<>();
        tractionType.put(1,"电力");
tractionType.put(2,"内燃");
tractionType.put(3,"动力组");
tractionType.put(4,"蒸汽");
tractionType.put(5,"其他");
    }
        // 道床类型
    private  static  final Map<Integer,String> ballastType;
    static {
        ballastType=new HashMap<>();
        ballastType.put(1,"沥青道床");
ballastType.put(2,"碎石道床");
ballastType.put(3,"混泥土道床");
    }
        // 轨道类型
    private  static  final Map<Integer,String> trackType1;
    static {
        trackType1=new HashMap<>();
        trackType1.put(1,"有缝");
trackType1.put(2,"无缝");
    }
        // 运营类型
    private  static  final Map<Integer,String> operateType;
    static {
        operateType=new HashMap<>();
        operateType.put(1,"客运共线");
operateType.put(2,"客运专线");
operateType.put(3,"货运专线");
    }
        // 轨距类型
    private  static  final Map<Integer,String> gaugeType;
    static {
        gaugeType=new HashMap<>();
        gaugeType.put(1,"准轨");
gaugeType.put(2,"窄轨");
gaugeType.put(3,"宽轨");
    }
        // 干支线别
    private  static  final Map<Integer,String> lineBranches;
    static {
        lineBranches=new HashMap<>();
        lineBranches.put(1,"干线");
lineBranches.put(2,"支线");
    }
        // 新旧伤
    private  static  final Map<Integer,String> damageOld;
    static {
        damageOld=new HashMap<>();
        damageOld.put(1,"新伤");
damageOld.put(2,"旧伤");
    }
        // 长链标记
    private  static  final Map<Integer,String> longChain;
    static {
        longChain=new HashMap<>();
        longChain.put(1,"是");
longChain.put(2,"否");
    }
        // 股别
    private  static  final Map<Integer,String> stockExchange;
    static {
        stockExchange=new HashMap<>();
        stockExchange.put(1,"左股");
stockExchange.put(2,"右股");
    }
        // 处置方式
    private  static  final Map<Integer,String> dealResult;
    static {
        dealResult=new HashMap<>();
        dealResult.put(1,"加固");
    }
        // 桥隧道口
    private  static  final Map<Integer,String> bridgeTunnel;
    static {
        bridgeTunnel=new HashMap<>();
        bridgeTunnel.put(1,"桥");
bridgeTunnel.put(2,"隧");
    }
        // 股道类型
    private  static  final Map<Integer,String> thighTrackType;
    static {
        thighTrackType=new HashMap<>();
        thighTrackType.put(1,"正线");
thighTrackType.put(2,"到发线");
thighTrackType.put(3,"其他线");
thighTrackType.put(4,"牵出线");
thighTrackType.put(5,"货物线");
thighTrackType.put(6,"机车行");
thighTrackType.put(7,"车辆站修线");
thighTrackType.put(8,"驼峰禁溜线");
thighTrackType.put(9,"安全线");
thighTrackType.put(10,"避难线");
thighTrackType.put(11,"岔线");
thighTrackType.put(12,"调车线");
thighTrackType.put(13,"段管线");
thighTrackType.put(14,"专用线");
    }
        // 伤损程度2
    private  static  final Map<Integer,String> damageLevel;
    static {
        damageLevel=new HashMap<>();
        damageLevel.put(1,"重伤");
damageLevel.put(2,"轻发伤");
damageLevel.put(3,"轻伤");
    }
        // 车站类型
    private  static  final Map<Integer,String> stationType;
    static {
        stationType=new HashMap<>();
        stationType.put(1,"客运站");
stationType.put(2,"货运站");
stationType.put(3,"编组站");
stationType.put(4,"客货站");
stationType.put(5,"其他");
    }
        // 技术作业别
    private  static  final Map<Integer,String> jobType;
    static {
        jobType=new HashMap<>();
        jobType.put(1,"编组站");
jobType.put(2,"区段站");
jobType.put(3,"线路站");
jobType.put(4,"中间站");
    }
        // 车站等级
    private  static  final Map<Integer,String> stationGrade;
    static {
        stationGrade=new HashMap<>();
        stationGrade.put(1,"特等站");
stationGrade.put(2,"一等站");
stationGrade.put(3,"二等站");
stationGrade.put(4,"三等站");
stationGrade.put(5,"四等站");
stationGrade.put(6,"五等站");
stationGrade.put(7,"乘降所");
stationGrade.put(8,"线路所");
    }
        // 道岔股别
    private  static  final Map<Integer,String> turnoutThignCategory;
    static {
        turnoutThignCategory=new HashMap<>();
        turnoutThignCategory.put(1,"直股");
turnoutThignCategory.put(2,"曲股");
    }
        // 焊接方式
    private  static  final Map<Integer,String> weldingWay;
    static {
        weldingWay=new HashMap<>();
        weldingWay.put(1,"固定式(工厂焊)");
weldingWay.put(2,"移动式(现场焊)");
    }
        // 是否加固焊接
    private  static  final Map<Integer,String> reinforceWelding;
    static {
        reinforceWelding=new HashMap<>();
        reinforceWelding.put(1,"是");
reinforceWelding.put(2,"否");
    }
        // 道岔位置
    private  static  final Map<Integer,String> position;
    static {
        position=new HashMap<>();
        position.put(1,"正线");
position.put(2,"到发站");
position.put(3,"其他线");
position.put(4,"牵出线");
position.put(5,"货物线");
position.put(6,"车辆站");
position.put(7,"驼峰迂回线");
position.put(8,"驼峰禁溜线");
position.put(9,"安全线");
position.put(10,"避难线");
position.put(11,"岔线");
position.put(12,"调车线");
position.put(13,"段管线");
    }
        // 道岔种类
    private  static  final Map<Integer,String> turnoutKind;
    static {
        turnoutKind=new HashMap<>();
        turnoutKind.put(1,"双开道岔");
turnoutKind.put(2,"单开道岔");
turnoutKind.put(3,"复式交分道岔");
turnoutKind.put(4,"菱形交叉");
turnoutKind.put(5,"其他");
    }
        // 尖轨类型
    private  static  final Map<Integer,String> switchRailType;
    static {
        switchRailType=new HashMap<>();
        switchRailType.put(1,"普曲");
switchRailType.put(2,"普直");
switchRailType.put(3,"AT弹");
switchRailType.put(4,"AT直");
switchRailType.put(5,"AT");
switchRailType.put(6,"其他");
    }
        // 曲线方向
    private  static  final Map<Integer,String> cuvreDirection;
    static {
        cuvreDirection=new HashMap<>();
        cuvreDirection.put(1,"左");
cuvreDirection.put(2,"右");
    }
        // 时间段类型
    private  static  final Map<Integer,String> durationType;
    static {
        durationType=new HashMap<>();
        durationType.put(1,"当年");
durationType.put(2,"当月");
durationType.put(3,"当周");
    }
        // 期次类型
    private  static  final Map<Integer,String> lastOrCurrent;
    static {
        lastOrCurrent=new HashMap<>();
        lastOrCurrent.put(1,"本期");
lastOrCurrent.put(2,"上期");
    }
        // 排序类型（5.2）
    private  static  final Map<Integer,String> rankType;
    static {
        rankType=new HashMap<>();
        rankType.put(2,"按线路");
rankType.put(1,"按单位");
    }
    

public  static  boolean checkEnum_type(Integer input){
        return  checkValue(input,enum_type);
    }
    
    public static String getEnum_typeName(Integer input) {
        return  getName(input,enum_type);
    }

public  static  boolean checkDefectsExtent(Integer input){
        return  checkValue(input,defectsExtent);
    }
    
    public static String getDefectsExtentName(Integer input) {
        return  getName(input,defectsExtent);
    }

public  static  boolean checkDealStatus(Integer input){
        return  checkValue(input,dealStatus);
    }
    
    public static String getDealStatusName(Integer input) {
        return  getName(input,dealStatus);
    }

public  static  boolean checkDelStatus(Integer input){
        return  checkValue(input,delStatus);
    }
    
    public static String getDelStatusName(Integer input) {
        return  getName(input,delStatus);
    }

public  static  boolean checkDamagePosition(Integer input){
        return  checkValue(input,damagePosition);
    }
    
    public static String getDamagePositionName(Integer input) {
        return  getName(input,damagePosition);
    }

public  static  boolean checkTrackType(Integer input){
        return  checkValue(input,trackType);
    }
    
    public static String getTrackTypeName(Integer input) {
        return  getName(input,trackType);
    }

public  static  boolean checkTieCategory(Integer input){
        return  checkValue(input,tieCategory);
    }
    
    public static String getTieCategoryName(Integer input) {
        return  getName(input,tieCategory);
    }

public  static  boolean checkLineCategory(Integer input){
        return  checkValue(input,lineCategory);
    }
    
    public static String getLineCategoryName(Integer input) {
        return  getName(input,lineCategory);
    }

public  static  boolean checkDamageType(Integer input){
        return  checkValue(input,damageType);
    }
    
    public static String getDamageTypeName(Integer input) {
        return  getName(input,damageType);
    }

public  static  boolean checkDirection(Integer input){
        return  checkValue(input,direction);
    }
    
    public static String getDirectionName(Integer input) {
        return  getName(input,direction);
    }

public  static  boolean checkDeviceName(Integer input){
        return  checkValue(input,deviceName);
    }
    
    public static String getDeviceNameName(Integer input) {
        return  getName(input,deviceName);
    }

public  static  boolean checkDeviceType(Integer input){
        return  checkValue(input,deviceType);
    }
    
    public static String getDeviceTypeName(Integer input) {
        return  getName(input,deviceType);
    }

public  static  boolean checkWeldingType(Integer input){
        return  checkValue(input,weldingType);
    }
    
    public static String getWeldingTypeName(Integer input) {
        return  getName(input,weldingType);
    }

public  static  boolean checkFrogStructure(Integer input){
        return  checkValue(input,frogStructure);
    }
    
    public static String getFrogStructureName(Integer input) {
        return  getName(input,frogStructure);
    }

public  static  boolean checkLineNature(Integer input){
        return  checkValue(input,lineNature);
    }
    
    public static String getLineNatureName(Integer input) {
        return  getName(input,lineNature);
    }

public  static  boolean checkLineGrade(Integer input){
        return  checkValue(input,lineGrade);
    }
    
    public static String getLineGradeName(Integer input) {
        return  getName(input,lineGrade);
    }

public  static  boolean checkLineNum(Integer input){
        return  checkValue(input,lineNum);
    }
    
    public static String getLineNumName(Integer input) {
        return  getName(input,lineNum);
    }

public  static  boolean checkTractionType(Integer input){
        return  checkValue(input,tractionType);
    }
    
    public static String getTractionTypeName(Integer input) {
        return  getName(input,tractionType);
    }

public  static  boolean checkBallastType(Integer input){
        return  checkValue(input,ballastType);
    }
    
    public static String getBallastTypeName(Integer input) {
        return  getName(input,ballastType);
    }

public  static  boolean checkTrackType1(Integer input){
        return  checkValue(input,trackType1);
    }
    
    public static String getTrackType1Name(Integer input) {
        return  getName(input,trackType1);
    }

public  static  boolean checkOperateType(Integer input){
        return  checkValue(input,operateType);
    }
    
    public static String getOperateTypeName(Integer input) {
        return  getName(input,operateType);
    }

public  static  boolean checkGaugeType(Integer input){
        return  checkValue(input,gaugeType);
    }
    
    public static String getGaugeTypeName(Integer input) {
        return  getName(input,gaugeType);
    }

public  static  boolean checkLineBranches(Integer input){
        return  checkValue(input,lineBranches);
    }
    
    public static String getLineBranchesName(Integer input) {
        return  getName(input,lineBranches);
    }

public  static  boolean checkDamageOld(Integer input){
        return  checkValue(input,damageOld);
    }
    
    public static String getDamageOldName(Integer input) {
        return  getName(input,damageOld);
    }

public  static  boolean checkLongChain(Integer input){
        return  checkValue(input,longChain);
    }
    
    public static String getLongChainName(Integer input) {
        return  getName(input,longChain);
    }

public  static  boolean checkStockExchange(Integer input){
        return  checkValue(input,stockExchange);
    }
    
    public static String getStockExchangeName(Integer input) {
        return  getName(input,stockExchange);
    }

public  static  boolean checkDealResult(Integer input){
        return  checkValue(input,dealResult);
    }
    
    public static String getDealResultName(Integer input) {
        return  getName(input,dealResult);
    }

public  static  boolean checkBridgeTunnel(Integer input){
        return  checkValue(input,bridgeTunnel);
    }
    
    public static String getBridgeTunnelName(Integer input) {
        return  getName(input,bridgeTunnel);
    }

public  static  boolean checkThighTrackType(Integer input){
        return  checkValue(input,thighTrackType);
    }
    
    public static String getThighTrackTypeName(Integer input) {
        return  getName(input,thighTrackType);
    }

public  static  boolean checkDamageLevel(Integer input){
        return  checkValue(input,damageLevel);
    }
    
    public static String getDamageLevelName(Integer input) {
        return  getName(input,damageLevel);
    }

public  static  boolean checkStationType(Integer input){
        return  checkValue(input,stationType);
    }
    
    public static String getStationTypeName(Integer input) {
        return  getName(input,stationType);
    }

public  static  boolean checkJobType(Integer input){
        return  checkValue(input,jobType);
    }
    
    public static String getJobTypeName(Integer input) {
        return  getName(input,jobType);
    }

public  static  boolean checkStationGrade(Integer input){
        return  checkValue(input,stationGrade);
    }
    
    public static String getStationGradeName(Integer input) {
        return  getName(input,stationGrade);
    }

public  static  boolean checkTurnoutThignCategory(Integer input){
        return  checkValue(input,turnoutThignCategory);
    }
    
    public static String getTurnoutThignCategoryName(Integer input) {
        return  getName(input,turnoutThignCategory);
    }

public  static  boolean checkWeldingWay(Integer input){
        return  checkValue(input,weldingWay);
    }
    
    public static String getWeldingWayName(Integer input) {
        return  getName(input,weldingWay);
    }

public  static  boolean checkReinforceWelding(Integer input){
        return  checkValue(input,reinforceWelding);
    }
    
    public static String getReinforceWeldingName(Integer input) {
        return  getName(input,reinforceWelding);
    }

public  static  boolean checkPosition(Integer input){
        return  checkValue(input,position);
    }
    
    public static String getPositionName(Integer input) {
        return  getName(input,position);
    }

public  static  boolean checkTurnoutKind(Integer input){
        return  checkValue(input,turnoutKind);
    }
    
    public static String getTurnoutKindName(Integer input) {
        return  getName(input,turnoutKind);
    }

public  static  boolean checkSwitchRailType(Integer input){
        return  checkValue(input,switchRailType);
    }
    
    public static String getSwitchRailTypeName(Integer input) {
        return  getName(input,switchRailType);
    }

public  static  boolean checkCuvreDirection(Integer input){
        return  checkValue(input,cuvreDirection);
    }
    
    public static String getCuvreDirectionName(Integer input) {
        return  getName(input,cuvreDirection);
    }

public  static  boolean checkDurationType(Integer input){
        return  checkValue(input,durationType);
    }
    
    public static String getDurationTypeName(Integer input) {
        return  getName(input,durationType);
    }

public  static  boolean checkLastOrCurrent(Integer input){
        return  checkValue(input,lastOrCurrent);
    }
    
    public static String getLastOrCurrentName(Integer input) {
        return  getName(input,lastOrCurrent);
    }

public  static  boolean checkRankType(Integer input){
        return  checkValue(input,rankType);
    }
    
    public static String getRankTypeName(Integer input) {
        return  getName(input,rankType);
    }
    private static boolean checkValue(Integer input, Map<Integer, String> map) {
        return   input==null?true:map.containsKey(input);
    }

    private static String getName(Integer input, Map<Integer, String> map) {
        return map.containsKey(input) ? map.get(input) : "未知";
    }

}
