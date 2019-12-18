

@Api(tags = "")
@RestController
public class BridgeInfoController {

    @Autowired
    private BridgeInfoService bridgeInfoService;

    @ApiOperation("")
    @PostMapping(path = "/bridgeInfo")
    public R addBridgeInfo(@Validated @ModelAttribute AddBridgeInfoReq req) {
        return R.doResponse(bridgeInfoService.addBridgeInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/bridgeInfo/{id}")
    public R deleteBridgeInfoById(@PathVarible Integer id) {
        return R.doResponse(bridgeInfoService.deleteBridgeInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/bridgeInfo/{id}")
    public R updateBridgeInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateBridgeInfoByIdReq req) {
        return R.doResponse(bridgeInfoService.updateBridgeInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/bridgeInfo/{id}")
    public R<BridgeInfo> getBridgeInfoById(@PathVarible Integer id) {
        return R.doResponse(bridgeInfoService.getBridgeInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/bridgeInfo")
    public R<PageInfo<BridgeInfo>> getBridgeInfoList(@Validated @ModelAttribute GetBridgeInfoListReq req) {
        return R.doResponse(bridgeInfoService.getBridgeInfoList(req));
    }
}
