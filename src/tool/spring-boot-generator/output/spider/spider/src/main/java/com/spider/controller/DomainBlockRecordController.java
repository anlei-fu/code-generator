

@Api(tags = "")
@RestController
public class DomainBlockRecordController {

    @Autowired
    private DomainBlockRecordService domainBlockRecordService;

    @ApiOperation("")
    @PostMapping(path = "/domainBlockRecord")
    public R addDomainBlockRecord(@Validated @ModelAttribute AddDomainBlockRecordReq req) {
        return R.doResponse(domainBlockRecordService.addDomainBlockRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/domainBlockRecord/{id}")
    public R deleteDomainBlockRecordById(@PathVariable Integer id) {
        return R.doResponse(domainBlockRecordService.deleteDomainBlockRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/domainBlockRecord/{id}")
    public R updateDomainBlockRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateDomainBlockRecordByIdReq req) {
        return R.doResponse(domainBlockRecordService.updateDomainBlockRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/domainBlockRecord/{id}")
    public R<DomainBlockRecord> getDomainBlockRecordById(@PathVariable Integer id) {
        return R.doResponse(domainBlockRecordService.getDomainBlockRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/domainBlockRecord")
    public R<PageInfo<DomainBlockRecord>> getDomainBlockRecordList(@Validated @ModelAttribute GetDomainBlockRecordListReq req) {
        return R.doResponse(domainBlockRecordService.getDomainBlockRecordList(req));
    }
}
