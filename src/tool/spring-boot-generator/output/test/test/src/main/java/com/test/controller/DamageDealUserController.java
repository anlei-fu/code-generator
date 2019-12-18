

@Api(tags = "")
@RestController
public class DamageDealUserController {

    @Autowired
    private DamageDealUserService damageDealUserService;

    @ApiOperation("")
    @PostMapping(path = "/damageDealUser")
    public R addDamageDealUser(@Validated @ModelAttribute AddDamageDealUserReq req) {
        return R.doResponse(damageDealUserService.addDamageDealUser(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageDealUser/{id}")
    public R deleteDamageDealUserById(@PathVarible Integer id) {
        return R.doResponse(damageDealUserService.deleteDamageDealUserById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageDealUser/{id}")
    public R updateDamageDealUserById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDamageDealUserByIdReq req) {
        return R.doResponse(damageDealUserService.updateDamageDealUserById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageDealUser/{id}")
    public R<DamageDealUser> getDamageDealUserById(@PathVarible Integer id) {
        return R.doResponse(damageDealUserService.getDamageDealUserById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageDealUser")
    public R<PageInfo<DamageDealUser>> getDamageDealUserList(@Validated @ModelAttribute GetDamageDealUserListReq req) {
        return R.doResponse(damageDealUserService.getDamageDealUserList(req));
    }
}
