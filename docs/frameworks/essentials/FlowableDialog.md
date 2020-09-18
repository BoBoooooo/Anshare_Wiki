# FlowableDialog

## 一、MyTask对象

``` javascript
 const myTask =  {
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
  approvestepid: '', // 当前审批步骤id(自定义)
};

```

## 二、当前步骤配置对象

``` javascript
const stepConfig = {
  flowTitle: 'BusinessActPerson_personname,BusinessActPerson_personunit,BusinessActPerson_personrank',  // 流程标题
  customFlowTitle: '', // 自定义流程标题
  fieldStatus: [],  // 
  flowSource: 'business_act_clueinfo,business_act_person',   // 整个流程关联的数据源
  stepConfig: {
    id: 'sid-D339D7C3-27C6-44E3-AEF6-4C068EC1B7D8', // 步骤id
    formTitle: '线索件登记', // 步骤标题
    visibleOpinion: true, // 是否显示意见栏
    opinionLabel: '承办人意见', // 开启意见栏的时候 左边label的名字
    supportMultipleSend: false, // 是否支持发送给多人
    visibleReceiveUser: false, // ??? 
    buttons: [       // 当前步骤关联的所有按钮
      {
        note: '保存',  
        condition: '',   
        title: '保存',
        script: 'save',
      },
      {
        note: '发送到选择信访线索处理方式',
        handleStepMember: 'sid-D339D7C3-27C6-44E3-AEF6-4C068EC1B7D8',
        selectType: '4',
        sort: 1,
        title: '选择线索处置方式',
        script: 'send',
      },
    ],
    visibleWenShuCodeBtn: false,  // 是否显示生成文号按钮
    visibleMergeHandle: true,  // 是否显示重复件
    approveList: [   // 如果开启审批 (审批顺序)
      {
        stepid: 'd1b50c06-2b0e-407d-8cc1-49eaaa15bc67',
        approvenode: '副处长审批',
        approvepost: 'd433ec64-6589-42b4-989a-b62b9364bf5f',  // 岗位id  (数据库里dept_post 部门设置里可以配置岗位)
      },
      {
        stepid: 'b2cab7b2-507d-4761-8f48-e2f4bb42f347',
        approvenode: '处长审批',
        approvepost: 'b641e8ea-cebf-4c2d-866a-ff67a7b8d5e1',
      },
      {
        stepid: 'a5fad1f8-16ab-4d92-a5e5-a62adf1c6fa2',
        approvenode: '副局长审批',
        approvepost: 'eae9e332-cefd-448c-b7cd-cf18637f9563',
      },
      {
        stepid: '2cd992e4-afbb-4a52-b9e4-d964fbba8de3',
        approvenode: '局长审批',
        approvepost: 'd5d583fd-0207-4dd9-8292-9cb0f600d3c1',
      },
      {
        stepid: '4ad2f938-0a35-4b0e-be1a-24e813deb473',
        approvenode: '副书记审批',
        approvepost: '55a29862-5279-4f9c-9479-a1a4e12277d1',
      },
      {
        stepid: '54f2f52c-ae4d-450d-bab9-a92ddc7e1036',
        approvenode: '书记审批',
        approvepost: '11f2ce5b-7fba-4efd-ac55-571608797148',
      },
    ],
    autoSendNextStep: false, // 是否自动进入下一步
    visibleLaunchApproveBtn: true, // 是否可以发起审批
    name: '线索登记', // 当前步骤名称 (跟后台步骤名称一致)
    files: ['6ba824d8-2650-4d9b-bf2d-58b65b0a6988'], // 当前步骤可以制作的文书
    requiredFiles: ['6ba824d8-2650-4d9b-bf2d-58b65b0a6988'], // 必须制作的文书
    autoCreateFiles: [], // 是否自动生成文书
    formDesignName: '问题线索登记表初始', // 步骤绑定的表单名
    visibleAssistBtn: false, // 协办人的按钮是否显示
    supportAddClueInfo: false, // 线索登记按钮是否显示 (业务按钮,可不管)
    approveLowestConfig: [  // 最低审批权限 
      {
        personLevel: '其他', // 职级   例如 正职干部  比如批到书记为止
        lowestApproveLevel: '2cd992e4-afbb-4a52-b9e4-d964fbba8de3', // 最低审批的环节id
      },
    ],
    guide: [], // 向导(后期可能会删除)
    measureList: [], // 当前步骤可以发起的措施 
  },
};


```

## 三、button的配置信息

``` javascript 



```


## 四、请求的接口

* 打开表单的时候
  * backMyTask 获取整体流程信息接口
  * listBean 获取表单信息 
  * getStepConfig 获取当前步骤配置信息  (传参 flowKey , sid)
  * stepInfo 当前步骤具体信息
  * getApproveUserList 找当前审批结点相关人员信息 
  * getWenShus 返回当前步骤需要制作文书的信息
  * form detail 获取当前步骤绑定表单的json(主表)
  * dynamictables detail 获取当前表单子表的表格设计
  * getChartJson 获取流程图json
  * findHistoryFlow 获取所有已走过的步骤信息(每个步骤的意见以及审批意见)
  * listComment 获取意见信息  跟上述这个接口类似 
  * /act/task/approveopinion/list 获取常用签批意见接口
  * /file/fileList (list) 获取当前附件


## 组件文档

## methods

|   方法名    |     说明     | 参数 |
| :---------: | :----------: | :--: |
