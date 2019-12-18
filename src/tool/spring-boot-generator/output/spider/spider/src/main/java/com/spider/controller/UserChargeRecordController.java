

@Api(tags = "")
@RestController
public class UserChargeRecordController {

    @Autowired
    private UserChargeRecordService userChargeRecordService;

    @ApiOperation("")
    @PostMapping(path = "/userChargeRecord")
    public R addUserChargeRecord(@Validated @ModelAttribute AddUserChargeRecordReq req) {
        return R.doResponse(userChargeRecordService.addUserChargeRecord(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/userChargeRecord/{id}")
    public R deleteUserChargeRecordById(@PathVariable Integer id) {
        return R.doResponse(userChargeRecordService.deleteUserChargeRecordById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/userChargeRecord/{id}")
    public R updateUserChargeRecordById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserChargeRecordByIdReq req) {
        return R.doResponse(userChargeRecordService.updateUserChargeRecordById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userChargeRecord/{id}")
    public R<UserChargeRecord> getUserChargeRecordById(@PathVariable Integer id) {
        return R.doResponse(userChargeRecordService.getUserChargeRecordById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userChargeRecord")
    public R<PageInfo<UserChargeRecord>> getUserChargeRecordList(@Validated @ModelAttribute GetUserChargeRecordListReq req) {
        return R.doResponse(userChargeRecordService.getUserChargeRecordList(req));
    }
}
