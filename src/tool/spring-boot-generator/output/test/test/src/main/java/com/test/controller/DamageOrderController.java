

@Api(tags = "")
@RestController
public class DamageOrderController {

    @Autowired
    private DamageOrderService damageOrderService;

    @ApiOperation("")
    @PostMapping(path = "/damageOrder")
    public R addDamageOrder(@Validated @ModelAttribute AddDamageOrderReq req) {
        return R.doResponse(damageOrderService.addDamageOrder(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/damageOrder/{orderNo}")
    public R deleteDamageOrderByOrderNo(@PathVarible Integer orderNo) {
        return R.doResponse(damageOrderService.deleteDamageOrderByOrderNo(orderNo));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/damageOrder/{orderNo}")
    public R updateDamageOrderByOrderNo(@PathVarible Integer orderNo, @Validated @ModelAttribute UpdateDamageOrderByOrderNoReq req) {
        return R.doResponse(damageOrderService.updateDamageOrderByOrderNo(orderNo, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageOrder/{orderNo}")
    public R<DamageOrder> getDamageOrderByOrderNo(@PathVarible Integer orderNo) {
        return R.doResponse(damageOrderService.getDamageOrderByOrderNo(orderNo));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/damageOrder")
    public R<PageInfo<DamageOrder>> getDamageOrderList(@Validated @ModelAttribute GetDamageOrderListReq req) {
        return R.doResponse(damageOrderService.getDamageOrderList(req));
    }
}
