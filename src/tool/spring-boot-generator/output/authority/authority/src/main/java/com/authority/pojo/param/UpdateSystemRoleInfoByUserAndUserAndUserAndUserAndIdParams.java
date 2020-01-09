public class UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req) {
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