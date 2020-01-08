public class UpdateDamageRepositoryPositionByOrderDetailIdParams {

    @Getter
    @Setter
    private Integer orderDetailId;

    private UpdateDamageRepositoryPositionByOrderDetailIdReq req;

    public UpdateDamageRepositoryPositionByOrderDetailIdParams(Integer orderDetailId, UpdateDamageRepositoryPositionByOrderDetailIdReq req) {
        this.orderDetailId = orderDetailId;
        this.req = req;
    }

    public Integer getBridgeTunnel() {
        return req.getBridgeTunnel();
    }

    public Integer getDamagePosition() {
        return req.getDamagePosition();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Integer getHolePosition() {
        return req.getHolePosition();
    }

    public Integer getLineCategory() {
        return req.getLineCategory();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public String getLineName() {
        return req.getLineName();
    }

    public Float getMiles() {
        return req.getMiles();
    }

    public Integer getStationId() {
        return req.getStationId();
    }

    public Integer getStockExchange() {
        return req.getStockExchange();
    }

    public Integer getThighTrackId() {
        return req.getThighTrackId();
    }

}