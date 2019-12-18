

@Api(tags = "")
@RestController
public class DetectStaffInfoController {

    @Autowired
    private DetectStaffInfoService detectStaffInfoService;

    @ApiOperation("")
    @PostMapping(path = "/detectStaffInfo")
    public R addDetectStaffInfo(@Validated @ModelAttribute AddDetectStaffInfoReq req) {
        return R.doResponse(detectStaffInfoService.addDetectStaffInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectStaffInfo/{id}")
    public R deleteDetectStaffInfoById(@PathVarible Integer id) {
        return R.doResponse(detectStaffInfoService.deleteDetectStaffInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectStaffInfo/{id}")
    public R updateDetectStaffInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDetectStaffInfoByIdReq req) {
        return R.doResponse(detectStaffInfoService.updateDetectStaffInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfo/{id}")
    public R<DetectStaffInfo> getDetectStaffInfoById(@PathVarible Integer id) {
        return R.doResponse(detectStaffInfoService.getDetectStaffInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfo")
    public R<PageInfo<DetectStaffInfo>> getDetectStaffInfoList(@Validated @ModelAttribute GetDetectStaffInfoListReq req) {
        return R.doResponse(detectStaffInfoService.getDetectStaffInfoList(req));
    }
}
