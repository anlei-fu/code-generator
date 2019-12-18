

@Api(tags = "")
@RestController
public class DivisionUserController {

    @Autowired
    private DivisionUserService divisionUserService;

    @ApiOperation("")
    @PostMapping(path = "/divisionUser")
    public R addDivisionUser(@Validated @ModelAttribute AddDivisionUserReq req) {
        return R.doResponse(divisionUserService.addDivisionUser(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/divisionUser/{id}")
    public R deleteDivisionUserById(@PathVarible Integer id) {
        return R.doResponse(divisionUserService.deleteDivisionUserById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/divisionUser/{id}")
    public R updateDivisionUserById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDivisionUserByIdReq req) {
        return R.doResponse(divisionUserService.updateDivisionUserById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/divisionUser/{id}")
    public R<DivisionUser> getDivisionUserById(@PathVarible Integer id) {
        return R.doResponse(divisionUserService.getDivisionUserById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/divisionUser")
    public R<PageInfo<DivisionUser>> getDivisionUserList(@Validated @ModelAttribute GetDivisionUserListReq req) {
        return R.doResponse(divisionUserService.getDivisionUserList(req));
    }
}
