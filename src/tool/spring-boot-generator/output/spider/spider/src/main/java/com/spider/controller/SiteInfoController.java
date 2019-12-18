

@Api(tags = "")
@RestController
public class SiteInfoController {

    @Autowired
    private SiteInfoService siteInfoService;

    @ApiOperation("")
    @PostMapping(path = "/siteInfo")
    public R addSiteInfo(@Validated @ModelAttribute AddSiteInfoReq req) {
        return R.doResponse(siteInfoService.addSiteInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/siteInfo/{id}")
    public R deleteSiteInfoById(@PathVariable Integer id) {
        return R.doResponse(siteInfoService.deleteSiteInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/siteInfo/{id}")
    public R updateSiteInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateSiteInfoByIdReq req) {
        return R.doResponse(siteInfoService.updateSiteInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/siteInfo/{id}")
    public R<SiteInfo> getSiteInfoById(@PathVariable Integer id) {
        return R.doResponse(siteInfoService.getSiteInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/siteInfo")
    public R<PageInfo<SiteInfo>> getSiteInfoList(@Validated @ModelAttribute GetSiteInfoListReq req) {
        return R.doResponse(siteInfoService.getSiteInfoList(req));
    }
}
