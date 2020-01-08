public class UpdateThighTrackInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateThighTrackInfoByIdReq req;

    public UpdateThighTrackInfoByIdParams(Integer id, UpdateThighTrackInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Float getCurveRadius() {
        return req.getCurveRadius();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Float getGradeSectionLength() {
        return req.getGradeSectionLength();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public Integer getMaxGradient() {
        return req.getMaxGradient();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getSortNum() {
        return req.getSortNum();
    }

    public Integer getStationId() {
        return req.getStationId();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Float getThighTrackLength() {
        return req.getThighTrackLength();
    }

    public String getThighTrackNo() {
        return req.getThighTrackNo();
    }

    public Integer getThighTrackType() {
        return req.getThighTrackType();
    }

    public Integer getTieCategory() {
        return req.getTieCategory();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}