<template>
  <div class="change-password-wrapper">
    <Form ref="changePasswordForm" :model="changePasswordReq" :rules="rules"  :label-width="80">
      <FormItem prop="oldPassword" >
        Old password<Input v-model="changePasswordReq.newPassword" style="width:300px;" />
      </FormItem>
      <FormItem  prop="newPassword">
        New password <Input v-model="changePasswordReq.oldPassword"  style="width:300px;"/>
      </FormItem>
      <FormItem  prop="newPasswordConfirm">
       Comfirm new password <Input v-model="changePasswordReq.newPasswordConfim" style="width:300px;dsiplay:inline;"  />
      </FormItem>
    </Form>
    <Button @click="changePassword">Submit</Button>
  </div>
</template>
<script>
export default {
  name: "changePassword",
  data: () => {
    return {
      changePasswordReq: {
        oldPassword:"",
        newPassword:"",
        newPasswordConfirm:""
      },
      rules: {
        oldPassword: [],
        newPassword: [],
        newPasswordConfirm: []
      }
    };
  },
  methods: {
    changePassword() {}
  }
};
</script>

<style scoped>
.change-password-wrapper {

  
  margin-top: 200px;

}
</style>