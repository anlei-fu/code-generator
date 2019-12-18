

@Api(tags = "")
@RestController
public class LineInfoController {

    @Autowired
    private LineInfoService lineInfoService;

    @ApiOperation("")
    @PostMapping(path = "/lineInfo")
    public R addLineInfo(@Validated @ModelAttribute AddLineInfoReq req) {
        return R.doResponse(lineInfoService.addLineInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/lineInfo/{id}")
    public R deleteLineInfoById(@PathVarible Integer id) {
        return R.doResponse(lineInfoService.deleteLineInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/lineInfo/{id}")
    public R updateLineInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateLineInfoByIdReq req) {
        return R.doResponse(lineInfoService.updateLineInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/lineInfo/{id}")
    public R<LineInfo> getLineInfoById(@PathVarible Integer id) {
        return R.doResponse(lineInfoService.getLineInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/lineInfo")
    public R<PageInfo<LineInfo>> getLineInfoList(@Validated @ModelAttribute GetLineInfoListReq req) {
        return R.doResponse(lineInfoService.getLineInfoList(req));
    }
}
