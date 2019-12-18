

@Api(tags = "")
@RestController
public class TunnelInfoController {

    @Autowired
    private TunnelInfoService tunnelInfoService;

    @ApiOperation("")
    @PostMapping(path = "/tunnelInfo")
    public R addTunnelInfo(@Validated @ModelAttribute AddTunnelInfoReq req) {
        return R.doResponse(tunnelInfoService.addTunnelInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/tunnelInfo/{id}")
    public R deleteTunnelInfoById(@PathVarible Integer id) {
        return R.doResponse(tunnelInfoService.deleteTunnelInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/tunnelInfo/{id}")
    public R updateTunnelInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateTunnelInfoByIdReq req) {
        return R.doResponse(tunnelInfoService.updateTunnelInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/tunnelInfo/{id}")
    public R<TunnelInfo> getTunnelInfoById(@PathVarible Integer id) {
        return R.doResponse(tunnelInfoService.getTunnelInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/tunnelInfo")
    public R<PageInfo<TunnelInfo>> getTunnelInfoList(@Validated @ModelAttribute GetTunnelInfoListReq req) {
        return R.doResponse(tunnelInfoService.getTunnelInfoList(req));
    }
}
