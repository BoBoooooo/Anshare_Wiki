# GenerateFormDialog

## Props

|          参数          |                 说明                 |     类型     |       可选值       | 默认值 |
| :--------------------: | :----------------------------------: | :----------: | :----------------: | :----: |
|    formValuesAsync     |           异步更新表单数据           |    Object    |         -          |   {}   |
|      setReadOnly       |  默认 Null 为不只读,传{}为全部只读   |    Object    |      null/{}       |  null  |
|       setHidden        |            需要隐藏的字段            |    Array     |         -          |   []   |
|    formTableConfig     |          子表格组件 config           |    Object    |         -          |   {}   |
| dialogFormDesignerName |   对话框内加载 FormDesigner 的表名   |    String    |         -          |   -    |
|        textMap         |    dialog 标题是否为新增编辑保存     |    Object    |         -          |   {}   |
|         width          |              对话框宽度              |    String    |         -          | 1400px |
|       tableName        |               后台表名               |    String    |         -          |   {}   |
|    formTableConfig     |              子表格组件              |    Object    |         -          |   {}   |
|      tableParams       |     表格请求参数(带查询参数请求)     | Object,Array |         -          |   {}   |
|       fullscreen       |             表单是否全屏             |   Boolean    |         -          | false  |
|   closeOnClickModal    |       表单点击阴影是否可以关闭       |   Boolean    |         -          | false  |
|      appendToBody      |   表单对话框是否插入至 body 元素上   |   Boolean    |     true/false     | false  |
|      remoteFuncs       | 远程数据方法(用于表单内远端数据请求) |    Object    |         -          |   {}   |
|     promiseForSave     |          自定义表单保存方法          |   Function   | Function(formData) |   -    |

## Props 补充说明

- `formTableConfig`

```javascript
/*  如果外侧传入优先使用传入的params
    此处考虑到一个表单内有多个子表的情况
    通过表格组件中"后端绑定key输入框"中的内容作为子表唯一标识
    格式例如:     
*/

let formTableConfig = {
  subTable1: {
    tableParams: {
      sid: 123
    },
    prefill: {
      sid: 456
    }
  },
  subTable2: {
    tableParams: {
      sid: 123
    },
    prefill: {
      sid: 456
    }
  }
}
```

- `remoteFuncs`

```javascript
// 下拉框等需要加载远端方法

let remote = {
  async func1(callback) {
    let result = await myQuery1()
    callback(result)
  },
  async func2(callback) {
    let result = await myQuery2()
    callback(result)
  }
}
```

## Events

|  事件名称  |         说明         |        回调参数         |
| :--------: | :------------------: | :---------------------: |
|   change   | 表单值发送变化时触发 | {formEntity,formDesign} |
| btnOnClick |   表单按钮点击事件   |       widget        |
| afterSave  |    保存表单后触发    |  {status,dialogParams}  |
|   cancel   |     取消按钮触发     |            -            |

## Slots

使用自定义插槽组件

## Methods

|   方法名    |     说明     | 参数 |
| :---------: | :----------: | :--: |
| showDialog | 弹出表单对话框 |  param = {}, status = 0, formValues = {}   |
