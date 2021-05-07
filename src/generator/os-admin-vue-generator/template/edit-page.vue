<template>
  <Modal ref="modal" @onOk="submit" :onCancel="close" width="40%" :title="title">
    <el-form ref="form" :model="query" :rules="rules" label-position="right" label-width="120px">
      <el-row :gutter="5" v-for="(items,ind) in fields" :key="ind">
        <el-col :span="12" v-for="(item, index) in items" :key="index">
          <el-form-item :label="item.label" :prop="item.prop">
            <Input v-if="item.type=='text'" width="100%" v-model.trim="query[item.prop]" :readonly="!isAdd&&item.noEdit" :placeHolder="item.placeholder" />
            <Select v-else-if="item.type=='select'" width="100%" :enum="item.enum" :readonly="!isAdd&&item.noEdit" v-model="query[item.prop]"/>
            <Select v-else-if="item.type=='textarea'" width="100%" :readonly="!isAdd&&item.noEdit" v-model="query[item.prop]"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </Modal>
</template>
<script>
/**
 * @description
 * 
 * generated at @date
 */
@numberValidator
import editPageMixin from "./../../../edit-page-mixin";
export default {
 mixins:[editPageMixin],
  data() {
    return {
      description:'@description',
      pkName:'@pkName',
      apiPrefix:'@apiPrefix',
      fields:@fields,
      rules: @rule,
      query:@query,
    }
  },
}
</script>