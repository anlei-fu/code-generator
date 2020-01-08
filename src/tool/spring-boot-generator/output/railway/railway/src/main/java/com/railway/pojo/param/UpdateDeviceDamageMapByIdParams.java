public class UpdateDeviceDamageMapByIdParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateDeviceDamageMapByIdReq req;

    public UpdateDeviceDamageMapByIdParams(Integer id, UpdateDeviceDamageMapByIdReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getDamageId() {
        return req.getDamageId();
    }

    public Integer getDeivceId() {
        return req.getDeivceId();
    }

    public Integer getDeviceType() {
        return req.getDeviceType();
    }

}