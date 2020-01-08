public class UpdateBureauLineOrderByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateBureauLineOrderByIdReq req;

    public UpdateBureauLineOrderByIdParams(Integer id, UpdateBureauLineOrderByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getBureauId() {
        return req.getBureauId();
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

}