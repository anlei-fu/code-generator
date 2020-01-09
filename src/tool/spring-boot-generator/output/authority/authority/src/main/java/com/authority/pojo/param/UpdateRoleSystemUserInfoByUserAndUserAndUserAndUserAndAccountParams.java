public class UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams {

    @Getter
    @Setter
    private String account;

    private UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq req;

    public UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams(String account, UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
        this.account = account;
        this.req = req;
    }

    public String getPassword() {
        return req.getPassword();
    }

    public String getRole() {
        return req.getRole();
    }

}