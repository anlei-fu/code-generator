public class AddSystemRoleInfoParams {

    @Getter
    @Setter
    private String createUser;

    private AddSystemRoleInfoReq req;

    public AddSystemRoleInfoParams(String user, AddSystemRoleInfoReq req) {
        this.createUser = user;
        this.req = req;
    }

    public Integer getSystemId() {
        return req.getSystemId();
    }

    public String getRole() {
        return req.getRole();
    }

    public String getDescription() {
        return req.getDescription();
    }

}