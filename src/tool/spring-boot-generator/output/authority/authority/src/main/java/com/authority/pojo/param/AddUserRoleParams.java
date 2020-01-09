public class AddUserRoleParams {

    @Getter
    @Setter
    private String createUser;

    private AddUserRoleReq req;

    public AddUserRoleParams(String user, AddUserRoleReq req) {
        this.createUser = user;
        this.req = req;
    }

    public String getUserAccount() {
        return req.getUserAccount();
    }

    public Integer getSystemId() {
        return req.getSystemId();
    }

}