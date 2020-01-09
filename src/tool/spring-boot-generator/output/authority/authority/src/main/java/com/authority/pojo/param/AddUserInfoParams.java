public class AddUserInfoParams {

    private AddUserInfoReq req;

    public AddUserInfoParams(AddUserInfoReq req) {
        this.req = req;
    }

    public String getPassword() {
        return req.getPassword();
    }

    public String getCreateUser() {
        return req.getCreateUser();
    }

}