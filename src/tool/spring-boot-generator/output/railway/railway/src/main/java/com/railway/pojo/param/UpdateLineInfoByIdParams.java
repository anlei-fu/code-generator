public class UpdateLineInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateLineInfoByIdReq req;

    public UpdateLineInfoByIdParams(Integer id, UpdateLineInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getBallastType() {
        return req.getBallastType();
    }

    public Date getCommissioningDate() {
        return req.getCommissioningDate();
    }

    public Float getDistance() {
        return req.getDistance();
    }

    public String getFullName() {
        return req.getFullName();
    }

    public Integer getGaugeType() {
        return req.getGaugeType();
    }

    public Integer getGrade() {
        return req.getGrade();
    }

    public String getInputCode() {
        return req.getInputCode();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Float getLimitGrad() {
        return req.getLimitGrad();
    }

    public Integer getLineBranches() {
        return req.getLineBranches();
    }

    public String getLineCode() {
        return req.getLineCode();
    }

    public Integer getLineNum() {
        return req.getLineNum();
    }

    public Float getMinRadiusCurve() {
        return req.getMinRadiusCurve();
    }

    public Integer getNature() {
        return req.getNature();
    }

    public Integer getOperateType() {
        return req.getOperateType();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getShortName() {
        return req.getShortName();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getTrackType() {
        return req.getTrackType();
    }

    public Integer getTractionType() {
        return req.getTractionType();
    }

    public Float getYearVolume() {
        return req.getYearVolume();
    }

}