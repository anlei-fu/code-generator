

@Api(tags = "")
@RestController
public class BureauInfoController {

    @Autowired
    private BureauInfoService bureauInfoService;

    @ApiOperation("")
    @PostMapping(path = "/bureauInfo")
    public R addBureauInfo(@Validated @ModelAttribute AddBureauInfoReq req) {
        return R.doResponse(bureauInfoService.addBureauInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/bureauInfo/{id}")
    public R deleteBureauInfoById(@PathVarible Integer id) {
        return R.doResponse(bureauInfoService.deleteBureauInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/bureauInfo/{id}")
    public R updateBureauInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateBureauInfoByIdReq req) {
        return R.doResponse(bureauInfoService.updateBureauInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/bureauInfo/{id}")
    public R<BureauInfo> getBureauInfoById(@PathVarible Integer id) {
        return R.doResponse(bureauInfoService.getBureauInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/bureauInfo")
    public R<PageInfo<BureauInfo>> getBureauInfoList(@Validated @ModelAttribute GetBureauInfoListReq req) {
        return R.doResponse(bureauInfoService.getBureauInfoList(req));
    }
}
