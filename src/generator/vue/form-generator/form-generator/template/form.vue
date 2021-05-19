<template>
  <Form ref="form" :model="model" :rules="rules" :label-width="150">
    @items
  </Form>
</template>
<script>
export default {
  data() {
    return {
      model:@model,
      options:{},
      rules:@rules,
    };
  },

  methods:{
      sumbmit(){
this.$refs.form.validate((valid) => {
                
        });
      }
  }
};
</script>