public class UpdateTrackInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateTrackInfoByIdReq req;

    public UpdateTrackInfoByIdParams(Integer id, UpdateTrackInfoByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getTrackCode() {
        return req.getTrackCode();
    }

    public Integer getTrackDivisionId() {
        return req.getTrackDivisionId();
    }

    public Integer getTrackType() {
        return req.getTrackType();
    }

}