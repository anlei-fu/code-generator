

@Api(tags = "")
@RestController
public class DevicePositionController {

    @Autowired
    private DevicePositionService devicePositionService;

    @ApiOperation("")
    @PostMapping(path = "/devicePosition")
    public R addDevicePosition(@Validated @ModelAttribute AddDevicePositionReq req) {
        return R.doResponse(devicePositionService.addDevicePosition(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/devicePosition/{id}")
    public R deleteDevicePositionById(@PathVarible Integer id) {
        return R.doResponse(devicePositionService.deleteDevicePositionById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/devicePosition/{id}")
    public R updateDevicePositionById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDevicePositionByIdReq req) {
        return R.doResponse(devicePositionService.updateDevicePositionById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/devicePosition/{id}")
    public R<DevicePosition> getDevicePositionById(@PathVarible Integer id) {
        return R.doResponse(devicePositionService.getDevicePositionById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/devicePosition")
    public R<PageInfo<DevicePosition>> getDevicePositionList(@Validated @ModelAttribute GetDevicePositionListReq req) {
        return R.doResponse(devicePositionService.getDevicePositionList(req));
    }
}
