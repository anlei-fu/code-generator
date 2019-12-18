

@Api(tags = "")
@RestController
public class DamageRepositoryPositionController {

    @Autowired
    private DamageRepositoryPositionService damageRepositoryPositionService;

    @ApiOperation("")
    @PostMapping(path = "/damageRepositoryPosition")
    public R addDamageRepositoryPosition(@Validated @ModelAttribute AddDamageRepositoryPositionReq req) {
        return R.doResponse(damageRepositoryPositionService.addDamageRepositoryPosition(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageRepositoryPosition/{orderDetailId}")
    public R deleteDamageRepositoryPositionByOrderDetailId(@PathVarible Integer orderDetailId) {
        return R.doResponse(damageRepositoryPositionService.deleteDamageRepositoryPositionByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageRepositoryPosition/{orderDetailId}")
    public R updateDamageRepositoryPositionByOrderDetailId(@PathVarible Integer orderDetailId, @Validated @ModelAttribute UpdateDamageRepositoryPositionByOrderDetailIdReq req) {
        return R.doResponse(damageRepositoryPositionService.updateDamageRepositoryPositionByOrderDetailId(orderDetailId, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryPosition/{orderDetailId}")
    public R<DamageRepositoryPosition> getDamageRepositoryPositionByOrderDetailId(@PathVarible Integer orderDetailId) {
        return R.doResponse(damageRepositoryPositionService.getDamageRepositoryPositionByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryPosition")
    public R<PageInfo<DamageRepositoryPosition>> getDamageRepositoryPositionList(@Validated @ModelAttribute GetDamageRepositoryPositionListReq req) {
        return R.doResponse(damageRepositoryPositionService.getDamageRepositoryPositionList(req));
    }
}
