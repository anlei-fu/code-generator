

@Api(tags = "")
@RestController
public class UserDeductRecordController {

    @Autowired
    private UserDeductRecordService userDeductRecordService;

    @ApiOperation("")
    @PostMapping(path = "/userDeductRecord")
    public R addUserDeductRecord(@Validated @ModelAttribute AddUserDeductRecordReq req) {
        return R.doResponse(userDeductRecordService.addUserDeductRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/userDeductRecord/{id}")
    public R deleteUserDeductRecordById(@PathVariable Integer id) {
        return R.doResponse(userDeductRecordService.deleteUserDeductRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/userDeductRecord/{id}")
    public R updateUserDeductRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserDeductRecordByIdReq req) {
        return R.doResponse(userDeductRecordService.updateUserDeductRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userDeductRecord/{id}")
    public R<UserDeductRecord> getUserDeductRecordById(@PathVariable Integer id) {
        return R.doResponse(userDeductRecordService.getUserDeductRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userDeductRecord")
    public R<PageInfo<UserDeductRecord>> getUserDeductRecordList(@Validated @ModelAttribute GetUserDeductRecordListReq req) {
        return R.doResponse(userDeductRecordService.getUserDeductRecordList(req));
    }
}
