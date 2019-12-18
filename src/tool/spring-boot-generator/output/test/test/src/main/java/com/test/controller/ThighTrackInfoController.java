

@Api(tags = "")
@RestController
public class ThighTrackInfoController {

    @Autowired
    private ThighTrackInfoService thighTrackInfoService;

    @ApiOperation("")
    @PostMapping(path = "/thighTrackInfo")
    public R addThighTrackInfo(@Validated @ModelAttribute AddThighTrackInfoReq req) {
        return R.doResponse(thighTrackInfoService.addThighTrackInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/thighTrackInfo/{id}")
    public R deleteThighTrackInfoById(@PathVarible Integer id) {
        return R.doResponse(thighTrackInfoService.deleteThighTrackInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/thighTrackInfo/{id}")
    public R updateThighTrackInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateThighTrackInfoByIdReq req) {
        return R.doResponse(thighTrackInfoService.updateThighTrackInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/thighTrackInfo/{id}")
    public R<ThighTrackInfo> getThighTrackInfoById(@PathVarible Integer id) {
        return R.doResponse(thighTrackInfoService.getThighTrackInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/thighTrackInfo")
    public R<PageInfo<ThighTrackInfo>> getThighTrackInfoList(@Validated @ModelAttribute GetThighTrackInfoListReq req) {
        return R.doResponse(thighTrackInfoService.getThighTrackInfoList(req));
    }
}
