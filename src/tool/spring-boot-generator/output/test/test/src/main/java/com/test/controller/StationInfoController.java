

@Api(tags = "")
@RestController
public class StationInfoController {

    @Autowired
    private StationInfoService stationInfoService;

    @ApiOperation("")
    @PostMapping(path = "/stationInfo")
    public R addStationInfo(@Validated @ModelAttribute AddStationInfoReq req) {
        return R.doResponse(stationInfoService.addStationInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/stationInfo/{id}")
    public R deleteStationInfoById(@PathVarible Integer id) {
        return R.doResponse(stationInfoService.deleteStationInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/stationInfo/{id}")
    public R updateStationInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateStationInfoByIdReq req) {
        return R.doResponse(stationInfoService.updateStationInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationInfo/{id}")
    public R<StationInfo> getStationInfoById(@PathVarible Integer id) {
        return R.doResponse(stationInfoService.getStationInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationInfo")
    public R<PageInfo<StationInfo>> getStationInfoList(@Validated @ModelAttribute GetStationInfoListReq req) {
        return R.doResponse(stationInfoService.getStationInfoList(req));
    }
}
