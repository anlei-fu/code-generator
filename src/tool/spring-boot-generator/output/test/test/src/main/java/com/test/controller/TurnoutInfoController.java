

@Api(tags = "")
@RestController
public class TurnoutInfoController {

    @Autowired
    private TurnoutInfoService turnoutInfoService;

    @ApiOperation("")
    @PostMapping(path = "/turnoutInfo")
    public R addTurnoutInfo(@Validated @ModelAttribute AddTurnoutInfoReq req) {
        return R.doResponse(turnoutInfoService.addTurnoutInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/turnoutInfo/{id}")
    public R deleteTurnoutInfoById(@PathVarible Integer id) {
        return R.doResponse(turnoutInfoService.deleteTurnoutInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/turnoutInfo/{id}")
    public R updateTurnoutInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateTurnoutInfoByIdReq req) {
        return R.doResponse(turnoutInfoService.updateTurnoutInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/turnoutInfo/{id}")
    public R<TurnoutInfo> getTurnoutInfoById(@PathVarible Integer id) {
        return R.doResponse(turnoutInfoService.getTurnoutInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/turnoutInfo")
    public R<PageInfo<TurnoutInfo>> getTurnoutInfoList(@Validated @ModelAttribute GetTurnoutInfoListReq req) {
        return R.doResponse(turnoutInfoService.getTurnoutInfoList(req));
    }
}
