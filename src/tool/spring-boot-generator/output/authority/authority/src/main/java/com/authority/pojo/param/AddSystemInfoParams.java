public class AddSystemInfoParams {

    private AddSystemInfoReq req;

    public AddSystemInfoParams(AddSystemInfoReq req) {
        this.req = req;
    }

    public [object Object]ype getName() {
        return req.getName();
    }

    public [object Object]ype getDescription() {
        return req.getDescription();
    }

    public [object Object]ype getCreateUser() {
        return req.getCreateUser();
    }

}