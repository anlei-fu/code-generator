<template>
  <div>
    <div class="login-container">
      <div class="login-header">
        <img
          class="login-banner"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <span class="login-lable">Jasmine code generator</span>
      </div>
      <div class="login-item-container">
        <div class="login-title">
          <div>
            <Icon type="md-contact" size="75" />
          </div>
          <p class="login-title-lable">Welcome, please login</p>
        </div>
        <div class="login-body">
          <Form ref="userLoginForm" :rules="rules" :model="user" inline>
            <div class="login-row">
              <FormItem prop="name">
                <Input v-model="user.name" size="large" placeholder="Username" style="width: 350px">
                  <Icon type="ios-contact" slot="prefix" />
                </Input>
              </FormItem>
            </div>
            <div class="login-row">
              <FormItem prop="password">
                <Input
                  v-model="user.password"
                  size="large"
                  type="Password"
                  placeholder="Password"
                  style="width: 350px"
                >
                  <Icon type="ios-keypad" slot="prefix" />
                </Input>
              </FormItem>
            </div>
            <div class="login-row">
              <Checkbox v-model="single" size="large" style="width:300px">Remember me</Checkbox>
            </div>
            <div class="login-button">
              <Button type="primary" size="large" style="width:350px;" @click="login">Login</Button>
            </div>
          </Form>
        </div>
      </div>

      <div class="login-footer">
        <p class="footer-lable">jasmine code generator</p>
        <p class="footer-lable">copyright all rights reserved by fuanlei since 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => {
    return {
      user:{
        name:"",
        password:""
      },
      rules:{
        name:[{required: true, message: 'Please fill in the user name', trigger: 'blur'}],
        password:[{required: true, message: 'Please fill in the user name', trigger: 'blur'}]
      }
    };
  },
  methods: {
    login() {

       this.$refs["userLoginForm"].validate((valid) => {
                    if (valid) {
                        this.$store.state.userInfo.isLogined = true;
                        this.$router.push({ path: "/" });
                        return;
                    } 
                });
    }
  }
};
</script>
<style scoped>
.login-banner {
  margin-left: 30px;
  height: 35px;
  top: 13px;
  display: inline-block;
  position: sticky;
}

.login-title-lable {
  font-size: 18px;
}

.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(242, 242, 242);
  background-image: url(https://newmibridges.michigan.gov/resource/1564238600000/ISD_Icons/landing-page/group-3.svg);
}

.login-lable {
  margin-left: 18px;
  text-align-last: center;
}

.login-header {
  height: 7%;
  background-color: rgb(12, 12, 12);
  text-align: left;
}

.login-item-container {
  margin: auto;
  width: 350px;
  height: 78%;
  padding-top: 100px;
}

.login-row {
  margin: auto;
  margin-top: 20px;
  text-align: left;
}

.login-button {
  margin: auto;
  margin-top: 20px;
  text-align: center;
}
.login-footer {
  height: 15%;
  padding-top: 40px;
  background-color: #4c4c4c;
}

.footer-lable {
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 2px #999;
}
</style>
