public class UpdateDivisionUserByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDivisionUserByIdReq req;

    public UpdateDivisionUserByIdParams(Integer id, UpdateDivisionUserByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getDivisionId() {
        return req.getDivisionId();
    }

    public Integer getIsDelete() {
        return req.getIsDelete();
    }

    public Integer getOperator() {
        return req.getOperator();
    }

    public Integer getUserId() {
        return req.getUserId();
    }

}