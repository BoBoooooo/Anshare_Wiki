# FlowableDialog

> 详情查看 @/mdoel/flowStepButtonConfig

## 零、须知

工作流模块 businessID -> processInstanceId -> taskId

          业务表id -> 流程实例id -> 具体task id

## 一、MyTask 对象 (backMyTask 接口)

```javascript
const myTask = {
  approveuser: '', // 下一步接收人
  comment: '', // 当前步骤填写的意见
  endTime: '', // 接收时间
  startTime: '', // 发送时间
  createTime: '', // ???
  flowKey: '', // 当前流程的flowKey
  businessID: '', // 业务表id
  id: '', // taskId
  name: '', // 步骤名称
  originator: '', // ???
  processDefinitionName: '', // ???
  trend: '', // 发送的时候 传trend
  workFlowStatus: '', // ???
  processInstanceId: '', // 流程实例id processInstanceId
  nextStepList: [], // 下一步骤集合
  flowElementId: '', // 步骤id
  handleType: '', // 选人策略
  batchid: '', // 批次id
  multiUsers: '', // 发送多人
  approvetaskuser: '', // 审批流程审批人
  senduser: '', // 审批流程发起人(呈批人)
  approveprocessinstanceid: '', // 审批流程实例id
  isapprove: '', // 是否正在审批
  approvetaskresult: '', // 审批结果
  approveloopusers: null, // 自定义审批顺序
  approvestepid: '' // 当前审批步骤id(自定义)
}
```

## 二、当前步骤配置对象

```javascript
const stepConfig = {
  flowTitle:
    'BusinessActPerson_personname,BusinessActPerson_personunit,BusinessActPerson_personrank', // 流程标题
  customFlowTitle: '', // 自定义流程标题
  fieldStatus: [], //
  flowSource: 'business_act_clueinfo,business_act_person', // 整个流程关联的数据源
  stepConfig: {
    id: '', // 当前步骤Id
    name: '', // 当前步骤名
    formTitle: '', // 表单标题
    formDesignName: '', // 表单绑定name
    visibleOpinion: false, // 意见填写框是否显示
    visibleWenShuCodeBtn: false, // 生成文号按钮是否显示
    visibleAssistBtn: false, // 协办人分配按钮是否显示
    visibleMergeHandle: false, // 合并处置是否显示
    visibleLaunchApproveBtn: false, // 是否可以发起审批
    buttons: [], // 右侧功能按钮 里面对象为 buttonEntity
    files: [], // 当前步骤文书
    requiredFiles: [], // 必填文书
    measureList: [], // 措施列表
    fieldStatus: [], // 当前步骤字段状态
    autoCreateFiles: [], // 自动生成的文书
    opinionLabel: '', // 意见label文字,默认为当前步骤名
    supportMultipleSend: false, // 该步骤是否支持发送给多人,默认只允许一个人
    supportAddClueInfo: false, // 是否开启流程表单内录入线索按钮
    approveLowestConfig: [], // 最低审批权限配置项
    approveList: [], // 审批走向
    visibleReceiveUser: false, // 是否允许指定接收人
    autoSendNextStep: false, // 是否自动进入下一步
    guide: [] // 向导配置
  }
}
```

## 三、button 的配置信息

```javascript
const buttonEntity = {
  title: '', // 按钮名称
  ico: '', // 图标
  script: '', // 功能
  note: '', // 按钮说明
  condition: '', // 按钮流转条件
  selectType: '0', // 选人策略,默认所有人
  handleStepMember: '', // 某一步骤处理者,发送退回共用
  selectDeptList: [], // 选择范围
  handleUser: '', // 具体某一处理者
  message: '', // 弹框提示内容
  handlePost: '' // 按岗位发送
}

// selectType 选人策略枚举 eunm

const ENUM = {
  All: '0', // 所有成员
  ByStep: '4', // 某一步处理人
  ByRequest: '5', // 后台动态返回，用得少
  ByUser: '6' // 指定某一处理人, 用得少
}
```

## 四、请求的接口

- 打开表单的时候
  - backMyTask 获取整体流程信息接口
  - listBean 获取表单信息
  - getStepConfig 获取当前步骤配置信息 (传参 flowKey , sid)
  - getApproveUserList 找当前审批结点相关人员信息
  - getWenShus 返回当前步骤需要制作文书的信息
  - form detail 获取当前步骤绑定表单的 json(主表)
  - dynamictables detail 获取当前表单子表的表格设计
  - getChartJson 获取流程图 json
  - findHistoryFlow 获取所有已走过的步骤信息(每个步骤的意见以及审批意见)
  - listComment 获取意见信息 跟上述这个接口类似
  - /act/task/approveopinion/list 获取常用签批意见接口
  - /file/fileList (list) 获取当前附件

## 五、组件文档

待续