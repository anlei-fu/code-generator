

@Api(tags = "")
@RestController
public class DamageRepositoryDeviceController {

    @Autowired
    private DamageRepositoryDeviceService damageRepositoryDeviceService;

    @ApiOperation("")
    @PostMapping(path = "/damageRepositoryDevice")
    public R addDamageRepositoryDevice(@Validated @ModelAttribute AddDamageRepositoryDeviceReq req) {
        return R.doResponse(damageRepositoryDeviceService.addDamageRepositoryDevice(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageRepositoryDevice/{orderDetailId}")
    public R deleteDamageRepositoryDeviceByOrderDetailId(@PathVarible Integer orderDetailId) {
        return R.doResponse(damageRepositoryDeviceService.deleteDamageRepositoryDeviceByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageRepositoryDevice/{orderDetailId}")
    public R updateDamageRepositoryDeviceByOrderDetailId(@PathVarible Integer orderDetailId, @Validated @ModelAttribute UpdateDamageRepositoryDeviceByOrderDetailIdReq req) {
        return R.doResponse(damageRepositoryDeviceService.updateDamageRepositoryDeviceByOrderDetailId(orderDetailId, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryDevice/{orderDetailId}")
    public R<DamageRepositoryDevice> getDamageRepositoryDeviceByOrderDetailId(@PathVarible Integer orderDetailId) {
        return R.doResponse(damageRepositoryDeviceService.getDamageRepositoryDeviceByOrderDetailId(orderDetailId));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageRepositoryDevice")
    public R<PageInfo<DamageRepositoryDevice>> getDamageRepositoryDeviceList(@Validated @ModelAttribute GetDamageRepositoryDeviceListReq req) {
        return R.doResponse(damageRepositoryDeviceService.getDamageRepositoryDeviceList(req));
    }
}
