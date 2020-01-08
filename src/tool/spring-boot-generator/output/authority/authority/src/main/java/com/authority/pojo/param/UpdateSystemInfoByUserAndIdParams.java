public class UpdateSystemInfoByUserAndIdParams {

    @Getter
    @Setter
    private [object Object]ype id;

    private UpdateSystemInfoByUserAndIdReq req;

    public UpdateSystemInfoByUserAndIdParams(Integer id, UpdateSystemInfoByUserAndIdReq req) {
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