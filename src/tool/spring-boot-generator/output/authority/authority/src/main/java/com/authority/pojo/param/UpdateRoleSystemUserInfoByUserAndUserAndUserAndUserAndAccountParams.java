public class UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams {

    @Getter
    @Setter
    private [object Object]ype account;

    private UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq req;

    public UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams(String account, UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
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