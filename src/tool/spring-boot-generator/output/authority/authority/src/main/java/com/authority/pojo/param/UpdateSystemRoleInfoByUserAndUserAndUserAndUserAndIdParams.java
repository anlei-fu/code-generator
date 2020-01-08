public class UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private [object Object]ype id;

    private UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
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

}