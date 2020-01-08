public class UpdateTunnelInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateTunnelInfoByIdReq req;

    public UpdateTunnelInfoByIdParams(Integer id, UpdateTunnelInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public Float getEndMiles() {
        return req.getEndMiles();
    }

    public String getInputCode() {
        return req.getInputCode();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Float getLength() {
        return req.getLength();
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

    public Float getTrackDistance() {
        return req.getTrackDistance();
    }

    public Integer getTrackDivisionId() {
        return req.getTrackDivisionId();
    }

    public String getTunneName() {
        return req.getTunneName();
    }

    public String getTunneNo() {
        return req.getTunneNo();
    }

}