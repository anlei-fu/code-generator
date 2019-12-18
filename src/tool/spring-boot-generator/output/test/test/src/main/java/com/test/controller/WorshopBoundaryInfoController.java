

@Api(tags = "")
@RestController
public class WorshopBoundaryInfoController {

    @Autowired
    private WorshopBoundaryInfoService worshopBoundaryInfoService;

    @ApiOperation("")
    @PostMapping(path = "/worshopBoundaryInfo")
    public R addWorshopBoundaryInfo(@Validated @ModelAttribute AddWorshopBoundaryInfoReq req) {
        return R.doResponse(worshopBoundaryInfoService.addWorshopBoundaryInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/worshopBoundaryInfo/{id}")
    public R deleteWorshopBoundaryInfoById(@PathVarible Integer id) {
        return R.doResponse(worshopBoundaryInfoService.deleteWorshopBoundaryInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/worshopBoundaryInfo/{id}")
    public R updateWorshopBoundaryInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateWorshopBoundaryInfoByIdReq req) {
        return R.doResponse(worshopBoundaryInfoService.updateWorshopBoundaryInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/worshopBoundaryInfo/{id}")
    public R<WorshopBoundaryInfo> getWorshopBoundaryInfoById(@PathVarible Integer id) {
        return R.doResponse(worshopBoundaryInfoService.getWorshopBoundaryInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/worshopBoundaryInfo")
    public R<PageInfo<WorshopBoundaryInfo>> getWorshopBoundaryInfoList(@Validated @ModelAttribute GetWorshopBoundaryInfoListReq req) {
        return R.doResponse(worshopBoundaryInfoService.getWorshopBoundaryInfoList(req));
    }
}
