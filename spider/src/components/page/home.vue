<template>
  <div class="container">
    <div class="container-header">
      <span>
        <img
          class="container-banner"
          src="https://file.iviewui.com/dist/7dcf5af41fac2e4728549fa7e73d61c5.svg"
        />
      </span>
      <span>
        <Menu mode="horizontal" class="nav-left-menu" style active-name="1">
          <MenuItem name="1" class="nav-left-menu-item">内容管理</MenuItem>
          <MenuItem name="2" class="nav-left-menu-item">用户管理</MenuItem>
          <MenuItem name="4" class="nav-left-menu-item">综合设置</MenuItem>
        </Menu>
      </span>
      <span class="nav-search">
        <Input suffix="ios-search" placeholder="Enter text" style="width: 400px" />
      </span>
      <span class="nav-right-menu">
        <Dropdown>
          <a href="javascript:void(0)">
            Hello,admin
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem> <Icon type="md-apps" size="18" style="margin-right:6px;"/>Password</DropdownItem>
            <DropdownItem>
              <Icon type="md-settings" size="18" style="margin-right:3px;"/>
              Setting
            </DropdownItem>
            <DropdownItem> <Icon type="ios-mail" size="19" style="margin-right:6px;" />Message</DropdownItem>
            <DropdownItem>
              <Icon type="md-power" size="18" style="margin-right:6px;" />Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
    </div>
    <div class="container-body">
      <div class="container-body-left">
         <h3 style="text-align:center">title</h3>
         <div>
         <Menu active-name="1-2" :open-names="['1']" style="margin-left:20px; width:100%">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="2-1">Option 9</MenuItem>
            <MenuItem name="2-2">Option 10</MenuItem>
            <MenuItem name="2-3">Option 11</MenuItem>
            <MenuItem name="2-4">Option 12</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="3-1">Option 9</MenuItem>
            <MenuItem name="3-2">Option 10</MenuItem>
            <MenuItem name="3-3">Option 11</MenuItem>
            <MenuItem name="3-4">Option 12</MenuItem>
        </Submenu>
    </Menu>
    </div>
      </div>
      <div class="container-body-right">
        <div class="container-body-content-menu"></div>
        <div class="container-body-content">
          <router-view/>
        </div>
      </div>
    </div>
    <div class="container-footer">
      <div>
      <p class="footer-lable">jasmine code generator</p>
      <p class="footer-lable">copyright all rights reserved by fuanlei since 2019</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data: () => {}
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  background-image: url(http://doanarae.com/doanarae/7772-blue-background-image_6592.jpg);
  background-size: cover;

}
::-webkit-scrollbar {
  width: 10px;
  height: 80%;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
.container-header {
  height: 70px;
  background-color: rgb(12, 12, 12);
  text-align: left;
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.container-body {
  padding: 80px;
  padding: 0;
  margin-top: 80px;
  width: 100%;
  text-align: left;

}
.container-footer {
  padding-top: 40px;
  margin-top: 20px;
  background-color: #4c4c4c;
  height: 150px;
}

.container-body-left {
  display: inline-block;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  height: 600px;
  vertical-align: top;
  overflow-y: auto;
  position: fixed;
 
}
.container-body-left ::-webkit-scrollbar{
 width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
}
.container-body-left::-webkit-scrollbar-thumb{
         border-radius: 10px;
        background: #535353;
}
.container-body-left::-webkit-scrollbar-track{
        border-radius: 10px;
        background: #EDEDED;
}
.container-body-top-menu {
  display: inline;
}
.container-body-right {
  display: inline-block;
  margin-top: 20px;
  margin-left: 350px;
  min-width: 1400px;
  background-color: silver;
  min-height: 900px;
}

.container-banner {
    margin-left: 30px;
    height: 35px;
    top: 13px;
    display: inline-block;
    position: relative;
}
.container-body-content{
  margin: 20px;
  text-align: center;
}

.nav-left-menu {
  margin: 0px;
  margin-left: 30px;
  margin-right: 30px;
  display: inline;
  float: none;
  background-color: inherit;
}
.nav-left-menu a {
  color: white;
}
.nav-right-menu {
  margin-right: 50px;
  margin-top: 20px;
  display: inherit;
  float: right;
  font-size: 13px;
}

.nav-left-menu-item {
  padding: 14px 0px;
  margin: 13px;

  font-size: 16px;
  display: inline;
  float: none;
  color: orange;
  font-weight: 400;
}
.nav-left-menu-item :hover {
  background-color: #fff;
}

.ivu-menu-horizontal.ivu-menu-light:after {
  content: "";
  display: block;
  width: 100%;
  height: 0px;
  background: #dcdee2;
  position: absolute;
  bottom: 0;
  left: 0;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover {
  border-bottom: 3px solid #2d8cf0;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item {
  color: white;
}


.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
}

.ivu-dropdown-item:hover {
  background: red;
}
.ivu-menu {
   width: 100%;
    text-align: left;
}

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #2d8cf0;
    /* background: #f0faff; */
    z-index: 2;
}
.footer-lable {
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: white;
}
</style>