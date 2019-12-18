

@Api(tags = "")
@RestController
public class DetectGoupUserController {

    @Autowired
    private DetectGoupUserService detectGoupUserService;

    @ApiOperation("")
    @PostMapping(path = "/detectGoupUser")
    public R addDetectGoupUser(@Validated @ModelAttribute AddDetectGoupUserReq req) {
        return R.doResponse(detectGoupUserService.addDetectGoupUser(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectGoupUser/{id}")
    public R deleteDetectGoupUserById(@PathVarible Integer id) {
        return R.doResponse(detectGoupUserService.deleteDetectGoupUserById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectGoupUser/{id}")
    public R updateDetectGoupUserById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDetectGoupUserByIdReq req) {
        return R.doResponse(detectGoupUserService.updateDetectGoupUserById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectGoupUser/{id}")
    public R<DetectGoupUser> getDetectGoupUserById(@PathVarible Integer id) {
        return R.doResponse(detectGoupUserService.getDetectGoupUserById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectGoupUser")
    public R<PageInfo<DetectGoupUser>> getDetectGoupUserList(@Validated @ModelAttribute GetDetectGoupUserListReq req) {
        return R.doResponse(detectGoupUserService.getDetectGoupUserList(req));
    }
}
