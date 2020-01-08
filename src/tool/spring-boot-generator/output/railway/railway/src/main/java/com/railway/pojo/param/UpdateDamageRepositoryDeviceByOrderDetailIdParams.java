public class UpdateDamageRepositoryDeviceByOrderDetailIdParams {

    @Getter
    @Setter
    private Integer orderDetailId;

    private UpdateDamageRepositoryDeviceByOrderDetailIdReq req;

    public UpdateDamageRepositoryDeviceByOrderDetailIdParams(Integer orderDetailId, UpdateDamageRepositoryDeviceByOrderDetailIdReq req) {
        this.orderDetailId = orderDetailId;
        this.req = req;
    }

    public String getDeviceCode() {
        return req.getDeviceCode();
    }

    public String getDeviceName() {
        return req.getDeviceName();
    }

    public Integer getDeviceType() {
        return req.getDeviceType();
    }

    public String getDeviceTypeCode() {
        return req.getDeviceTypeCode();
    }

    public String getFactory() {
        return req.getFactory();
    }

    public String getNature() {
        return req.getNature();
    }

    public Float getRadius() {
        return req.getRadius();
    }

    public Integer getRailType() {
        return req.getRailType();
    }

    public String getSealNumber() {
        return req.getSealNumber();
    }

    public Integer getSleeper() {
        return req.getSleeper();
    }

    public Float getTotalWeight() {
        return req.getTotalWeight();
    }

    public String getTrackNo() {
        return req.getTrackNo();
    }

    public String getTurnoutNo() {
        return req.getTurnoutNo();
    }

    public String getUserDate() {
        return req.getUserDate();
    }

}