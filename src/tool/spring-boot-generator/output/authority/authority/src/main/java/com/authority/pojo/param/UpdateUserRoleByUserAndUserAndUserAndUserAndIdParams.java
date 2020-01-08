public class UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private [object Object]ype id;

    private UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
        this.req = req;
    }

    public [object Object]ype getUserAccount() {
        return req.getUserAccount();
    }

    public [object Object]ype getSystemId() {
        return req.getSystemId();
    }

}