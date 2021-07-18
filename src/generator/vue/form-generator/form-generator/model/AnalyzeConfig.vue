<template>
  <Form ref="form" :model="model" :rules="rules" :label-width="150">
    <Row
      ><Col :span="4">
        <FormItem label="数据库冗余分析" prop="tableRedundency">
          <MyCheckbox v-model="model.tableRedundency" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="自动识别外键" prop="foreignKeyAnalyze">
          <MyCheckbox v-model="model.foreignKeyAnalyze" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="索引分析" prop="foreignKeyAnalyze">
          <MyCheckbox v-model="model.foreignKeyAnalyze" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="自动重名称" prop="autoRename">
          <MyCheckbox v-model="model.autoRename" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="自动识别控件类型" prop="autoControlType">
          <MyCheckbox v-model="model.autoControlType" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="自动识别JavaType" prop="autoJavaType">
          <MyCheckbox v-model="model.autoJavaType" /> </FormItem></Col></Row
    ><Row
      ><Col :span="4">
        <FormItem label="代码提示" prop="codeIntelligence">
          <MyCheckbox v-model="model.codeIntelligence" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="级联分析" prop="cascaderAnalyze">
          <MyCheckbox v-model="model.cascaderAnalyze" /> </FormItem></Col
      ><Col :span="4">
        <FormItem label="拼写检查" prop="spellCheck">
          <MyCheckbox v-model="model.spellCheck" /> </FormItem></Col
    ></Row>
    <OperationPanel size="default" @save="submit" :operations="operations" />
  </Form>
</template>
<script>
import ConfigFormMixin from "./../../mixins/config-form-mixin";
import ValidatorUtils from "./../../../lib/validator-utils";
export default {
  mixins: [ConfigFormMixin],
  data() {
    return {
      model: {
        tableRedundency: null,
        foreignKeyAnalyze: null,
        autoRename: null,
        autoControlType: null,
        autoJavaType: null,
        codeIntelligence: null,
        cascaderAnalyze: null,
        spellCheck: null,
      },
      options: {},
      rules: {
        // tableRedundency: [
        //   ValidatorUtils.RuleFactory.require("数据库冗余分析不能为空")
        // ],
        // foreignKeyAnalyze: [
        //    ValidatorUtils.RuleFactory.require("索引分析不能为空")
        // ],
        // autoRename: [
        //   ValidatorUtils.RuleFactory.require("自动重名称不能为空")
        // ],
        // autoControlType: [
        //     ValidatorUtils.RuleFactory.require("自动识别控件类型不能为空")
        // ],
        // autoJavaType: [
        //   {
        //     required: true,
        //     message: "自动识别JavaType不能为空",
        //     trigger: "change",
        //   },
        // ],
        // codeIntelligence: [
        //   {
        //     required: true,
        //     message: "代码提示不能为空",
        //     trigger: "change",
        //   },
        // ],
        // cascaderAnalyze: [
        //   {
        //     required: true,
        //     message: "级联分析不能为空",
        //     trigger: "change",
        //   },
        // ],
        // spellCheck: [
        //   {
        //     required: true,
        //     message: "拼写检查不能为空",
        //     trigger: "change",
        //   },
        // ],
      },
    };
  },

  methods: {
    sumbmit() {
      this.$refs.form.validate((valid) => {});
    },
  },
};
</script>