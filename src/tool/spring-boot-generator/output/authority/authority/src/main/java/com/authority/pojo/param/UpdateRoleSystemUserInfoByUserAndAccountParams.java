public class UpdateRoleSystemUserInfoByUserAndAccountParams {

    @Getter
    @Setter
    private [object Object]ype account;

    private UpdateRoleSystemUserInfoByUserAndAccountReq req;

    public UpdateRoleSystemUserInfoByUserAndAccountParams(String account, UpdateRoleSystemUserInfoByUserAndAccountReq req) {
        this.account = account;
        this.req = req;
    }

    public [object Object]ype getPassword() {
        return req.getPassword();
    }

    public [object Object]ype getRole() {
        return req.getRole();
    }

}