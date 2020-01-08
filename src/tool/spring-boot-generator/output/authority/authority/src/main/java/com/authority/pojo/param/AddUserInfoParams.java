public class AddUserInfoParams {

    private AddUserInfoReq req;

    public AddUserInfoParams(AddUserInfoReq req) {
        this.req = req;
    }

    public [object Object]ype getPassword() {
        return req.getPassword();
    }

    public [object Object]ype getCreateUser() {
        return req.getCreateUser();
    }

}