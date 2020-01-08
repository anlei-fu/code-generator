public class UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private [object Object]ype id;

    private UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
        this.req = req;
    }

    public [object Object]ype getName() {
        return req.getName();
    }

    public [object Object]ype getDescription() {
        return req.getDescription();
    }

}