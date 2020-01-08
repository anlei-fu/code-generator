public class UpdateUserRoleByUserAndIdParams {

    @Getter
    @Setter
    private [object Object]ype id;

    private UpdateUserRoleByUserAndIdReq req;

    public UpdateUserRoleByUserAndIdParams(Integer id, UpdateUserRoleByUserAndIdReq req) {
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