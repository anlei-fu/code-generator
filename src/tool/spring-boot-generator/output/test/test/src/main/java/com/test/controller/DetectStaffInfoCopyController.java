

@Api(tags = "")
@RestController
public class DetectStaffInfoCopyController {

    @Autowired
    private DetectStaffInfoCopyService detectStaffInfoCopyService;

    @ApiOperation("")
    @PostMapping(path = "/detectStaffInfoCopy")
    public R addDetectStaffInfoCopy(@Validated @ModelAttribute AddDetectStaffInfoCopyReq req) {
        return R.doResponse(detectStaffInfoCopyService.addDetectStaffInfoCopy(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/detectStaffInfoCopy/{id}")
    public R deleteDetectStaffInfoCopyById(@PathVarible Integer id) {
        return R.doResponse(detectStaffInfoCopyService.deleteDetectStaffInfoCopyById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/detectStaffInfoCopy/{id}")
    public R updateDetectStaffInfoCopyById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDetectStaffInfoCopyByIdReq req) {
        return R.doResponse(detectStaffInfoCopyService.updateDetectStaffInfoCopyById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfoCopy/{id}")
    public R<DetectStaffInfoCopy> getDetectStaffInfoCopyById(@PathVarible Integer id) {
        return R.doResponse(detectStaffInfoCopyService.getDetectStaffInfoCopyById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/detectStaffInfoCopy")
    public R<PageInfo<DetectStaffInfoCopy>> getDetectStaffInfoCopyList(@Validated @ModelAttribute GetDetectStaffInfoCopyListReq req) {
        return R.doResponse(detectStaffInfoCopyService.getDetectStaffInfoCopyList(req));
    }
}
