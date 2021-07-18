<template>
    <Form ref="form" :model="data1" :rules="rules" :label-width="@labelWidth">
      @items
      <OperationPanel
        @save="save"
        @cancel="cancel"
        @create="save"
        :operations="targetOperations"
      />
    </Form>
</template>
<script>
import EditTableFormMixin from "./mixins/edit-table-form-mixin";
import ValidatorUtils from "./../../../lib/validator-utils";
export default {
    mixins:[EditTableFormMixin],
  data() {
    return {
      data1:@model,
      rules:@rules,
    };
  },
   
};
</script>