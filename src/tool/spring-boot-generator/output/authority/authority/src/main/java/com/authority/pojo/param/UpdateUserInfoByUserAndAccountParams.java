public class UpdateUserInfoByUserAndAccountParams {

    @Getter
    @Setter
    private [object Object]ype account;

    private UpdateUserInfoByUserAndAccountReq req;

    public UpdateUserInfoByUserAndAccountParams(String account, UpdateUserInfoByUserAndAccountReq req) {
        this.account = account;
        this.req = req;
    }

    public [object Object]ype getPassword() {
        return req.getPassword();
    }

}