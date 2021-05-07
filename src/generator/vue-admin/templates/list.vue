<template>
  <div>
    <MyPageSettingButton @click="showSetting" />
    <MyFilter>
      @timeRangeHtml @selectHtml @radioGroupHtml
      <span>
        <QueryButton @click="getData(true)" />
        @buttonHtml
      </span>
    </MyFilter>
    <MyTable
      ref="table"
      filter
      border
      stripe
      columnFilter
      :columns="model.columns"
      :data="model.data.list"
      @tableDeleteHtml
      @tableEditHtml
    />
    <MyPager
      :current="query.pageIndex"
      :total="model.data.total"
      @onSizeChanged="onPageSizeChanged"
      @onIndexChanged="onPageIndexChanged"
    />
    @editHtml
  </div>
</template>
<script>
@editImport
import utils from "./../../../common";
import listPageMixin from "./../../../lib/mixins/listPageMixin";
export default {
  @editComponent
  mixins: [listPageMixin],
  data() {
    return {
      model: {
        columns: @columns,
      },
      @selectContent
      apiPrefix: "@apiPrefix",
      pk:"@pkField",
      @timeRangeContent
      @query,
    };
  },
};
</script>
