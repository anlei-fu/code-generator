

@Api(tags = "")
@RestController
public class WorkerInfoController {

    @Autowired
    private WorkerInfoService workerInfoService;

    @ApiOperation("")
    @PostMapping(path = "/workerInfo")
    public R addWorkerInfo(@Validated @ModelAttribute AddWorkerInfoReq req) {
        return R.doResponse(workerInfoService.addWorkerInfo(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/workerInfo/{id}")
    public R deleteWorkerInfoById(@PathVariable Integer id) {
        return R.doResponse(workerInfoService.deleteWorkerInfoById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/workerInfo/{id}")
    public R updateWorkerInfoById(@PathVariable Integer id, @Validated @ModelAttribute UpdateWorkerInfoByIdReq req) {
        return R.doResponse(workerInfoService.updateWorkerInfoById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workerInfo/{id}")
    public R<WorkerInfo> getWorkerInfoById(@PathVariable Integer id) {
        return R.doResponse(workerInfoService.getWorkerInfoById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/workerInfo")
    public R<PageInfo<WorkerInfo>> getWorkerInfoList(@Validated @ModelAttribute GetWorkerInfoListReq req) {
        return R.doResponse(workerInfoService.getWorkerInfoList(req));
    }
}
