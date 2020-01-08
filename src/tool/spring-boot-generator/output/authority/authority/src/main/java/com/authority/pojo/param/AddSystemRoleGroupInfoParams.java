public class AddSystemRoleGroupInfoParams {

    private AddSystemRoleGroupInfoReq req;

    public AddSystemRoleGroupInfoParams(AddSystemRoleGroupInfoReq req) {
        this.req = req;
    }

    public [object Object]ype getSystemId() {
        return req.getSystemId();
    }

    public [object Object]ype getRole() {
        return req.getRole();
    }

    public [object Object]ype getDescription() {
        return req.getDescription();
    }

    public [object Object]ype getCreateUser() {
        return req.getCreateUser();
    }

}