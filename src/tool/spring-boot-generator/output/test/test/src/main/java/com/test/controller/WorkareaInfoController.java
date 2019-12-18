

@Api(tags = "")
@RestController
public class WorkareaInfoController {

    @Autowired
    private WorkareaInfoService workareaInfoService;

    @ApiOperation("")
    @PostMapping(path = "/workareaInfo")
    public R addWorkareaInfo(@Validated @ModelAttribute AddWorkareaInfoReq req) {
        return R.doResponse(workareaInfoService.addWorkareaInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/workareaInfo/{id}")
    public R deleteWorkareaInfoById(@PathVarible Integer id) {
        return R.doResponse(workareaInfoService.deleteWorkareaInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/workareaInfo/{id}")
    public R updateWorkareaInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateWorkareaInfoByIdReq req) {
        return R.doResponse(workareaInfoService.updateWorkareaInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workareaInfo/{id}")
    public R<WorkareaInfo> getWorkareaInfoById(@PathVarible Integer id) {
        return R.doResponse(workareaInfoService.getWorkareaInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workareaInfo")
    public R<PageInfo<WorkareaInfo>> getWorkareaInfoList(@Validated @ModelAttribute GetWorkareaInfoListReq req) {
        return R.doResponse(workareaInfoService.getWorkareaInfoList(req));
    }
}
