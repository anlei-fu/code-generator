

@Api(tags = "")
@RestController
public class LoginUserController {

    @Autowired
    private LoginUserService loginUserService;

    @ApiOperation("")
    @PostMapping(path = "/loginUser")
    public R addLoginUser(@Validated @ModelAttribute AddLoginUserReq req) {
        return R.doResponse(loginUserService.addLoginUser(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/loginUser/{id}")
    public R deleteLoginUserById(@PathVarible Integer id) {
        return R.doResponse(loginUserService.deleteLoginUserById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/loginUser/{id}")
    public R updateLoginUserById(@PathVarible Integer id, @Validated @ModelAttribute UpdateLoginUserByIdReq req) {
        return R.doResponse(loginUserService.updateLoginUserById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/loginUser/{id}")
    public R<LoginUser> getLoginUserById(@PathVarible Integer id) {
        return R.doResponse(loginUserService.getLoginUserById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/loginUser")
    public R<PageInfo<LoginUser>> getLoginUserList(@Validated @ModelAttribute GetLoginUserListReq req) {
        return R.doResponse(loginUserService.getLoginUserList(req));
    }
}
