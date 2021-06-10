
# CrudTable 

## 特性
- 基于el-table,el-form二次封装,表单表格支持可视化配置
- 表单设计器
  - 基础组件: 内置element-ui表单组件
  - 高级组件: 
    - `级联选择器` (el-cascader)
    - `富文本编辑器` Tinymce
    - `附件模块` (FileUpload)
    - `表格模块` (CrudTable)
    - `树形下拉框` (vue-treeSelect)
    - `自定义插槽`
- 表格设计器 

## 开始使用

### 安装

```
npm i anshare-multifunction-crud -S
```

### CDN

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- 引入ProCrud CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/anshare-multifunction-crud@0.0.5/lib/ProCrud.css" />
    <!-- 引入ElementUI CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />
  </head>
  <body>
    <div id="app">
      <el-button @click="showDialog('form')" type="primary">打开表单设计器</el-button>
      <el-button @click="showDialog('table')" type="danger">打开表格设计器</el-button>
      <form-designer-dialog ref="form"></form-designer-dialog>
      <table-designer-dialog ref="table"></table-designer-dialog>
      <crud-table tableName="dept" tableTitle="表格示例"></crud-table>
    </div>
  </body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import ElementUI -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <!-- import AnshareMultifunctionCrud -->
  <script src="https://cdn.jsdelivr.net/npm/anshare-multifunction-crud@0.0.5/lib/ProCrud.umd.min.js"></script>

  <script>
    new Vue({
      el: "#app",
      methods:{
        showDialog(name){
          this.$refs[name].showDialog();
        }
      }
    });
  </script>
</html>
  ```

### 本地调试

- 本地debug

``` javascript
// 调试代码位于examples/App.vue
npm start
```
- lib包debug
``` javascript
// 1、umd打包
npm run demo
// 2、打开index.html
```


### 引入 AnshareMultifunctionCrud

支持完整引入及按需引入,*该插件基于ElementUI封装,注意引用顺序*

#### 完整引入
  
  在 main.js 中写入以下内容：

  ``` javascript
  import Vue from 'vue';
  import AnshareMultifunctionCrud from 'anshare-multifunction-crud';
  import 'anshare-multifunction-crud/lib/AnshareCrud.css';
  import * as formApi from '@/api/system/form';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';

/**
 * AnshareMultifunctionCrud
 * 插件内部需要动态传入表单表格请求方法
 */
const crudOption = {
  ...formApi,
  formDesignDbName: 'conf_form',
  tableDesignDbName: 'conf_dynamictables',
  getCodeValueUrl: '/conf/ad/codelist/getCodeValue',
  codeTypeDbName: 'conf_ad_codelist_type',
};
if (process.env.VUE_APP_CDN === 'true') {
  Vue.prototype.$CRUD = crudOption;
} else {
  Vue.use(AnshareMultifunctionCrud, crudOption);
}

  ```
  
#### 按需引入
``` javascript
  import { GenerateForm } from 'anshare-multifunction-crud';
  Vue.use(GenerateForm);

  import Vue from 'vue';
  import { GenerateForm,CrudTable } from 'anshare-multifunction-crud';
  import App from './App.vue';

  Vue.component(GenerateForm.name, GenerateForm);
  Vue.component(CrudTable.name, CrudTable);

  /* 或写为
  * Vue.use(GenerateForm)
  * Vue.use(CrudTable)
  */

  new Vue({
    el: '#app',
    render: h => h(App)
  });

