<template>
  <Left width="70%">
    <Form ref="form" :model="model" :rules="rules" :label-width="150">
      <FormItem label="Vue版本" prop="vueVersion">
        <MySelect
          v-model="model.vueVersion"
          size="default"
          width="100%"
          :options="Enum.VueVersion"
          placeHolder="请选择Vue版本"
        />
      </FormItem>
      <FormItem label="Ui框架" prop="uiFrameWorkType">
        <MySelect
          v-model="model.uiFrameWorkType"
          size="default"
          width="100%"
          :options="Enum.UiFrameWork"
          placeHolder="请选择Ui框架"
        />
      </FormItem>
      <FormItem
        label="Element版本"
        v-if="model.uiFrameWorkType == 'element'"
        prop="elementVersion"
      >
        <MySelect
          v-model="model.elementVersion"
          size="default"
          width="100%"
          :options="Enum.ElementVersion"
          placeHolder="请选择Element版本"
        />
      </FormItem>
      <FormItem
        v-if="model.uiFrameWorkType == 'iview'"
        label="Iview版本"
        prop="iviewVersion"
      >
        <MySelect
          v-model="model.iviewVersion"
          size="default"
          width="100%"
          :options="Enum.IViewVersion"
          placeHolder="请选择Iview版本"
        />
      </FormItem>
      <FormItem label="启用Debug工具" prop="useDebugger">
        <MyCheckbox v-model="model.useDebugger" />
      </FormItem>
      <OperationPanel size="default" @save="submit" :operations="operations" />
    </Form>
  </Left>
</template>
<script>
import ConfigFormMixin from "./../mixins/config-form-mixin";
import ValidatorUtils from "./../../lib/validator-utils";
export default {
  mixins: [ConfigFormMixin],
  data() {
    return {
      model: {
        vueVersion: null,
        uiFrameWorkType: null,
        elementVersion: null,
        iviewVersion: null,
        useDebugger: null,
      },
      rules: {
        vueVersion: [ValidatorUtils.RuleFactory.require("Vue版本不能为空")],
        uiFrameWorkType: [ValidatorUtils.RuleFactory.require("Ui框架不能为空")],
        elementVersion: [
          ValidatorUtils.RuleFactory.require("Element版本不能为空"),
        ],
        iviewVersion: [ValidatorUtils.RuleFactory.require("Iview版本不能为空")],
        // useDebugger: [
        //   {
        //     required: true,
        //     message: "启用Debug工具不能为空",
        //     trigger: "change",
        //   },
        // ],
      },
    };
  },
};
</script>