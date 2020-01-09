public class AddRoleSystemUserInfoParams {

    private AddRoleSystemUserInfoReq req;

    public AddRoleSystemUserInfoParams(AddRoleSystemUserInfoReq req) {
        this.req = req;
    }

    public String getPassword() {
        return req.getPassword();
    }

    public String getRole() {
        return req.getRole();
    }

}