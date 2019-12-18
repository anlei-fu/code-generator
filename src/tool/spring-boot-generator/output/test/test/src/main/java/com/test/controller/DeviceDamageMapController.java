

@Api(tags = "")
@RestController
public class DeviceDamageMapController {

    @Autowired
    private DeviceDamageMapService deviceDamageMapService;

    @ApiOperation("")
    @PostMapping(path = "/deviceDamageMap")
    public R addDeviceDamageMap(@Validated @ModelAttribute AddDeviceDamageMapReq req) {
        return R.doResponse(deviceDamageMapService.addDeviceDamageMap(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/deviceDamageMap/{id}")
    public R deleteDeviceDamageMapById(@PathVarible Integer id) {
        return R.doResponse(deviceDamageMapService.deleteDeviceDamageMapById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/deviceDamageMap/{id}")
    public R updateDeviceDamageMapById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDeviceDamageMapByIdReq req) {
        return R.doResponse(deviceDamageMapService.updateDeviceDamageMapById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/deviceDamageMap/{id}")
    public R<DeviceDamageMap> getDeviceDamageMapById(@PathVarible Integer id) {
        return R.doResponse(deviceDamageMapService.getDeviceDamageMapById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/deviceDamageMap")
    public R<PageInfo<DeviceDamageMap>> getDeviceDamageMapList(@Validated @ModelAttribute GetDeviceDamageMapListReq req) {
        return R.doResponse(deviceDamageMapService.getDeviceDamageMapList(req));
    }
}
