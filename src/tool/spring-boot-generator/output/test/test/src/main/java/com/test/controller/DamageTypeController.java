

@Api(tags = "")
@RestController
public class DamageTypeController {

    @Autowired
    private DamageTypeService damageTypeService;

    @ApiOperation("")
    @PostMapping(path = "/damageType")
    public R addDamageType(@Validated @ModelAttribute AddDamageTypeReq req) {
        return R.doResponse(damageTypeService.addDamageType(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageType/{id}")
    public R deleteDamageTypeById(@PathVarible Integer id) {
        return R.doResponse(damageTypeService.deleteDamageTypeById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageType/{id}")
    public R updateDamageTypeById(@PathVarible Integer id, @Validated @ModelAttribute UpdateDamageTypeByIdReq req) {
        return R.doResponse(damageTypeService.updateDamageTypeById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageType/{id}")
    public R<DamageType> getDamageTypeById(@PathVarible Integer id) {
        return R.doResponse(damageTypeService.getDamageTypeById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageType")
    public R<PageInfo<DamageType>> getDamageTypeList(@Validated @ModelAttribute GetDamageTypeListReq req) {
        return R.doResponse(damageTypeService.getDamageTypeList(req));
    }
}
