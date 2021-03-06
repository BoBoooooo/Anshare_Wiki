# 流程设计器

本框架选用flowable工作流引擎,由于目前开发采用前后端分离的模式,所以发布流程过程略微繁琐。

## 发布流程

* 绘制后端流程图 
    * 到 [flowable流程设计器](http://116.62.78.229:8093/flow-study/) 中绘制后端流程图
    * 绘制完毕后导出为`xml`格式
    * 回到`系统-开发人员工具-流程设计-发布流程`,导入`xml`
    * 至此后端流程图发布完毕
* 绘制前端流程图
    * 首先需要到`表单设计`中绘制该流程绑定的表单
    * 新建流程
    * 配置相关信息
        * 流程别称: 用于定制化流程名,用户界面上优先展示别称
        * 流程Key: 选择发布好的后端流程(用于跟后端流程图关联)
        * 数据源: 选择该流程关联的业务表(若含有多个业务表,默认第一个为主业务表,选择时注意先后顺序)
        * 关联表单: 此处需勾选该流程绑定的表单(选择第一步配置的表单)
        * 流程分类: 选择该流程所属分类,此处类型字典可以在`字典管理-流程类目`中进行配置。
        * 显示状态: 无特殊需求,默认选择可直接发起
        * 标题内容: 配置该流程在待办已办事项中显示的标题内容,自行组合选择,注意顺序。
    * 画图
        * 无特殊需求,该图跟`后端流程图`相同,注意步骤名称确保跟后端图相同
        * *注意事项: 如果存在步骤同名情况,需要加上冒号尾数进行区分,命名例如 `步骤A:1`, `步骤A:2`格式*
    * 关联结点id(注意查看是否均关联成功)
    * 初始化流程配置(会初始默认配置,后文会详细介绍相关配置)
    * 保存,至此发布完成

## 流程配置

待续
