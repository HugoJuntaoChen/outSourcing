export enum LevelEnums {
  'P1' = 1,
  'P2' = 2,
  'P3' = 3,
  'P4' = 4,
  'P5' = 5,
  'P6' = 6,
  'P7' = 7,
  'P8' = 8,
  'P9' = 9,
  'P10' = 10,
}

// 项目状态
export enum DelayRiskEnums {
  'Pending' = 0,
  'DelayRisk' = 1,
  'Delay' = 2,
  'DelayCompletion' = 3,
  'NormalCompletion' = 4
}
export const DelayRisk: Record<DelayRiskEnums | any, string> = {
  [DelayRiskEnums.Pending]: '进行中',
  [DelayRiskEnums.DelayRisk]: '延期风险',
  [DelayRiskEnums.Delay]: '已延期',
  [DelayRiskEnums.DelayCompletion]: '延期完成',
  [DelayRiskEnums.NormalCompletion]: '正常完成'
}

export enum StatusEnums {
  Creating = 1,
  ApprovalUnderWay = 2,
  UnApproval = 3,
  ToBeConfirmed = 4,
  DeliveryOrderInProgress = 5,
  OrderDeliveryFailed = 6,
  InProgress = 7,
  ItWillbeOverdue = 8,
  ItIsOverdue = 9,
  Finished = 10,
}
export const StatusMap: Record<StatusEnums | any, string> = {
  [StatusEnums.Creating]: '创建中',
  [StatusEnums.ApprovalUnderWay]: '审批中',
  [StatusEnums.UnApproval]: '审批未通过',
  [StatusEnums.ToBeConfirmed]: '待确认',
  [StatusEnums.DeliveryOrderInProgress]: '派单中',
  [StatusEnums.OrderDeliveryFailed]: '派单失败',
  [StatusEnums.InProgress]: '进行中',
  [StatusEnums.ItWillbeOverdue]: '即将逾期',
  [StatusEnums.ItIsOverdue]: '已逾期',
  [StatusEnums.Finished]: '已完成'
}

export const FlowStatusMap: Record<any, string> = {
  starting: '创建',
  approve_first_layer: '审批第一层',
  approve_second_layer: '审批第二层',
  approving_rejected: '审批被拒绝',
  created: '创建完毕',
  sending: '发送中',
  asking: '询问中',
  sending_failed: '发送失败',
  settle: '立项',
  text: '文案策划',
  video: '视频拍摄',
  result: '成片交付',
  money: '财务结算',
  end: '结束'
}

// 2.
export enum BudgetRiskEnums {
  'None' = 0,
  'Presuppose' = 1,
  'Exceed' = 2,
}
export const BudgetRisk = {
  [BudgetRiskEnums.None]: '无',
  [BudgetRiskEnums.Presuppose]: '预算风险',
  [BudgetRiskEnums.Exceed]: '已超预算'
}

// 合作模式
export enum CollaborationEnums {
  'Part' = 0,
  'Entirety' = 1,
}
export const Collaboration = {
  [CollaborationEnums.Part]: '分包',
  [CollaborationEnums.Entirety]: '整包'
}

// 视频领域
export enum FieldEnums {
  'Promotional' = 1,
  'Advertising' = 2,
  'Micro' = 3,
  'Documentary' = 4,
  'Short' = 5,
}
export const FieldMap: Record<FieldEnums | any, string> = {
  [FieldEnums.Promotional]: '宣传片',
  [FieldEnums.Advertising]: '广告片',
  [FieldEnums.Micro]: '微电影',
  [FieldEnums.Documentary]: '纪录片',
  [FieldEnums.Short]: '短视频'
}

// 身份
export enum IdentityEnums {
  ProjectManager = 1,
  DepartmentHead = 2,
  ProducerHead = 3,
  FinanceManager = 4,
  CEO = 5,
  Client = 20,
}
export const IdentityMap: Record<IdentityEnums | any, string> = {
  [IdentityEnums.ProjectManager]: '项目经理',
  [IdentityEnums.DepartmentHead]: '部门领导',
  [IdentityEnums.ProducerHead]: '内容负责人',
  [IdentityEnums.FinanceManager]: '辅材',
  [IdentityEnums.CEO]: '老板',
  [IdentityEnums.Client]: '顾客'
}

export enum FacilityTypeEnums {
  CameraShooting = 1,
  Lamplight = 2
}
export const FacilityTypeMap: Record<FacilityTypeEnums | any, string> = {
  [FacilityTypeEnums.CameraShooting]: '摄像设备',
  [FacilityTypeEnums.Lamplight]: '灯光设备'
}

export enum ResultFileEnum {
  ResultFile = 'ResultFile', // 文案策划上传文件
  TextLFile = 'TextLFile', // 导演拍摄文案终稿
  ScriptFile = 'ScriptFile', // 脚本终稿
  MaterialFile = 'MaterialFile', // 素材终稿
  PureFile = 'PureFile', // 纯净版
  UploadFile = 'UploadFile', // 交付版
  ProjectFile = 'ProjectFile', // 工程文件
  CompleteFile = 'CompleteFile', // 上传结算单
  MoneyFile = 'MoneyFile', // 财务结算确认截图
}
