

@Api(tags = "")
@RestController
public class TrackInfoController {

    @Autowired
    private TrackInfoService trackInfoService;

    @ApiOperation("")
    @PostMapping(path = "/trackInfo")
    public R addTrackInfo(@Validated @ModelAttribute AddTrackInfoReq req) {
        return R.doResponse(trackInfoService.addTrackInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/trackInfo/{id}")
    public R deleteTrackInfoById(@PathVarible Integer id) {
        return R.doResponse(trackInfoService.deleteTrackInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/trackInfo/{id}")
    public R updateTrackInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateTrackInfoByIdReq req) {
        return R.doResponse(trackInfoService.updateTrackInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/trackInfo/{id}")
    public R<TrackInfo> getTrackInfoById(@PathVarible Integer id) {
        return R.doResponse(trackInfoService.getTrackInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/trackInfo")
    public R<PageInfo<TrackInfo>> getTrackInfoList(@Validated @ModelAttribute GetTrackInfoListReq req) {
        return R.doResponse(trackInfoService.getTrackInfoList(req));
    }
}
