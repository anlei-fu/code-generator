public class UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getUserAccount() {
        return req.getUserAccount();
    }

    public Integer getSystemId() {
        return req.getSystemId();
    }

}