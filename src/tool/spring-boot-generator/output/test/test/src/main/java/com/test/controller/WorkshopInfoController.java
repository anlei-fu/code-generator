

@Api(tags = "")
@RestController
public class WorkshopInfoController {

    @Autowired
    private WorkshopInfoService workshopInfoService;

    @ApiOperation("")
    @PostMapping(path = "/workshopInfo")
    public R addWorkshopInfo(@Validated @ModelAttribute AddWorkshopInfoReq req) {
        return R.doResponse(workshopInfoService.addWorkshopInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/workshopInfo/{id}")
    public R deleteWorkshopInfoById(@PathVarible Integer id) {
        return R.doResponse(workshopInfoService.deleteWorkshopInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/workshopInfo/{id}")
    public R updateWorkshopInfoById(@PathVarible Integer id, @Validated @ModelAttribute UpdateWorkshopInfoByIdReq req) {
        return R.doResponse(workshopInfoService.updateWorkshopInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workshopInfo/{id}")
    public R<WorkshopInfo> getWorkshopInfoById(@PathVarible Integer id) {
        return R.doResponse(workshopInfoService.getWorkshopInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workshopInfo")
    public R<PageInfo<WorkshopInfo>> getWorkshopInfoList(@Validated @ModelAttribute GetWorkshopInfoListReq req) {
        return R.doResponse(workshopInfoService.getWorkshopInfoList(req));
    }
}
