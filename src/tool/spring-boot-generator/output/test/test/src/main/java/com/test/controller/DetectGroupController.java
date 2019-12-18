

@Api(tags = "")
@RestController
public class DetectGroupController {

    @Autowired
    private DetectGroupService detectGroupService;

    @ApiOperation("")
    @PostMapping(path = "/detectGroup")
    public R addDetectGroup(@Validated @ModelAttribute AddDetectGroupReq req) {
        return R.doResponse(detectGroupService.addDetectGroup(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectGroup/{id}")
    public R deleteDetectGroupById(@PathVarible Integer id) {
        return R.doResponse(detectGroupService.deleteDetectGroupById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectGroup/{id}")
    public R updateDetectGroupById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDetectGroupByIdReq req) {
        return R.doResponse(detectGroupService.updateDetectGroupById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectGroup/{id}")
    public R<DetectGroup> getDetectGroupById(@PathVarible Integer id) {
        return R.doResponse(detectGroupService.getDetectGroupById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectGroup")
    public R<PageInfo<DetectGroup>> getDetectGroupList(@Validated @ModelAttribute GetDetectGroupListReq req) {
        return R.doResponse(detectGroupService.getDetectGroupList(req));
    }
}
