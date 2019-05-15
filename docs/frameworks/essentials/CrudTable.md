# CrudTable

## props

|          参数          |                               说明                                |      类型       |                 可选值                  |  默认值   |
| :--------------------: | :---------------------------------------------------------------: | :-------------: | :-------------------------------------: | :-------: |
|    btnRowAddOnClick    |                    表格行中的添加按钮点击事件                     |    Function     |                    -                    |   null    |
|     expandRowKeys      |                              展开行                               |      Array      |                    -                    |     -     |
|       listField        |                        response 中数据位置                        |     String      |             data/data.list              | data.list |
|      setReadOnly       | GenerateFormDialog 中的表单禁用.null 表示均可编辑;{}表示全部只读; |     Object      |   null/{}/{whiteList:{},blackList:{}}   |   null    |  |
|       isMultiple       |                           是否开启多选                            |     Boolean     |               true,false                |   false   |
|       emptyText        |                      列表数据为空时显示文字                       |     String      |                    -                    | 暂无数据  |
|        prefill         |                      表单预填项(赋值初始值)                       |     Object      |                    -                    |   null    |
|      appendToBody      |                 表单对话框是否插入至 body 元素上                  |     Boolean     |               true/false                |   false   |
|       tableName        |                               表名                                |     String      |                    -                    |    ''     |
|   tableDesignerName    |      用于请求表格设计 json 的 name,不传则默认读取 tableName       |     String      |                    -                    |   null    |
| dialogFormDesignerName |    对话框内加载 FormDesigner 的表名,,不传则默认读取 tableName     |     String      |                    -                    |   null    |
|     orderCondition     |                             排序条件                              |     String      |                    -                    |   null    |
|        columns         |     自定义列配置项,会和 tableDesignerName 请求到的配置项合并      |      Array      |                    -                    |    []     |
|      visibleList       |                         内部元素显示控制                          |     Object      |                    -                    |    {}     |
|      disableList       |           内部元素禁用控制(暂时提供添加按钮的禁用控制)            |     Object      |     {btnAdd:false} / {btnAdd:true}      |    {}     |
|       tableTitle       |                             表格标题                              |     String      |                    -                    |    ''     |
|      tableParams       |                   表格请求参数(带查询参数请求)                    |  Object,Array   |                    -                    |    {}     |
|    multiTableParams    |                           多表关联条件                            |     String      |                    -                    |    ''     |
|      expandModel       |                             表格标题                              |     String      |                    -                    |    ''     |
|        textMap         |                          表单对话框标题                           |     Object      | { add:'添加',edit:'编辑',detail:'查看'} |    {}     |
|     promiseForDel      |                    自定义删除按钮 promise 请求                    |    Function     |      promiseForDel({ id: row.id })      |   null    |
|    promiseForSelect    |                    自定义列表查询 promise 请求                    |    Function     |                    -                    |   null    |
|   promiseForColumns    |                      自定义列表 config 请求                       |    Function     |                    -                    |   null    |
|     btnAddOnClick      |                         添加按钮点击事件                          |    Function     |                    -                    |   null    |
|     btnEditOnClick     |                         编辑按钮点击事件                          |    Function     |                    -                    |   null    |
|    btnDetailOnClick    |                         查看按钮点击事件                          |    Function     |                    -                    |    ''     |
|     showPagination     |                      自定义列表 config 请求                       |     Boolean     |               true/false                |   true    |
|      remoteFuncs       |               远程数据方法(用于表单内远端数据请求)                |     Object      |                    -                    |    {}     |
|      allResponse       |             直接传入表头和表体,表格不用再发起任何请求             |     Object      |                    -                    |   null    |
|      rowClassName      |                     行的 className 的回调方法                     | String,Function |                    -                    |   null    |
|      pageSize      |                     动态传入分页                     | Array |                    -                    |   [10,50,100]    |

## events

| 事件名称  |             说明             |                      回调参数                      |
| :-------: | :--------------------------: | :------------------------------------------------: |
|   done    |       表格数据请求完成       |              整个 BaseTable 组件对象               |
| selection |           多选事件           |              选中的行 (params: Array)              |
|  change   | 监听 dialog 中 form 对象改变 | 返回当前表单对象以及当前表单 json (params: Object) |

## slots

|    插槽名称     |                   说明                   |
| :-------------: | :--------------------------------------: |
| columnFormatter | 自定义列,结合 BaseTable 以及表格设计使用 |
|  btnBarPrevBtn  |           自定义右上角前置按钮           |
|    btnCustom    |      自定义操作按钮 参数为 row 对象      |

## methods

|   方法名    |     说明     | 参数 |
| :---------: | :----------: | :--: |
| tableReload | 重新加载列表 |  -   |
