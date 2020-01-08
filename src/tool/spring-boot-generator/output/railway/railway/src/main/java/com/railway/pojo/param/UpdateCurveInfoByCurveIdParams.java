public class UpdateCurveInfoByCurveIdParams {

    @Getter
    @Setter
    private Integer curveId;

    private UpdateCurveInfoByCurveIdReq req;

    public UpdateCurveInfoByCurveIdParams(Integer curveId, UpdateCurveInfoByCurveIdReq req) {
        this.curveId = curveId;
        this.req = req;
    }

    public Float getAverageSpeed() {
        return req.getAverageSpeed();
    }

    public Integer getCurveDirection() {
        return req.getCurveDirection();
    }

    public Float getCurveLength() {
        return req.getCurveLength();
    }

    public Float getCurveReadius() {
        return req.getCurveReadius();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Float getEndMiles() {
        return req.getEndMiles();
    }

    public Float getEndSlowLength() {
        return req.getEndSlowLength();
    }

    public Float getEndTangentLength() {
        return req.getEndTangentLength();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public Integer getLongChain() {
        return req.getLongChain();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Float getOverHeight() {
        return req.getOverHeight();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getSide() {
        return req.getSide();
    }

    public Float getSlopeRate() {
        return req.getSlopeRate();
    }

    public Float getStartMiles() {
        return req.getStartMiles();
    }

    public Float getStartSlowLength() {
        return req.getStartSlowLength();
    }

    public Float getStartTangentLength() {
        return req.getStartTangentLength();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Float getSteeringAngle() {
        return req.getSteeringAngle();
    }

    public Integer getTrackDisType() {
        return req.getTrackDisType();
    }

    public Float getTrackDisWide() {
        return req.getTrackDisWide();
    }

    public Integer getTrackDivisionId() {
        return req.getTrackDivisionId();
    }

}