

@Api(tags = "")
@RestController
public class StationLineController {

    @Autowired
    private StationLineService stationLineService;

    @ApiOperation("")
    @PostMapping(path = "/stationLine")
    public R addStationLine(@Validated @ModelAttribute AddStationLineReq req) {
        return R.doResponse(stationLineService.addStationLine(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/stationLine/{id}")
    public R deleteStationLineById(@PathVarible Integer id) {
        return R.doResponse(stationLineService.deleteStationLineById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/stationLine/{id}")
    public R updateStationLineById(@PathVarible Integer id, @Validated @ModelAttribute UpdateStationLineByIdReq req) {
        return R.doResponse(stationLineService.updateStationLineById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationLine/{id}")
    public R<StationLine> getStationLineById(@PathVarible Integer id) {
        return R.doResponse(stationLineService.getStationLineById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/stationLine")
    public R<PageInfo<StationLine>> getStationLineList(@Validated @ModelAttribute GetStationLineListReq req) {
        return R.doResponse(stationLineService.getStationLineList(req));
    }
}
