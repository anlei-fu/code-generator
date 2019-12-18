

@Api(tags = "")
@RestController
public class TaskSiteRelationController {

    @Autowired
    private TaskSiteRelationService taskSiteRelationService;

    @ApiOperation("")
    @PostMapping(path = "/taskSiteRelation")
    public R addTaskSiteRelation(@Validated @ModelAttribute AddTaskSiteRelationReq req) {
        return R.doResponse(taskSiteRelationService.addTaskSiteRelation(req));
    }
    
    @ApiOperation("")
    @DeleteMapping(path = "/taskSiteRelation/{id}")
    public R deleteTaskSiteRelationById(@PathVariable Integer id) {
        return R.doResponse(taskSiteRelationService.deleteTaskSiteRelationById(id));
    }
    
    @ApiOperation("")
    @PutMapping(path = "/taskSiteRelation/{id}")
    public R updateTaskSiteRelationById(@PathVariable Integer id, @Validated @ModelAttribute UpdateTaskSiteRelationByIdReq req) {
        return R.doResponse(taskSiteRelationService.updateTaskSiteRelationById(id, req));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskSiteRelation/{id}")
    public R<TaskSiteRelation> getTaskSiteRelationById(@PathVariable Integer id) {
        return R.doResponse(taskSiteRelationService.getTaskSiteRelationById(id));
    }
    
    @ApiOperation("")
    @GetMapping(path = "/taskSiteRelation")
    public R<PageInfo<TaskSiteRelation>> getTaskSiteRelationList(@Validated @ModelAttribute GetTaskSiteRelationListReq req) {
        return R.doResponse(taskSiteRelationService.getTaskSiteRelationList(req));
    }
}
