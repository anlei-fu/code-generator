public class UpdateGroupRoleByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateGroupRoleByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getUserAccount() {
        return req.getUserAccount();
    }

    public String getSystemId() {
        return req.getSystemId();
    }

    public String getRole() {
        return req.getRole();
    }

}