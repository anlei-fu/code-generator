public class UpdateWorshopBoundaryInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateWorshopBoundaryInfoByIdReq req;

    public UpdateWorshopBoundaryInfoByIdParams(Integer id, UpdateWorshopBoundaryInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Float getEndMiles() {
        return req.getEndMiles();
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

    public Integer getOperateStatus() {
        return req.getOperateStatus();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Float getStartMiles() {
        return req.getStartMiles();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getTrackCategory() {
        return req.getTrackCategory();
    }

    public Integer getTrackType() {
        return req.getTrackType();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}