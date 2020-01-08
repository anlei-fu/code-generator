public class UpdateWorkshopInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateWorkshopInfoByIdReq req;

    public UpdateWorkshopInfoByIdParams(Integer id, UpdateWorkshopInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getFullName() {
        return req.getFullName();
    }

    public String getInputCode() {
        return req.getInputCode();
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

    public String getShortName() {
        return req.getShortName();
    }

    public Integer getTrackDivisionId() {
        return req.getTrackDivisionId();
    }

    public Integer getWorkshopType() {
        return req.getWorkshopType();
    }

}