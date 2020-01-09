public class AddGroupRoleParams {

    @Getter
    @Setter
    private String createUser;

    private AddGroupRoleReq req;

    public AddGroupRoleParams(String user, AddGroupRoleReq req) {
        this.createUser = user;
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