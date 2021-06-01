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
import FormMixin from "./../mixins/form-mixin"
import * as utils from "./../../utils"
import * as Enum from "./../../lib/enums"
export default {
    mixins:[FormMixin],
    props: {
    data: Object,
    index: Number,
  },
  data() {
    return {
      Enum,
      data1:@model,
      rules:@rules,
    };
  },
   
};
</script>