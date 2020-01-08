public class UpdateBridgeInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateBridgeInfoByIdReq req;

    public UpdateBridgeInfoByIdParams(Integer id, UpdateBridgeInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Float getBridgeLength() {
        return req.getBridgeLength();
    }

    public String getBridgeName() {
        return req.getBridgeName();
    }

    public String getBridgeNo() {
        return req.getBridgeNo();
    }

    public String getCrossHoleStyle() {
        return req.getCrossHoleStyle();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Float getEndMiles() {
        return req.getEndMiles();
    }

    public String getFlyoverCategory() {
        return req.getFlyoverCategory();
    }

    public Float getHoleLength() {
        return req.getHoleLength();
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

    public Float getMiddleMiles() {
        return req.getMiddleMiles();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getRemark() {
        return req.getRemark();
    }

    public Integer getSide() {
        return req.getSide();
    }

    public Float getStartMiles() {
        return req.getStartMiles();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

    public Integer getTrackDivisionId() {
        return req.getTrackDivisionId();
    }

    public Float getTrackWeigth() {
        return req.getTrackWeigth();
    }

}