<template>
  <div>
    <Filters>
      @timeRangeHtml
      <span v-for="(obj, key, i) in selectGroupObj" :key="i" v-if="!obj.hide">
        <Select
          :title="obj.title"
          :options="obj.list"
          v-model="query[key]"
          :width="obj.width"
        ></Select>
      </span>
       @radioGroupHtml
      <QueryButton @click="queryData(true)" />
      <CreateButton @click="showAdd()" />
    </Filters>
    <Table :data="model.list">
      <el-table-column
        v-for="item in model.columns"
        header-align="center"
        align="center"
        :key="item.field"
        :min-width="item.minWidth"
        :prop="item.field"
        :label="item.title"
        :sortable="item.sortable"
      >
        <template slot-scope="scope">
          <PlainText
            :value="scope.row[item.field]"
            :filterType="item.filter"
            :format="item.format"
            :color="$ColorPicker(item, scope.row[item.field])"
          />
        </template>
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        label="操作"
        width="120px"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="showDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </Table>
    <Pager
      v-show="model.total > 10"
      :total="model.total"
      :current="query.pageNum"
      @pi-change="onPageIndexChanged"
      @ps-change="onPageSizeChanged"
    />
    <Edit ref="edit" @updated="afterUpdated" />
  </div>
</template>
<script>
/**
 * @description
 * 
 * generated at @date
 */
import listPageMixin from "./../../list-page-mixin";
import Edit from './modal/@nameEdit'
export default {
  components: {
    Edit
  },
  mixins:[listPageMixin],
  data() {
    return {
      @timeRange
      @radioGroup
      apiPrefix:"@apiPrefix",
      pkName:"@pkName",
      title:"@description",
      selects:@selects,
      model: {
      columns:@columns
      },
      query:@query
    }
  }
}
</script>