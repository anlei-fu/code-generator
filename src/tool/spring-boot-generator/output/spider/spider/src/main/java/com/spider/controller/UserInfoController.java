

@Api(tags = "")
@RestController
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @ApiOperation("")
    @PostMapping(path = "/userInfo")
    public R addUserInfo(@Validated @ModelAttribute AddUserInfoReq req) {
        return R.doResponse(userInfoService.addUserInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/userInfo/{id}")
    public R deleteUserInfoById(@PathVariable Integer id) {
        return R.doResponse(userInfoService.deleteUserInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/userInfo/{id}")
    public R updateUserInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserInfoByIdReq req) {
        return R.doResponse(userInfoService.updateUserInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userInfo/{id}")
    public R<UserInfo> getUserInfoById(@PathVariable Integer id) {
        return R.doResponse(userInfoService.getUserInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userInfo")
    public R<PageInfo<UserInfo>> getUserInfoList(@Validated @ModelAttribute GetUserInfoListReq req) {
        return R.doResponse(userInfoService.getUserInfoList(req));
    }
}
