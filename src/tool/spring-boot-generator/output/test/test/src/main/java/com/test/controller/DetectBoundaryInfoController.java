

@Api(tags = "")
@RestController
public class DetectBoundaryInfoController {

    @Autowired
    private DetectBoundaryInfoService detectBoundaryInfoService;

    @ApiOperation("")
    @PostMapping(path = "/detectBoundaryInfo")
    public R addDetectBoundaryInfo(@Validated @ModelAttribute AddDetectBoundaryInfoReq req) {
        return R.doResponse(detectBoundaryInfoService.addDetectBoundaryInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectBoundaryInfo/{id}")
    public R deleteDetectBoundaryInfoById(@PathVarible Integer id) {
        return R.doResponse(detectBoundaryInfoService.deleteDetectBoundaryInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectBoundaryInfo/{id}")
    public R updateDetectBoundaryInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDetectBoundaryInfoByIdReq req) {
        return R.doResponse(detectBoundaryInfoService.updateDetectBoundaryInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectBoundaryInfo/{id}")
    public R<DetectBoundaryInfo> getDetectBoundaryInfoById(@PathVarible Integer id) {
        return R.doResponse(detectBoundaryInfoService.getDetectBoundaryInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectBoundaryInfo")
    public R<PageInfo<DetectBoundaryInfo>> getDetectBoundaryInfoList(@Validated @ModelAttribute GetDetectBoundaryInfoListReq req) {
        return R.doResponse(detectBoundaryInfoService.getDetectBoundaryInfoList(req));
    }
}
