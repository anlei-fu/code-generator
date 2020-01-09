public class UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req;

    public UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams(Integer id, UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req) {
        this.id = id;
        this.req = req;
    }

    public String getName() {
        return req.getName();
    }

    public String getDescription() {
        return req.getDescription();
    }

}