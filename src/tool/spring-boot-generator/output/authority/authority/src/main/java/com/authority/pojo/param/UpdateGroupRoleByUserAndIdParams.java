public class UpdateGroupRoleByUserAndIdParams {

    @Getter
    @Setter
    private [object Object]ype id;

    private UpdateGroupRoleByUserAndIdReq req;

    public UpdateGroupRoleByUserAndIdParams(Integer id, UpdateGroupRoleByUserAndIdReq req) {
        this.id = id;
        this.req = req;
    }

    public [object Object]ype getUserAccount() {
        return req.getUserAccount();
    }

    public [object Object]ype getSystemId() {
        return req.getSystemId();
    }

    public [object Object]ype getRole() {
        return req.getRole();
    }

}