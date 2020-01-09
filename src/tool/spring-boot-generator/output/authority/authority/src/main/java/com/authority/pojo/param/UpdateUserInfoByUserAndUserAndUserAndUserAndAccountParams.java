public class UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams {

    @Getter
    @Setter
    private String account;

    private UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req;

    public UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams(String account, UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
        this.account = account;
        this.req = req;
    }

    public String getPassword() {
        return req.getPassword();
    }

}