public class UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams {

    @Getter
    @Setter
    private [object Object]ype account;

    private UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req;

    public UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams(String account, UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
        this.account = account;
        this.req = req;
    }

    public [object Object]ype getPassword() {
        return req.getPassword();
    }

}