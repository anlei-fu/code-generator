<template>
  <MyModal :title="title" ref="modal" @ok="ok" width="40%">
    <Row>
      <Form ref="form" :model="query" :rules="rules" :label-width="100">
        <MyScroll height="180px">
          <Col v-for="item in fields" :key="item.field">
            <FormItem :label="item.lable" :prop="item.prop">
              <MyInput
                v-if="item.type == 'input'"
                v-model="query[item.field]"
                :disabled="!item.editable && !addMode"
              />
              <MySelect
                v-if="item.type == 'select'"
                v-model="query[item.field]"
                :disabled="!item.editable && !addMode"
              />
               <MyCheckbox
                v-if="item.type == 'checkbox'"
                v-model="query[item.field]"
                :disabled="!item.editable && !addMode"
              />
               <MyRadios
                v-if="item.type == 'radio'"
                v-model="query[item.field]"
                :disabled="!item.editable && !addMode"
              />
            </FormItem>
          </Col>
        </MyScroll>
      </Form>
    </Row>
  </MyModal>
</template>
<script>
  import utils from "./../../../common";
  export default {
    data() {
      return {
        fields:@fields,
        rules: @rules,
        apiPrefix: "@apiPrefix",
        query: @query,
      };
    },
 
  };
</script>
