# GenerateForm

## Props

|      参数       |               说明                |  类型  | 可选值  | 默认值 |
| :-------------: | :-------------------------------: | :----: | :-----: | :----: |
|      data       |             表单 json             | Object |    -    |   {}   |
|      value      |            表单初始值             | Object |    -    |   {}   |
|  entity(.sync)  |            表单 model             | Object |    -    |   {}   |
|   setReadOnly   | 默认 Null 为不只读,传{}为全部只读 | Object | null/{} |  null  |
|    setHidden    |          需要隐藏的字段           | Array  |    -    |   []   |
|     remote      |           远端数据方法            | Object |    -    |   {}   |
| formTableConfig |         子表格组件 config         | Object |    -    |   {}   |

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

- `remote`

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

|     事件名称     |       说明       |     回调参数      |
| :--------------: | :--------------: | :---------------: |
| table-selections | 子表格选中数据项 | {name,selections} |
|    btnOnClick    | 表单按钮点击事件 |      widget       |

## Slots

使用自定义插槽组件

## Methods

|         方法名         |            说明            | 参数 |
| :--------------------: | :------------------------: | :--: |
|        getData         |    获取表单数据(会校验)    |  -   |
| getDataWithoutValidate | 不经过验证直接获取表单内容 |  -   |
|       resetForm        |          重置表单          |  -   |
