public class UpdateStationLineByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateStationLineByIdReq req;

    public UpdateStationLineByIdParams(Integer id, UpdateStationLineByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Float getCentDistance() {
        return req.getCentDistance();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Float getEndDistance() {
        return req.getEndDistance();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getSortNum() {
        return req.getSortNum();
    }

    public Float getStartDistance() {
        return req.getStartDistance();
    }

    public Integer getStationId() {
        return req.getStationId();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}