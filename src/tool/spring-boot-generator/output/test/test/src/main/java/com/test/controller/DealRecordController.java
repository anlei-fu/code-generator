

@Api(tags = "")
@RestController
public class DealRecordController {

    @Autowired
    private DealRecordService dealRecordService;

    @ApiOperation("")
    @PostMapping(path = "/dealRecord")
    public R addDealRecord(@Validated @ModelAttribute AddDealRecordReq req) {
        return R.doResponse(dealRecordService.addDealRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/dealRecord/{id}")
    public R deleteDealRecordById(@PathVarible Integer id) {
        return R.doResponse(dealRecordService.deleteDealRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/dealRecord/{id}")
    public R updateDealRecordById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDealRecordByIdReq req) {
        return R.doResponse(dealRecordService.updateDealRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/dealRecord/{id}")
    public R<DealRecord> getDealRecordById(@PathVarible Integer id) {
        return R.doResponse(dealRecordService.getDealRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/dealRecord")
    public R<PageInfo<DealRecord>> getDealRecordList(@Validated @ModelAttribute GetDealRecordListReq req) {
        return R.doResponse(dealRecordService.getDealRecordList(req));
    }
}
