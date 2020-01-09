public class UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
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