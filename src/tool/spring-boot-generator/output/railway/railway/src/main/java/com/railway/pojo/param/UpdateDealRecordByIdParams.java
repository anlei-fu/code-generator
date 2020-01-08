public class UpdateDealRecordByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDealRecordByIdReq req;

    public UpdateDealRecordByIdParams(Integer id, UpdateDealRecordByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getCmdNo() {
        return req.getCmdNo();
    }

    public String getDealRemark() {
        return req.getDealRemark();
    }

    public Integer getDealResult() {
        return req.getDealResult();
    }

    public Date getDealTime() {
        return req.getDealTime();
    }

    public Integer getDeleteAuditStatus() {
        return req.getDeleteAuditStatus();
    }

    public Date getDeleteTime() {
        return req.getDeleteTime();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getOrderDetailId() {
        return req.getOrderDetailId();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

    public Integer getWorkshopInfoId() {
        return req.getWorkshopInfoId();
    }

}