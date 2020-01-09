public class AddSystemRoleGroupInfoParams {

    @Getter
    @Setter
    private String createUser;

    private AddSystemRoleGroupInfoReq req;

    public AddSystemRoleGroupInfoParams(String user, AddSystemRoleGroupInfoReq req) {
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