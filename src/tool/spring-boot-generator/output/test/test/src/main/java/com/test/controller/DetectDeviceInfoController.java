

@Api(tags = "")
@RestController
public class DetectDeviceInfoController {

    @Autowired
    private DetectDeviceInfoService detectDeviceInfoService;

    @ApiOperation("")
    @PostMapping(path = "/detectDeviceInfo")
    public R addDetectDeviceInfo(@Validated @ModelAttribute AddDetectDeviceInfoReq req) {
        return R.doResponse(detectDeviceInfoService.addDetectDeviceInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectDeviceInfo/{id}")
    public R deleteDetectDeviceInfoById(@PathVarible Integer id) {
        return R.doResponse(detectDeviceInfoService.deleteDetectDeviceInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectDeviceInfo/{id}")
    public R updateDetectDeviceInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDetectDeviceInfoByIdReq req) {
        return R.doResponse(detectDeviceInfoService.updateDetectDeviceInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectDeviceInfo/{id}")
    public R<DetectDeviceInfo> getDetectDeviceInfoById(@PathVarible Integer id) {
        return R.doResponse(detectDeviceInfoService.getDetectDeviceInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectDeviceInfo")
    public R<PageInfo<DetectDeviceInfo>> getDetectDeviceInfoList(@Validated @ModelAttribute GetDetectDeviceInfoListReq req) {
        return R.doResponse(detectDeviceInfoService.getDetectDeviceInfoList(req));
    }
}
