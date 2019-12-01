<template>
  <div class="common_100_height">
    <div v-show="show.detail" style="padding-left: 30px;padding-right: 30px; background: white;height: 100%">
      <div style="height: calc(100% - 30px);padding-top:30px;">
        <div><span class="title"> 账户信息</span> </div>
        <table border="0" cellpadding="0" cellspacing="20px" style="padding-top: 20px">
          <tr>
            <td class="td_r">姓名</td>
            <td class="td_l" v-if="userList.verifyState.toString()=='0'">{{userList.realName}}已认证</td>
            <td class="td_l" v-if="userList.verifyState==1">未实名</td>
            <td class="td_l" v-if="userList.verifyState==2">未实名</td>
            <td class="td_l" v-if="userList.verifyState==3">实名中</td>
            <td class="td_c"><button class="but" @click="benginSelfCert()" v-if="userList.verifyState==2 ">实名认证</button>
              <button class="but" @click="benginSelfCert()" v-if="userList.verifyState==1">实名认证</button>
              <button class="but" :plain="true" @click="onLater()" v-if="userList.verifyState.toString()=='0'">修改</button>
            </td>
          </tr>
          <tr>
            <td class="td_r">手机号</td>
            <td class="td_l">{{userList.phoneNo}}</td>
            <td class="td_c"><button class="but" @click="AddData('updatePhone',{})" >修改</button></td>
          </tr>
          <tr>
            <td class="td_r">邮箱</td>
            <td class="td_l">{{userList.email}}</td>
            <td class="td_c"><button class="but" @click="AddData('updateEmail',{})" >绑定</button></td>
          </tr>
          <!--<tr>
            <td class="td_r">登录密码修改</td>
            <td class="td_l">1111</td>
            <td class="td_c"><button class="but">修改</button></td>
          </tr>-->
        </table>
        <hr />
        <div><span class="title"> 企业信息</span> <button class="but" @click="showPage('companyCert')"  style="margin-left: 375px">提交认证</button></div>
        <table border="0" cellpadding="0" cellspacing="20px" style="padding-top: 20px">
          <tr v-for=" (item,index) in companyList" :key="index">
            <td class="td_r">企业名称</td>
            <td class="td_l" v-if="item.verifyState.toString()=='0'">{{item.companyName}}(已认证)</td>
            <td class="td_l" v-if="item.verifyState==1">{{item.companyName}}(认证失败)</td>
            <td class="td_l" v-if="item.verifyState==2">{{item.companyName}}(未认证)</td>
            <td class="td_l" v-if="item.verifyState==3">{{item.companyName}}(认证中)</td>
            <td class="td_c">
              <button class="but" @click="Cert(item.id)" v-if="item.verifyState.toString()=='0'">重新认证</button>
              <button class="but" :plain="true" @click="onLater()" v-if=" item.verifyState ==1">修改认证</button>
              <button class="but" :plain="true" @click="onLater()" v-if=" item.verifyState==2">修改认证</button>
            </td>
          </tr>
        </table>
        <hr />
        <!--
      <div><span class="title"> 签署设置</span> </div>
      <table border="0" cellpadding="0" cellspacing="20px" style="padding-top: 20px">
        <tr>
          <td class="td_r">企业名称</td>
          <td class="td_l">已开启</td>
          <td class="td_c">
            <el-switch style="width:80px " v-model="data.isOpen" active-color="#13ce66" inactive-color="#ff4949" active-value="0" inactive-value="1"></el-switch>
          </td>
        </tr>
        <tr>
          <td class="td_r">签署校验密码</td>
          <td class="td_l">1222</td>
          <td class="td_c"><button class="but">修改</button></td>
        </tr>
      </table>-->
      </div>
    </div>
    <div v-show="show.selfCert"  style="background: white;height: 100%">
      <div style="padding-left: 30px;padding-right: 30px; padding-top: 20px;">
        <span class="title1"> 账户管理/个人实名</span><hr />
      </div>
      <div class="self_Cert">
        <div class="qrcode" ref="qrcode"></div>
        <div style="margin-top: 20px">
          <span class="font">请用支付宝扫码进行实名认证</span>
          <span class="font1">扫码成功完成实名认证后,请点击下方按钮</span>
        </div>
        <div style="margin-top: 50px">
          <el-button class="but1" type="primary"  @click="finshSelfCert()">已完成实名认证</el-button>

        </div>

      </div>


    </div>
    <!--  <div v-show="show.company" style="background: white;height: 100%">
        <div style="padding-left: 30px;padding-right: 30px; padding-top: 20px;">
          <span class="title1"> 账户管理/企业绑定</span><hr />
        </div>
        <div class="company">
          <div>


              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm" >
                <el-form-item prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入营业执照上的企业名称" clearable></el-input>
                </el-form-item>
              </el-form>

          </div>
          <div style="margin-top: 30px">
          <button class="but2" @click="submitFormCompanyAdd('ruleForm')" >下一步</button>
        </div>
        </div>
      </div>

      <div v-show="show.companyCreate" style="background: white;height: 100%">
        <div style="padding-left: 30px;padding-right: 30px; padding-top: 20px;">
          <span class="title1"> 账户管理/企业绑定</span><hr />
        </div>
        <div class="company_Create">
          <div>
            <el-image
              style="width: 120px; height: 120px;padding-right: 140px;padding-left: 140px"
              :src="urlcreate"
              fit="fill"
            ></el-image>
          </div>
          <div style="margin-top: 20px">
            <span class="font2">企业创建成功</span>
          </div>
          <div style="margin-top: 40px">
            <span class="font3">完成企业认证,即可以企业名义开展合同签署,</span>
            <span style="padding-left: 44px;color: darkgray">企业认证将采集以下信息:</span>
          </div>
          <div >
            <table style="padding-left: 34px" border="0" cellpadding="0" cellspacing="10px" >
              <tr>
                <td class="font4">①企业名称、统一社会信用代码</td>
              </tr>
              <tr>
                <td class="font4">②企业营业执照彩色原件（或复印件加盖公章）</td>
              </tr>
              <tr>
                <td class="font4">③法定代表人姓名、身份证号</td>
              </tr>
              <tr>
                <td class="font4">④法定代表人身份证正反面彩色原件</td>
              </tr>
              <tr>
                <td class="font4">⑤法定代表人身份证明</td>
              </tr>
            </table>
          </div>
          <div style="margin-top: 30px">
            <el-checkbox v-model="checked" style="padding-left: 44px" >我已阅读并同意</el-checkbox>
          </div>
          <div style="margin-top: 40px">
            <el-button class="but3" type="primary" :disabled="!checked" @click="beginCert()">开始认证</el-button>
          </div>
        </div>
      </div>
  -->
    <div v-show="show.companyCert"  style="background: white;height: 100%">
      <div style="padding-left: 30px;padding-right: 30px; padding-top: 20px;">
        <span class="title1">账户管理/企业绑定</span><hr />
      </div>
      <div class="company_Cert">
        <div>
          <span class="font5" >企业信息</span>
        </div>
        <div style="margin-top: 20px">
          <el-form label-position="right" :inline="true" label-width="180px" :model="formLabelAlign" class="demo-ruleForm"  :rules="rulesForm" ref="formLabelAlign">
            <el-form-item label="公司名称" prop="companyName" >
              <!--<el-input v-model="formLabelAlign.companyName"  readonly="true"></el-input>-->
              <el-input class="input" v-model="formLabelAlign.companyName" placeholder="请输入营业执照上的企业名称"></el-input>
              <!-- {{formLabelAlign.companyName}}-->
            </el-form-item>
            <el-form-item label="公司邮箱" prop="email">
              <el-input class="input" v-model="formLabelAlign.email" placeholder="请输入营业执照上的统一社会信用码"></el-input>
            </el-form-item>
            <el-form-item label="证件类型" prop="identificationType">
              <el-select v-model="formLabelAlign.identificationType" placeholder="请选择证件类型" style="width: 300px">
                <el-option label="营业执照" value=0></el-option>
                <el-option label="统一社会信用码" value=1></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="证件号" prop="licenseNo">
              <el-input class="input" v-model="formLabelAlign.licenseNo" placeholder="请输入证件号"></el-input>
            </el-form-item>
            <el-form-item label="组织类型" prop="organizationType">
              <el-select v-model="formLabelAlign.organizationType" placeholder="请选择证件号" style="width: 300px">
                <el-option label="企业" value=0></el-option>
                <el-option label="事业单位" value=1></el-option>
              </el-select>
            </el-form-item>

            <div style="margin-bottom: 20px" >
              <span class="font6" >法定代表人和被授权人信息</span>
            </div>
            <el-form-item label="法定代表人姓名" prop="legalPerson">
              <el-input class="input" v-model="formLabelAlign.legalPerson" placeholder="请输入法定代表人姓名"></el-input>
            </el-form-item>
            <el-form-item label="被授权人姓名" prop="authorizedPerson">
              <el-input class="input" v-model="formLabelAlign.authorizedPerson" placeholder="请输入被授权人姓名"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人联系电话" prop="contactPhone">
              <el-input class="input" v-model="formLabelAlign.contactPhone" placeholder="请输入法定代表人电话"></el-input>
            </el-form-item>
            <el-form-item label="被授权人联系电话" prop="authorizedPhoneNo">
              <el-input class="input" v-model="formLabelAlign.authorizedPhoneNo" placeholder="请输入被授权人电话"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人身份证" prop="idCardNo">
              <el-input class="input" v-model="formLabelAlign.idCardNo" placeholder="请输入法定代表人身份证号码"></el-input>
            </el-form-item>
            <el-form-item label="被授权人人身份证" prop="authorizedIdNo">
              <el-input class="input" v-model="formLabelAlign.authorizedIdNo" placeholder="请输入被授权人身份证号码"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人身份证正反面" class="test self" style="line-height:100px;" >
           <span style="display: inline-block;margin-right: 15px;"> <el-upload
             class="avatar-uploader"
             action="string"
             :http-request="upload1"
             :show-file-list="false"
             :on-success="handleAvatarSuccessFront"
             :before-upload="beforeAvatarUpload">
              <div class="el-upload__text" style="color: darkgray">正面</div>
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-user-solid  avatar-uploader-icon"></i>
            </el-upload>
           </span>
              <span style="display: inline-block;">
            <el-upload
              class="avatar-uploader"
              action=""
              :http-request="upload2"
              :show-file-list="false"
              :on-success="handleAvatarSuccessBack"
              :before-upload="beforeAvatarUpload">
              <div class="el-upload__text" style="color: darkgray">反面</div>
              <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
              <i v-else class="el-icon-user  avatar-uploader-icon"></i>
            </el-upload>
            </span>
            </el-form-item>
            <el-form-item  label="企业营业执照" class="test" style="line-height:100px;" >
              <el-upload
                class="avatar-uploader"
                action="string"
                :http-request="upload3"
                :on-success="handleAvatarSuccesslicense"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                <i v-else class="el-icon-camera  avatar-uploader-icon"></i>
              </el-upload>
              <span class="el-upload__tip"  style="display: inline-block; width:calc(100% - 160px);">营业执照需为彩色原件(或复印件加盖公章)</span>

            </el-form-item>
            <!-- <el-form-item label="法定代表人身份证明" class="test" style="line-height:100px;" >
               <el-upload
                 class="avatar-uploader"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 :show-file-list="false"
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload">
                 <img v-if="formLabelAlign.idCardPicBack" :src="formLabelAlign.idCardPicBack" class="avatar">
                 <i v-else class="el-icon-camera  avatar-uploader-icon"></i>
               </el-upload>
               <span class="el-upload__tip"  style="display: inline-block; width: calc(100% - 155px);"><el-button type="text">《法定代表人身份证明》模板</el-button></span>

             </el-form-item>-->
          </el-form>
          <div style="margin-top: 30px">
            <button class="but2" @click="submitFormCert('formLabelAlign')" >提交认证</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="show.companyCertTrue"  style="background: white;height: 100%">
      <div style="padding-left: 30px;padding-right: 30px; padding-top: 20px;">
        <span class="title1">账户管理/企业绑定</span><hr />
      </div>
      <div class="company_Cert_True">
        <div>
          <el-image
            style="width: 120px; height: 120px;padding-right: 140px;padding-left: 140px"
            :src="urlCompanyBind"
            fit="fill"
          ></el-image>
        </div>
        <div style="margin-top: 20px">
          <span class="font2">提交企业认证成功</span>
        </div>
        <div style="margin-top:60px">
          <button class="but4" @click="showPage('detail')" >返回</button>
        </div>
      </div>
    </div>
 <div class="qx_mask" v-show="show.updateEmail" style="background: rgba(0,0,0,.5)"></div>
    <transition name="qxmodal" enter-active-class="animated slideInDown" leave-active-class="animated zoomOut">
      <div v-show="show.updateEmail" class="qxmodal" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true" data-backdrop="static">
        <update-email :oldValue="this.userList.email" ref="updateEmail"  @cancel="CloseModel" @submit="CloseModel" :width="400"></update-email>
      </div>
    </transition>
    <div class="qx_mask" v-show="show.updatePhone" style="background: rgba(0,0,0,.5)"></div>
    <transition name="qxmodal" enter-active-class="animated slideInDown" leave-active-class="animated zoomOut">
      <div v-show="show.updatePhone" class="qxmodal" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true" data-backdrop="static">
        <update-phone :oldValue="this.userList.phoneNo" ref="updatePhone"  @cancel="CloseModel" @submit="CloseModel" :width="400"></update-phone>
      </div>
    </transition>
  </div>
