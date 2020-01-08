public class UpdateDetectGoupUserByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDetectGoupUserByIdReq req;

    public UpdateDetectGoupUserByIdParams(Integer id, UpdateDetectGoupUserByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getGroupId() {
        return req.getGroupId();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getMemberId() {
        return req.getMemberId();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getStatus() {
        return req.getStatus();
    }

}