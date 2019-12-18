

@Api(tags = "")
@RestController
public class DamageRepositoryController {

    @Autowired
    private DamageRepositoryService damageRepositoryService;

    @ApiOperation("")
    @PostMapping(path = "/damageRepository")
    public R addDamageRepository(@Validated @ModelAttribute AddDamageRepositoryReq req) {
        return R.doResponse(damageRepositoryService.addDamageRepository(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageRepository/{orderDetailId}")
    public R deleteDamageRepositoryByOrderDetailId(@PathVarible Integer orderDetailId) {
        return R.doResponse(damageRepositoryService.deleteDamageRepositoryByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageRepository/{orderDetailId}")
    public R updateDamageRepositoryByOrderDetailId(@PathVarible Integer orderDetailId, @Validated @ModelAttribute UpdateDamageRepositoryByOrderDetailIdReq req) {
        return R.doResponse(damageRepositoryService.updateDamageRepositoryByOrderDetailId(orderDetailId, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepository/{orderDetailId}")
    public R<DamageRepository> getDamageRepositoryByOrderDetailId(@PathVarible Integer orderDetailId) {
        return R.doResponse(damageRepositoryService.getDamageRepositoryByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepository")
    public R<PageInfo<DamageRepository>> getDamageRepositoryList(@Validated @ModelAttribute GetDamageRepositoryListReq req) {
        return R.doResponse(damageRepositoryService.getDamageRepositoryList(req));
    }
}