</template>



<script>
  import * as Appsettings from '@/Appsettings'
  import QRCode from 'qrcodejs2'
  import UpdateEmail from './modal/UpdateEmail'
  import UpdatePhone from './modal/UpdatePhone'
  export default {
    components: {
      UpdateEmail,
      UpdatePhone
    },
    data() {
      return {
        /* uploadUrl:location.origin+"",*/
        imageUrl:'',
        imageUrl1:'',
        imageUrl2:'',
        uploadUrl:location.origin+Appsettings.api.uploadUrl,//'https://jsonplaceholder.typicode.com/posts/',
        formLabelAlign:{
          userId:'',
          companyName:'',
          email:'',
          organizationType:'',
          identificationType:'',
          licenseNo:'',
          legalPerson:'',
          contactPhone:'',
          idCardNo:'',
          idCardPicFront:'',
          idCardPicBack:'',
          licensePicFront:'',
          authorizedPerson:'',
          authorizedPhoneNo:'',
          authorizedIdNo:'',
          authorizeFile:''
        },
        urlCompanyBind:'',
        userList: {
          verifyState:'',
          phoneNo:'',
          email:'',
          realName:'',
        },
        companyList:[{
          id:'',
          companyName:'',
          verifyState:'',

        }],
        data: {
          isOpen: "0",
        },
        show: {
          detail: true,
          selfCert: false,
          companyCert:false,
          companyCertTrue:false,
          updateEmail:false,
          updatePhone:false
        },

        rulesForm:{
          companyName:[
            { required: true, message: '请输入公司名称', trigger: 'blur' },
            { min: 4, max: 16, message: '公司长度在4到16个字符', trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入公司邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确邮箱', trigger: 'blur' }
          ],
          identificationType:[
            { required: true, message: '请选择证件类型', trigger: 'blur' },

          ],
          organizationType:[
            { required: true, message: '请选择组织类型', trigger: 'blur' },

          ],
          licenseNo:[
            { required: true, message: '请输入证件号', trigger: 'blur' },
            { min: 15, max: 18, message: '长度在 15 到 18个字符', trigger: 'blur' }
          ],
          legalPerson:[
            { required: true, message: '请输入法定代表人姓名', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6个字符', trigger: 'blur' }
          ],
          contactPhone:[
            { required: true, message: '请输入法定代表人手机号', trigger: 'blur' },
            {  pattern: /^1[3456789]{1}\d{9}$/,
              message: '手机号格式有误！',
              trigger: 'blur'
            }
          ],
          idCardNo:[
            { required: true, message: '请输入法定代表人身份证号', trigger: 'blur' },
            {  pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
              message: '证件号码格式有误！',
              trigger: 'blur'
            }
          ],
          authorizedPerson:[
            { required: true, message: '请输入法定代表人姓名', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6个字符', trigger: 'blur' }
          ],
          authorizedPhoneNo:[
            { required: true, message: '请输入法定代表人手机号', trigger: 'blur' },
            {  pattern: /^1[3456789]{1}\d{9}$/,
              message: '手机号格式有误！',
              trigger: 'blur'
            }

          ],
          authorizedIdNo:[
            { required: true, message: '请输入法定代表人身份证号', trigger: 'blur' },
            {  pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
              message: '证件号码格式有误！',
              trigger: 'blur'
            }
          ]

        }
      }
    },
    created() {
      this.show.detail=true

    },
    activated() {
      if(this.show.detail)
        this.selectUserDetails( this.$store.getters.user().userId)

    },
    
 
     
    mounted:{

    },
    computed: {
      watchShowDetail(){
        return this.show.detail
      }
    },
    watch: {
      watchShowDetail(val){
        if(val) {
          this.selectUserDetails(this.$store.getters.user().userId)
        }
      },
      // 'show.detail'(val){
      //   if(val){
      //     this.selectUserDetails(this.$store.getters.user().userId)
      //   }
      // }
    },
    methods: {
         // show modal
    AddData(modalName, item) {
      if (this.$refs[modalName].$children.length > 0)
        this.$refs[modalName].$children[0].resetFields();
        
        this.show[modalName] = true;
    },
     CloseModel() {
      for (let it in this.show) {
        this.show[it] = false;
      }
      this.show.detail=true;
    },
      Cert(data){
        this.formLabelAlign.id =data;
        this.showPage('companyCreate')

      },
      onLater() {
        this.$message({
          showClose: true,
          message: '功能即将上线',
          type:'warning'
        });
      },
      /**
       * 开始实名认证
       **/
      async benginSelfCert(){
        const res = await this.$get(Appsettings.api.getQRCodeUrl)
        if (res.code == 100) {
          this.ShowQRCode(res.userId)
          this.showPage('selfCert')
        } else {
          this.$message({
            message: res.message,
            type: "error"
          })
        }
      },
      async finshSelfCert(){
        const res = await this.$post(Appsettings.api.postVerifySueecced,this.$store.getters.user().userId)
        if (res.code == 100) {
          this.$message({
            message: "实名认证成功",
            type: "success"
          })
          this.showPage('detail')
        } else {
          this.$message({
            message: "未完成实名认证,请扫描二维码进行验证",
            type: "error"
          })
        }

      },
      /*
      * 根据userId查用户详情
      * */
      async selectUserDetails(data){
        const porimsRes =  this.$get(Appsettings.api.getUserInfoById,{userId:data})
        const  porimsRes1 = this.$get(Appsettings.api.getCompanyDetails,{userId:data,pageIndex:0,pageSize:100})
        const res= await  porimsRes
        const res1=await porimsRes1
        if ( res1.code == 100 && res.code==100 ) {
          this.companyList = res1.data.list;
          this.userList =res.data;

        } else {
          this.$message({
            message:res1.message+res.message,
            type: "error"
          })
        }
      },
      /**
       * 二维码生成
       * */
      ShowQRCode(url) {
        this.$nextTick(() => {
          new QRCode(this.$refs.qrcode, {
            text: url,
            width: 300,
            height: 300,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          })
        })
      },

      upload3 (item) {
        console.log(item)
        let formData = new FormData()
        formData.append('file', item.file)
        this.$post(Appsettings.api.uploadUrl,formData).then(res => {
          if(res.code==100){
            this.formLabelAlign.licensePicFront = res.data;
            console.log('上传图片接口-数据', this.formLabelAlign.licensePicFront)
            this.$message.success('上传成功')
          }
          else {
            this.$message.error('上传失败，请重新上传')
          }
        }).catch(err => {
          this.$message.error('上传失败，请重新上传')
          console.log('报错', err)
        })
      },
      upload2 (item) {
        console.log(item)
        let formData = new FormData()
        formData.append('file', item.file)
        this.$post(Appsettings.api.uploadUrl,formData).then(res => {
          if(res.code==100){
            this.formLabelAlign.idCardPicBack = res.data;
            console.log('上传图片接口-数据', this.formLabelAlign.idCardPicBack)
            this.$message.success('上传成功')
          }
          else {
            this.$message.error('上传失败，请重新上传')
          }
        }).catch(err => {
          this.$message.error('上传失败，请重新上传')
          console.log('报错', err)
        })
      },

      upload1 (item) {
        console.log(item)
        let formData = new FormData()
        formData.append('file', item.file)
        this.$post(Appsettings.api.uploadUrl,formData).then(res => {
          if(res.code==100){
            this.formLabelAlign.idCardPicFront = res.data;
            console.log('上传图片接口-数据', this.formLabelAlign.idCardPicFront)
            this.$message.success('上传成功')
          }
          else {
            this.$message.error('上传失败，请重新上传')
          }
        }).catch(err => {
          this.$message.error('上传失败，请重新上传')
          console.log('报错', err)
        })
      },
      /*   /!**
          * 图片上传成功得到URL
          * *!/
         handleAvatarSuccessFront(res, file) {
           this.imageUrl = URL.createObjectURL(file.raw);
           this.formLabelAlign.idCardPicFront = res.data;
         },

         /!**
          * 图片上传成功得到URL
          * *!/
         handleAvatarSuccessBack(res, file) {
           this.imageUrl1 = URL.createObjectURL(file.raw);
           this.formLabelAlign.idCardPicBack = res.data;
           console.log(this.formLabelAlign.idCardPicBack);
         },

         /!**
          * 图片上传成功得到URL
          * *!/
         handleAvatarSuccesslicense(res, file) {
           this.imageUrl2 = URL.createObjectURL(file.raw);
           this.formLabelAlign.licensePicFront = res.data;
           console.log(this.formLabelAlign.licensePicFront);
         },
   */
      /**
       * 图片验证
       * */
      beforeAvatarUpload(file) {
        /* const isJPG = file.type === 'image/jpeg'||file.type==='image/jpg';*/
        const isLt5M = file.size / 1024 / 1024 < 5;

        /*  if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG或者JPEG 格式!');
          }*/
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return /*isJPG && */isLt5M;
      },

      /**
       * 页面转换
       * */
      showPage(val){
        for(var item  in this.show){
          this.show[item]=false;
        }
        this.show[val]=true
      },


      /*  /!**
         * 下一步按钮
         * @param companyName
         * @returns {boolean}
         *!/
        async  addCompany(data){
          this.ruleForm.userId=data
          return await this.$post(Appsettings.api.postAddCompany.this.ruleForm)
        },
        async submitFormCompanyAdd(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              const res = this.addCompany(this.$store.getters.user().userId)
              if(res.code ==100){
                this.formLabelAlign.id=res.data;
                this.showPage('companyCreate')
              }
              else {
                this.$message({
                  message: "公司绑定失败",
                  type: "error"
                })
              }
            } else {
              return false;
            }
          });
        },
        /!**
         * 开始认证按钮
         *!/
        beginCert(){
        if (this.ruleForm.name ) {
            this.formLabelAlign.companyName =this.ruleForm.name
          }
          if(this.list.companyName) {
            this.formLabelAlign.companyName = this.list.companyName
          }
          this.showPage('companyCert')
        },*/
      /**
       * 提交认证
       */
      async addCompany(data){
        this.formLabelAlign.userId=data
        const res=await this.$post(Appsettings.api.postAddCompany,this.formLabelAlign)
        if(res.code==100) {
          this.postverifyCompany(res.data.id)
        }
        else {
          this.$message({
            message: '提交认证失败',
            type: "error"
          })
        }

      },
      async  postverifyCompany(data){
        const res1 = await this.$post(Appsettings.api.postverifyCompany,{companyId:data})
        if (res1.code==100) {
          this.showPage('companyCertTrue')
        }
        else {
          this.$message({
            message:'提交认证失败',
            type: "error"
          })
        }
      },
      submitFormCert(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid){
            this.addCompany(this.$store.getters.user().userId)
          } else {
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped>
  .test>>>.el-form-item__label{
    line-height: 100px !important;
  }

  .self>>>.el-form-item__content{
    margin-right: 78px;
  }
  .title {
    color: #1869ff;
    font-weight: bold;
    font-size: 25px;
  }
  .td_r {
    width: 150px;
    font-size: 18px;
    color: darkgray;
  }
  .td_l {
    width: 250px;
    font-size: 18px;
  }
  .td_c {
    width: 120px;
    text-align: center;
  }
  .but {
    width: 80px;
    background-color: #1869ff;
    color: white;
    border-radius: 5px;
    border: none;
    height: 25px;
    cursor: pointer;
  }
  .self_Cert{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 500px;
    margin-top: -250px;
    margin-left: -200px;
    display: block;
  }
  .title1 {
    font-weight: bold;
    font-size: 22px;
  }
  .font{
    font-weight: bold;
    font-size: 19px;
    padding-right:75px ;
    padding-left:75px;

  }
  .font1{
    font-size: 10px;
    padding-right:78px ;
    padding-left:78px;
    color: darkgray;
  }
  .but1 {
    width: 200px;
    background-color: #1869ff;
    color: white;
    border-radius: 5px;
    border: none;
    height: 40px;
    margin-left: 100px;
    margin-right: 100px;
  }
  .but2 {
    width: 200px;
    background-color: #1869ff;
    color: white;
    border-radius: 5px;
    border: none;
    height: 40px;
    margin-left: 200px;
    margin-right: 200px;
    cursor: pointer;
  }

  .font2{
    font-size:25px ;
    padding-right: 100px;
    padding-left: 100px;
  }

  .company_Cert{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1200px;
    height: 800px;
    margin-top: -400px;
    margin-left: -600px;
    display: block;
  }
  .font5{
    font-weight: bold;
    font-size: 19px;
    padding-right:262px ;
    padding-left:262px;
  }

  .avatar-uploader{
    display: inline-block;
  }

  .avatar-uploader .el-upload {

    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .el-upload__tip {
    font-size: 1px;
    color: #909399;
    margin-top: 0;
  }
  .font6{
    font-weight: bold;
    font-size: 19px;
    padding-right:233px ;
    padding-left:190px;
  }
  .company_Cert_True{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    display: block;
  }
  .but4{
    width: 150px;
    background-color: #1869ff;
    color: white;
    border-radius: 5px;
    border: none;
    height: 50px;
    margin-left: 125px;
    margin-right: 125px;
    cursor: pointer;
  }
  .qrcode{
    width: 300px;
    height: 300px;
    padding-left: 50px;
  }
  .input{
    width: 300px;

  }




</style>
