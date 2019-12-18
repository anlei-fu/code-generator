

@Api(tags = "")
@RestController
public class DomainInfoController {

    @Autowired
    private DomainInfoService domainInfoService;

    @ApiOperation("")
    @PostMapping(path = "/domainInfo")
    public R addDomainInfo(@Validated @ModelAttribute AddDomainInfoReq req) {
        return R.doResponse(domainInfoService.addDomainInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/domainInfo/{id}")
    public R deleteDomainInfoById(@PathVariable Integer id) {
        return R.doResponse(domainInfoService.deleteDomainInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/domainInfo/{id}")
    public R updateDomainInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDomainInfoByIdReq req) {
        return R.doResponse(domainInfoService.updateDomainInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/domainInfo/{id}")
    public R<DomainInfo> getDomainInfoById(@PathVariable Integer id) {
        return R.doResponse(domainInfoService.getDomainInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/domainInfo")
    public R<PageInfo<DomainInfo>> getDomainInfoList(@Validated @ModelAttribute GetDomainInfoListReq req) {
        return R.doResponse(domainInfoService.getDomainInfoList(req));
    }
}
