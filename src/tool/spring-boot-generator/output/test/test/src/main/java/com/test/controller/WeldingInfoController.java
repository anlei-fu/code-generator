

@Api(tags = "")
@RestController
public class WeldingInfoController {

    @Autowired
    private WeldingInfoService weldingInfoService;

    @ApiOperation("")
    @PostMapping(path = "/weldingInfo")
    public R addWeldingInfo(@Validated @ModelAttribute AddWeldingInfoReq req) {
        return R.doResponse(weldingInfoService.addWeldingInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/weldingInfo/{id}")
    public R deleteWeldingInfoById(@PathVarible Integer id) {
        return R.doResponse(weldingInfoService.deleteWeldingInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/weldingInfo/{id}")
    public R updateWeldingInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateWeldingInfoByIdReq req) {
        return R.doResponse(weldingInfoService.updateWeldingInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/weldingInfo/{id}")
    public R<WeldingInfo> getWeldingInfoById(@PathVarible Integer id) {
        return R.doResponse(weldingInfoService.getWeldingInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/weldingInfo")
    public R<PageInfo<WeldingInfo>> getWeldingInfoList(@Validated @ModelAttribute GetWeldingInfoListReq req) {
        return R.doResponse(weldingInfoService.getWeldingInfoList(req));
    }
}
