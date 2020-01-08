public class AddRoleSystemUserInfoParams {

    private AddRoleSystemUserInfoReq req;

    public AddRoleSystemUserInfoParams(AddRoleSystemUserInfoReq req) {
        this.req = req;
    }

    public [object Object]ype getPassword() {
        return req.getPassword();
    }

    public [object Object]ype getRole() {
        return req.getRole();
    }

}