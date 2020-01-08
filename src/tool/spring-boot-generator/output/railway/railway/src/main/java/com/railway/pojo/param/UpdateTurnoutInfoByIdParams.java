public class UpdateTurnoutInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateTurnoutInfoByIdReq req;

    public UpdateTurnoutInfoByIdParams(Integer id, UpdateTurnoutInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Date getCommissioningDate() {
        return req.getCommissioningDate();
    }

    public Integer getDirection() {
        return req.getDirection();
    }

    public String getFrogNo() {
        return req.getFrogNo();
    }

    public Integer getFrogStructure() {
        return req.getFrogStructure();
    }

    public Integer getHasMovablePointFrog() {
        return req.getHasMovablePointFrog();
    }

    public Integer getHasSwitchRail() {
        return req.getHasSwitchRail();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getLineId() {
        return req.getLineId();
    }

    public Float getMiles() {
        return req.getMiles();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getPosition() {
        return req.getPosition();
    }

    public String getRemark() {
        return req.getRemark();
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

    public Integer getSwitchRailType() {
        return req.getSwitchRailType();
    }

    public Integer getThighTrackId() {
        return req.getThighTrackId();
    }

    public Integer getTrackType() {
        return req.getTrackType();
    }

    public Integer getTurnoutKind() {
        return req.getTurnoutKind();
    }

    public Float getTurnoutLength() {
        return req.getTurnoutLength();
    }

    public String getTurnoutNo() {
        return req.getTurnoutNo();
    }

    public Integer getTurnoutType() {
        return req.getTurnoutType();
    }

    public Integer getWorkareaId() {
        return req.getWorkareaId();
    }

}