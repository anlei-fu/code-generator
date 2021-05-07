const {SimpleRender} =require("./../../generator/common/renders/SimplePatterRender");
const {FILE} =require("./../../libs")
const RENDER = new SimpleRender({},`${__dirname}/template.sql`);

function main(id,month,day){
  let args ={};
  args.create_time = `2021-${month}-${day} 19:35:00`;
  args.start_time =`2021-${month}-${day} 00:00:00`;
  args.end_time =`2021-${month}-${day} 23:59:59`;
  args.title=`2021${month}${day}`;
  args.id =id;

  FILE.write("./output.sql",RENDER.renderTemplate(args));
}
/*********************************************************************************************************888 */
main(54808,"01","01");