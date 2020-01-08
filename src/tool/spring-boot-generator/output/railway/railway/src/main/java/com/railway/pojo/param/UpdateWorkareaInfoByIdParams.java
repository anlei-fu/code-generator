public class UpdateWorkareaInfoByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateWorkareaInfoByIdReq req;

    public UpdateWorkareaInfoByIdParams(Integer id, UpdateWorkareaInfoByIdReq req) {
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

    public Integer getOperator() {
        return req.getOperator();
    }

    public String getShortName() {
        return req.getShortName();
    }

    public Integer getWorkshopId() {
        return req.getWorkshopId();
    }

}