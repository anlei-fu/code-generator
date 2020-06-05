async function main(context, params) {
   try {
      return await context.projectManager.deploy(params);
   } catch (ex) {

   }

}

exports.main = main;