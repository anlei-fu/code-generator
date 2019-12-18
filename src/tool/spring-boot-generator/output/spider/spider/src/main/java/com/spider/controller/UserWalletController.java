

@Api(tags = "")
@RestController
public class UserWalletController {

    @Autowired
    private UserWalletService userWalletService;

    @ApiOperation("")
    @PostMapping(path = "/userWallet")
    public R addUserWallet(@Validated @ModelAttribute AddUserWalletReq req) {
        return R.doResponse(userWalletService.addUserWallet(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/userWallet/{id}")
    public R deleteUserWalletById(@PathVariable Integer id) {
        return R.doResponse(userWalletService.deleteUserWalletById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/userWallet/{id}")
    public R updateUserWalletById(@PathVariable Integer id, @Validated @ModelAttribute UpdateUserWalletByIdReq req) {
        return R.doResponse(userWalletService.updateUserWalletById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userWallet/{id}")
    public R<UserWallet> getUserWalletById(@PathVariable Integer id) {
        return R.doResponse(userWalletService.getUserWalletById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/userWallet")
    public R<PageInfo<UserWallet>> getUserWalletList(@Validated @ModelAttribute GetUserWalletListReq req) {
        return R.doResponse(userWalletService.getUserWalletList(req));
    }
}
