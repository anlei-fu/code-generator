

@Api(tags = "")
@RestController
public class CurveInfoController {

    @Autowired
    private CurveInfoService curveInfoService;

    @ApiOperation("")
    @PostMapping(path = "/curveInfo")
    public R addCurveInfo(@Validated @ModelAttribute AddCurveInfoReq req) {
        return R.doResponse(curveInfoService.addCurveInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/curveInfo/{curveId}")
    public R deleteCurveInfoByCurveId(@PathVarible Integer curveId) {
        return R.doResponse(curveInfoService.deleteCurveInfoByCurveId(curveId));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/curveInfo/{curveId}")
    public R updateCurveInfoByCurveId(@PathVarible Integer curveId, @Validated @ModelAttribute UpdateCurveInfoByCurveIdReq req) {
        return R.doResponse(curveInfoService.updateCurveInfoByCurveId(curveId, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/curveInfo/{curveId}")
    public R<CurveInfo> getCurveInfoByCurveId(@PathVarible Integer curveId) {
        return R.doResponse(curveInfoService.getCurveInfoByCurveId(curveId));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/curveInfo")
    public R<PageInfo<CurveInfo>> getCurveInfoList(@Validated @ModelAttribute GetCurveInfoListReq req) {
        return R.doResponse(curveInfoService.getCurveInfoList(req));
    }
}
