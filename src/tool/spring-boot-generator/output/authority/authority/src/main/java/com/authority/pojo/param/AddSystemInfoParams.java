public class AddSystemInfoParams {

    @Getter
    @Setter
    private String createUser;

    private AddSystemInfoReq req;

    public AddSystemInfoParams(String user, AddSystemInfoReq req) {
        this.createUser = user;
        this.req = req;
    }

    public String getName() {
        return req.getName();
    }

    public String getDescription() {
        return req.getDescription();
    }

}