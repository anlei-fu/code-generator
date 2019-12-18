

@Api(tags = "")
@RestController
public class AdminInfoController {

    @Autowired
    private AdminInfoService adminInfoService;

    @ApiOperation("")
    @PostMapping(path = "/adminInfo")
    public R addAdminInfo(@Validated @ModelAttribute AddAdminInfoReq req) {
        return R.doResponse(adminInfoService.addAdminInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/adminInfo/{id}")
    public R deleteAdminInfoById(@PathVariable Integer id) {
        return R.doResponse(adminInfoService.deleteAdminInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/adminInfo/{id}")
    public R updateAdminInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateAdminInfoByIdReq req) {
        return R.doResponse(adminInfoService.updateAdminInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/adminInfo/{id}")
    public R<AdminInfo> getAdminInfoById(@PathVariable Integer id) {
        return R.doResponse(adminInfoService.getAdminInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/adminInfo")
    public R<PageInfo<AdminInfo>> getAdminInfoList(@Validated @ModelAttribute GetAdminInfoListReq req) {
        return R.doResponse(adminInfoService.getAdminInfoList(req));
    }
}
