function main(items){
   let output="";
   items.forEach(x=>{
       output+=` {
        path: '${x}',
        name: '${x}',
        component:()=> import("@/components/page/${x}/index"),
      },`;
   });
   console.log(output);
}

main([
        "site",
        "downSystem",
        "downSystemSite",
        "siteAccount",
        "cookie",
        "proxy",
        "crawler",
        "script",
        "task",
        "siteIpBlockMap",
        "siteIpDelayMap"
]);