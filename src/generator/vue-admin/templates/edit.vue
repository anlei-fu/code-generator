<template>
  <MyModal :title="title" ref="modal" @ok="ok" width="40%">
    <Form ref="form" :model="query" :rules="rules" :label-width="100">
      <FormItem label="Fields">
        <MyCheckBoxGroup v-model="showingOptionalFields" :options="optionalFields" />
      </FormItem>
      <MyScroll height="180px">
        <FormItem v-if="showName" label="Name" prop="name">
          <Input v-model="query.name" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showIp" label="Ip" prop="ip">
          <Input v-model="query.ip" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showPort" label="Port" prop="port">
          <Input v-model="query.port" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showCrawlerType" label="CrawlerType" prop="crawlerType">
          <MySelect v-model="query.crawlerType" enum="CrawlerType" width="100%" />
        </FormItem>
        <FormItem v-if="showEnableStatus" label="EnableStatus" prop="enableStatus">
          <MySelect v-model="query.enableStatus" enum="EnableStatus" width="100%" />
        </FormItem>
        <FormItem v-if="showClientVersion" label="ClientVersion" prop="clientVersion">
          <Input v-model="query.clientVersion" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showKey" label="Key" prop="key">
          <Input v-model="query.key" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showUniqueId" label="UniqueId" prop="uniqueId">
          <Input v-model="query.uniqueId" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showMaxConcurrency" label="MaxConcurrency" prop="maxConcurrency">
          <Input v-model="query.maxConcurrency" placeholder="Input value" />
        </FormItem>
        <FormItem v-if="showDescription" label="Description" prop="description">
          <Input v-model="query.description" placeholder="Input value" />
        </FormItem>
      </MyScroll>
    </Form>
  </MyModal>
</template>
<script>
  import utils from "./../../../common";
  export default {
    props: utils.editProps(),
    data() {
      return {
        rules: {
          port: [utils.port()],
          maxConcurrency: [utils.range(10, 10000)],
          ip: [utils.ip()],
        },
        apiPrefix: "@apiPrefix",
        query: @query,
      };
    },
    beforeMount() {
      utils.initOptionsFieldsShows.call(this);
      utils.copyFieldsFrom(this.query, this.model);
    },
    watch: {
      model(newVal) {
        this.$utils.resetQuery(this.query);
        utils.copyFieldsFrom(this.query, newVal);
      },
      showingOptionalFields(newVal) {
        utils.changeShowingOptionalFields.call(this, newVal);
      },
    },
    methods: {
      show() {
        this.$refs.modal.show();
      },
      close() {
        this.$refs.modal.close();
      },
      ok() {
        utils.edit.call(this);
      },
    },
  };
</script>
