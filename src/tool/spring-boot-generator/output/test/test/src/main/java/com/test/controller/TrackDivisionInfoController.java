

@Api(tags = "")
@RestController
public class TrackDivisionInfoController {

    @Autowired
    private TrackDivisionInfoService trackDivisionInfoService;

    @ApiOperation("")
    @PostMapping(path = "/trackDivisionInfo")
    public R addTrackDivisionInfo(@Validated @ModelAttribute AddTrackDivisionInfoReq req) {
        return R.doResponse(trackDivisionInfoService.addTrackDivisionInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/trackDivisionInfo/{id}")
    public R deleteTrackDivisionInfoById(@PathVarible Integer id) {
        return R.doResponse(trackDivisionInfoService.deleteTrackDivisionInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/trackDivisionInfo/{id}")
    public R updateTrackDivisionInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateTrackDivisionInfoByIdReq req) {
        return R.doResponse(trackDivisionInfoService.updateTrackDivisionInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/trackDivisionInfo/{id}")
    public R<TrackDivisionInfo> getTrackDivisionInfoById(@PathVarible Integer id) {
        return R.doResponse(trackDivisionInfoService.getTrackDivisionInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/trackDivisionInfo")
    public R<PageInfo<TrackDivisionInfo>> getTrackDivisionInfoList(@Validated @ModelAttribute GetTrackDivisionInfoListReq req) {
        return R.doResponse(trackDivisionInfoService.getTrackDivisionInfoList(req));
    }
}