```

#### 完整组件列表

- `GenerateForm` // 根据表单设计器json自动渲染表单

- `FormDesignerDialog` // 表单设计器

- `TableDesignerDialog` // 表格设计器

- `CrudTable` // 高级增删改查 ProTable

## 组件文档

> Ps: CrudTable继承自[el-table](https://element.eleme.cn/#/zh-CN/component/table).官方`props`,`events`均可直接使用.此处只列出本插件新增props,events.

### CrudTable

#### Props

|          参数          |                               说明                                |      类型       |                 可选值                  |  默认值   |
| :--------------------: | :---------------------------------------------------------------: | :-------------: | :-------------------------------------: | :-------: |
|     [el-table Props](https://element.eleme.cn/#/zh-CN/component/table)     |                             [见官网](https://element.eleme.cn/#/zh-CN/component/table)                               |      -      |                    -                    |     -     |
|     columns      |                              指定表格json(传入后则不发出请求,支持tree结构json展示多级表头)                               |      Array      |                    -                    |     -     |
|     expandRowKeys      |                              展开行                               |      Array      |                    -                    |     -     |
|       listField        |                        response 中数据位置                        |     String      |             data/data.list              | data.list |
|      setReadOnly       | GenerateFormDialog 中的表单禁用.null 表示均可编辑;{}表示全部只读; |     Object      |   null/{}/{whiteList:{},blackList:{}}   |   null    |  |
|       isMultiple       |                           是否开启多选                            |     Boolean     |               true,false                |   false   |
|        prefill         |                      表单预填项(赋值初始值)                       |     Object      |                    -                    |   null    |
|      appendToBody      |                 表单对话框是否插入至 body 元素上                  |     Boolean     |               true/false                |   false   |
|       tableName        |                               表名                                |     String      |                    -                    |    ''     |
|   tableDesignerName    |      用于请求表格设计 json 的 name,不传则默认读取 tableName       |     String      |                    -                    |   null    |
| dialogFormDesignerName |    对话框内加载 FormDesigner 的表名,,不传则默认读取 tableName     |     String      |                    -                    |   null    |
|     orderCondition     |                             排序条件                              |     String      |                    -                    |   null    |
|      visibleList       |                         内部元素显示控制(详情见下方)                          |     Object      |                    -                    |    {}     |
|       tableTitle       |                             表格标题                              |     String      |                    -                    |    ''     |
|      tableParams       |                   表格请求参数(带查询参数请求)                    |  Object,Array   |                    -                    |    {}     |
|        textMap         |                          表单对话框标题                           |     Object      | { add:'添加',edit:'编辑',detail:'查看'} |    {}     |
|     promiseForDel      |                    自定义删除按钮 promise 请求                    |    Function     |      Function(row)      |   -    |
|    promiseForSelect    |                    自定义列表查询 promise 请求                    |    Function     |                    Function(searchCondition)                   |   -    |
|     btnAddOnClick      |                         添加按钮点击事件                          |    Function     |                    -                    |   -    |
|    btnRowAddOnClick    |                    表格行中的添加按钮点击事件                     |    Function     |                    Function(row)                    |   -    |
|     btnEditOnClick     |                         编辑按钮点击事件                          |    Function     |                    Function(row)                   |   -    |
|    btnDetailOnClick    |                         查看按钮点击事件                          |    Function     |                    Function(row)                   |    -     |
|    btnDelVisibleFunc    |                    表格行中的删除按钮是否显示事件                     |    Function     |                    Function(row)                    |   -    |
|    btnEditVisibleFunc    |                    表格行中的编辑按钮是否显示事件                     |    Function     |                    Function(row)                    |   -    |
|    btnDetailVisibleFunc    |                    表格行中的查看按钮是否显示事件                     |    Function     |                    Function(row)                    |   -    |
|     showPagination     |                      自定义列表 config 请求                       |     Boolean     |               true/false                |   true    |
|      remoteFuncs       |               远程数据方法(用于表单内远端数据请求)                |     Object      |                    -                    |    {}     |
|      pageSize          |                     动态传入分页                     | Array |                    -                    |   [10,50,100]    |
|      maxHeightMinus    |                     表格自适应高度需要减去的高度值                     | Number |                    -                    |   285    |
|      fullHeight        |                     是否自适应屏幕高度(配置MaxHeightMinus)                     | Boolean |                    -                    |   false    |
|      selectableFunc    |                     选择框动态判断是否显示                     | Function |                    -                    |   null   |
|      fullscreen      |                     表单是否全屏                     | Boolean |                    -                    |  false    |
|      closeOnClickModal      |                    表单点击阴影是否可以关闭                     | Boolean |                    -                    |  false    |
|      dialogWidth      |                    表单宽度                     | String |                    -                    |  1000px    |
|      showColumnIndex      |                     是否显示序号列                     | Boolean |                    -                    |   false    |
|      exportDownloadUrl      |                     自定义导出url                    | String |                    -                    |   null    |
|      formTableConfig      |                     表单中表格的tableConfig                     | Object |                    -                    |   详情看GenerateFormItem中解释    |
|      formValuesAsync      |                     异步更新表单数据                     | Object |                    -                    |  外层异步传入数据更新表单,注意不能直接修改formValues    |
|      actionColumnWidth      |                     操作列宽度(有时需要直接指定列宽)                    | Number |                    -                    |  null    |
|      paginationLayout      |                     分页显示                     | String |   见官网   |  total, prev, pager, next, jumper, sizes    |

#### Props 补充说明

- `visibleList`

```
  // 内部元素显示控制
  {
    searchForm: true, // 查询区域
    tableTitle: true, // 表格标题
    btnAdd: true, // 添加按钮
    btnDel: false, // 批量删除按钮
    btnExport: true, // 导出按钮
    btnImport: false, // 导入按钮
    actionColumnBtnAdd: false, // 操作列添加按钮
    actionColumnBtnEdit: true, // 操作列编辑按钮
    actionColumnBtnDetail: false, // 操作列查看按钮
    actionColumnBtnDel: true, // 操作列删除按钮
    actionColumn: true, // 操作列
    seniorSearchForm:true, // 高级查询表单是否显示 (改为false需要通过slot传入自定义高级查询表单)
    btnAddOnColumnHeader: false, // 操作列header添加按钮
  };
```

- `textMap`

```
// 按钮文字Map
{
  add: '添加',
  edit: '编辑',
  del: '删除',
  detail: '查看',
  export: '导出',
  import: '导入',
}
```



#### Events

| 事件名称  |             说明             |                      回调参数                      |
| :-------: | :--------------------------: | :------------------------------------------------: |
| [el-table events](https://element.eleme.cn/#/zh-CN/component/table) |           [所有el-table其他事件见官网文档](https://element.eleme.cn/#/zh-CN/component/table)          |          -            |
|   done    |       表格数据请求完成       |              整个 CrudTable 组件对象               |
| selection |           多选事件           |              选中的行 (params: Array)              |
|  change   | 监听 dialog 中 form 对象改变 | 返回当前表单对象以及当前表单 json (params: Object) |
| form-btn-on-click |           表单内按钮组件点击回调           |             widget(表单组件json)              |


#### Slots

|    插槽名称     |                   说明                   |
| :-------------: | :--------------------------------------: |
| columnFormatter | 结合表格设计自定义列使用 |
|  btnBarPrevBtn  |           自定义右上角功能按钮           |
|    btnCustom    |      自定义操作按钮 参数为 {row}     |
|    seniorSearchForm    |      自定义高级查询表单      |
|    dialogFooter    |      弹出表单右侧底部slot     |

#### Methods

|   方法名    |     说明     | 参数 |
| :---------: | :----------: | :--: |
| tableReload | 重新加载列表 |  -   |
| getElTable | 获取原生el-table对象 |  -   |