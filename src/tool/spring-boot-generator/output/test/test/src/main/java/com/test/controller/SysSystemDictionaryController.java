

@Api(tags = "")
@RestController
public class SysSystemDictionaryController {

    @Autowired
    private SysSystemDictionaryService sysSystemDictionaryService;

    @ApiOperation("")
    @PostMapping(path = "/sysSystemDictionary")
    public R addSysSystemDictionary(@Validated @ModelAttribute AddSysSystemDictionaryReq req) {
        return R.doResponse(sysSystemDictionaryService.addSysSystemDictionary(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/sysSystemDictionary/{dicid}")
    public R deleteSysSystemDictionaryByDicid(@PathVarible Integer dicid) {
        return R.doResponse(sysSystemDictionaryService.deleteSysSystemDictionaryByDicid(dicid));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/sysSystemDictionary/{dicid}")
    public R updateSysSystemDictionaryByDicid(@PathVarible Integer dicid, @Validated @ModelAttribute UpdateSysSystemDictionaryByDicidReq req) {
        return R.doResponse(sysSystemDictionaryService.updateSysSystemDictionaryByDicid(dicid, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/sysSystemDictionary/{dicid}")
    public R<SysSystemDictionary> getSysSystemDictionaryByDicid(@PathVarible Integer dicid) {
        return R.doResponse(sysSystemDictionaryService.getSysSystemDictionaryByDicid(dicid));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/sysSystemDictionary")
    public R<PageInfo<SysSystemDictionary>> getSysSystemDictionaryList(@Validated @ModelAttribute GetSysSystemDictionaryListReq req) {
        return R.doResponse(sysSystemDictionaryService.getSysSystemDictionaryList(req));
    }
}
