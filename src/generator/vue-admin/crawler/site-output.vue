<template>
  <div>
    <div>
      <span style="float:right">
        <Icon type="md-settings" size="20" @click="showSetting" />
      </span>
    </div>
    <div class="filter">
      
        <MyTimeRange v-model="timeRange"/>
        

      
      <MySelect v-show="showNeedUseProxy" v-model="query.NeedUseProxy" title="NeedUseProxy" :enum="booleanFlag" width="200px" />
      
      <MySelect v-show="showNeedUseCookie" v-model="query.NeedUseCookie" title="NeedUseCookie" :enum="booleanFlag" width="200px" />
      
      <MySelect v-show="showEnableStatus" v-model="query.EnableStatus" title="EnableStatus" :enum="enableStatus" width="200px" />
      

      

      <QueryButton @click="getData(true)" />
      
      <CreateButton @click="showAdd" />
      

      

      
    </div>
    <ListBody
      ref="table"
      filter
      border
      stripe
      columnFilter
      :columns="pageSetting.table.allColumns"
      :datas="data.list"
      

      
      @edit="showEdit"
      
    />
    <div class="pager">
      <MyPager
        :total="data.total"
        @onSizeChanged="onPageSizeChanged"
        @onIndexChanged="onPageIndexChanged"
      />
    </div>
    
      <add ref="add"></add>
      

    
      <edit ref="edit" />
      

    

    <PageSetting ref="setting" :setting="pageSetting" />
  </div>
</template>
<script>


      import add from "./add";
      

    
      import edit from "./edit";
      

    

