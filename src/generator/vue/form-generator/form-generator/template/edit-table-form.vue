<template>
  <Form ref="form" :model="data1" :rules="rules" :label-width="150">
    @items
    <OperationPanel
      @save="sumbmit"
      @cancel="cancel"
      @create="sumbmit"
      :operations="targetOperations"
    />
  </Form>
</template>
<script>
export default {
    props: {
    data: Object,
    index: Number,
  },
  data() {
    return {
      data1:@model,
      options:{},
      operations: [
        { label: "取消", event: "cancel", new: true, create: true },
        { label: "保存", event: "save", type: "primary", create: true },
        { label: "新建", event: "create", type: "success", new: true },
      ],
      rules:@rules,
    };
  },
    computed: {
    targetOperations() {
      return this.data.new
        ? this.operations.filter((x) => x.new)
        : this.operations.filter((x) => x.create);
    },
  },
    created() {
    this.data1 = this.$utils.clone(this.data);
  },


   methods: {
    sumbmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          debugger;
          this.$emit("update", this.index, this.data1);
        }
      });
    },
    cancel() {
      this.$emit("cancel", this.index);
    },
  },
};
</script>