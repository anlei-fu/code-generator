

@Api(tags = "")
@RestController
public class BureauLineOrderController {

    @Autowired
    private BureauLineOrderService bureauLineOrderService;

    @ApiOperation("")
    @PostMapping(path = "/bureauLineOrder")
    public R addBureauLineOrder(@Validated @ModelAttribute AddBureauLineOrderReq req) {
        return R.doResponse(bureauLineOrderService.addBureauLineOrder(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/bureauLineOrder/{id}")
    public R deleteBureauLineOrderById(@PathVarible Integer id) {
        return R.doResponse(bureauLineOrderService.deleteBureauLineOrderById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/bureauLineOrder/{id}")
    public R updateBureauLineOrderById(@PathVarible Integer id, @Validated @ModelAttribute UpdateBureauLineOrderByIdReq req) {
        return R.doResponse(bureauLineOrderService.updateBureauLineOrderById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/bureauLineOrder/{id}")
    public R<BureauLineOrder> getBureauLineOrderById(@PathVarible Integer id) {
        return R.doResponse(bureauLineOrderService.getBureauLineOrderById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/bureauLineOrder")
    public R<PageInfo<BureauLineOrder>> getBureauLineOrderList(@Validated @ModelAttribute GetBureauLineOrderListReq req) {
        return R.doResponse(bureauLineOrderService.getBureauLineOrderList(req));
    }
}