export default {
    components: {
    
      edit,
      

    
    add,
      

    

  },
  data() {
    return {
      pageSetting:{
	filters: {
		options: [
			{
				label: "needUseProxy",
				value: "needUseProxy"
			},
			{
				label: "enableStatus",
				value: "enableStatus"
			},
			{
				label: "needUseCookie",
				value: "needUseCookie"
			}
		],
		enabledFilters: [
			"needUseProxy",
			"enableStatus",
			"needUseCookie"
		]
	},
	table: {
		columns: [
			{
				title: "id",
				slot: "id",
				key: "id"
			},
			{
				title: "name",
				slot: "name",
				key: "name"
			},
			{
				title: "domain",
				slot: "domain",
				key: "domain"
			},
			{
				title: "description",
				slot: "description",
				key: "description"
			},
			{
				title: "homePageUrl",
				slot: "homePageUrl",
				key: "homePageUrl"
			},
			{
				title: "parentSiteId",
				slot: "parentSiteId",
				key: "parentSiteId"
			},
			{
				title: "crawlNeedUseCookie",
				slot: "crawlNeedUseCookie",
				key: "crawlNeedUseCookie"
			},
			{
				title: "loginScriptId",
				slot: "loginScriptId",
				key: "loginScriptId"
			},
			{
				title: "loginNeedVcode",
				slot: "loginNeedVcode",
				key: "loginNeedVcode"
			},
			{
				title: "loginCaptaType",
				slot: "loginCaptaType",
				key: "loginCaptaType"
			},
			{
				title: "needUseProxy",
				slot: "needUseProxy",
				key: "needUseProxy"
			},
			{
				title: "ipDelayTimeout",
				slot: "ipDelayTimeout",
				key: "ipDelayTimeout"
			},
			{
				title: "ipBlockTimeout",
				slot: "ipBlockTimeout",
				key: "ipBlockTimeout"
			},
			{
				title: "ipHourSpeedLimit",
				slot: "ipHourSpeedLimit",
				key: "ipHourSpeedLimit"
			},
			{
				title: "ipMinuteSpeedLimit",
				slot: "ipMinuteSpeedLimit",
				key: "ipMinuteSpeedLimit"
			},
			{
				title: "ipDaySpeedLimit",
				slot: "ipDaySpeedLimit",
				key: "ipDaySpeedLimit"
			},
			{
				title: "accountAllowCrossIp",
				slot: "accountAllowCrossIp",
				key: "accountAllowCrossIp"
			},
			{
				title: "accountAllowMultiple",
				slot: "accountAllowMultiple",
				key: "accountAllowMultiple"
			},
			{
				title: "accountMinuteSpeedLimit",
				slot: "accountMinuteSpeedLimit",
				key: "accountMinuteSpeedLimit"
			},
			{
				title: "accountHourSpeedLimit",
				slot: "accountHourSpeedLimit",
				key: "accountHourSpeedLimit"
			},
			{
				title: "accountDaySpeedLimit",
				slot: "accountDaySpeedLimit",
				key: "accountDaySpeedLimit"
			},
			{
				title: "accountMaxBlockCount",
				slot: "accountMaxBlockCount",
				key: "accountMaxBlockCount"
			},
			{
				title: "accountBlockTimeout",
				slot: "accountBlockTimeout",
				key: "accountBlockTimeout"
			},
			{
				title: "accountMaxCookieCount",
				slot: "accountMaxCookieCount",
				key: "accountMaxCookieCount"
			},
			{
				title: "accountDelayTimeout",
				slot: "accountDelayTimeout",
				key: "accountDelayTimeout"
			},
			{
				title: "cookieMaxBlockCount",
				slot: "cookieMaxBlockCount",
				key: "cookieMaxBlockCount"
			},
			{
				title: "cookieExpireTimeout",
				slot: "cookieExpireTimeout",
				key: "cookieExpireTimeout"
			},
			{
				title: "cookieDelayTimeout",
				slot: "cookieDelayTimeout",
				key: "cookieDelayTimeout"
			},
			{
				title: "enableStatus",
				slot: "enableStatus",
				key: "enableStatus"
			},
			{
				title: "createTime",
				slot: "createTime",
				key: "createTime"
			}
		],
		defaultShowingColumns: [
			"id",
			"name",
			"domain",
			"description",
			"homePageUrl",
			"parentSiteId",
			"crawlNeedUseCookie",
			"loginScriptId",
			"loginNeedVcode",
			"loginCaptaType",
			"needUseProxy",
			"ipDelayTimeout",
			"ipBlockTimeout",
			"ipHourSpeedLimit",
			"ipMinuteSpeedLimit",
			"ipDaySpeedLimit",
			"accountAllowCrossIp",
			"accountAllowMultiple",
			"accountMinuteSpeedLimit",
			"accountHourSpeedLimit",
			"accountDaySpeedLimit",
			"accountMaxBlockCount",
			"accountBlockTimeout",
			"accountMaxCookieCount",
			"accountDelayTimeout",
			"cookieMaxBlockCount",
			"cookieExpireTimeout",
			"cookieDelayTimeout",
			"enableStatus",
			"createTime"
		],
		showingColumns: []
	}
},

      
      editSetting: {
        model: "",
          title: "",
      },
      

      
      addSetting: {
        model: "",
          title: "",
      },
      

      

      query: ,
        // data set
        data: {
      total: 0,
        list: [],
      },
  };
      },

  // toggle filters show status
  computed: {
      
    showneedUseProxy() {
      return this.$utils.arrayHas.call(this.pageSetting.filters.showingFilters, "needUseProxy");
    },
      
    showenableStatus() {
      return this.$utils.arrayHas.call(this.pageSetting.filters.showingFilters, "enableStatus");
    },
      
    showneedUseCookie() {
      return this.$utils.arrayHas.call(this.pageSetting.filters.showingFilters, "needUseCookie");
    },
      
      },

  methods: {
      
      showAdd() {
        this.editSetting.mode = "add";
        this.editSetting.data = {};
        this.$refs.add.show();
      },
      

      
      showEdit(row) {
        this.editSetting.mode = "edit";
        this.editSetting.data = row;
        this.$refs.add.show();
      },
      

      

      

    

      checkCount() {
      let items = this.$refs.table.getSelection();
      if (items == 0) {
        return false;
      }
    },

    getIds() {
      return this.$utils.pickObjectArrayFileds(
        this.$refs.table.getSelection(),
        "id"
      );
    },

    showSetting() {
      this.$refs.setting.show();
    },

    onPageSizeChanged(newSize) {
      debugger;
      this.query.pageSize = newSize;
      this.getData(true);
    },

    onPageIndexChanged(newIndex) {
      this.query.pageIndex = newIndex;
      this.getData();
    },

    getData(reset) {
      if (reset) {
        this.pageIndex = 1;
      }
  
      
 
      
        this.query.createTimeStart = timeRange[0];
        this.query.createTimeEnd = timeRange[1];
      
        this.$utils.getListData(() => this.$api.site.getList(this.query));
    },
  },
      };
</script>