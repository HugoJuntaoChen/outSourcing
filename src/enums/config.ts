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
// 1.
export enum DelayRiskEnums {
  'Pending' = 0,
  'DelayRisk' = 1,
  'Delay' = 2,
  'DelayCompletion' = 3,
  'NormalCompletion' = 4
}
export const DelayRisk = {
  [DelayRiskEnums.Pending]: '进行中',
  [DelayRiskEnums.DelayRisk]: '延期风险',
  [DelayRiskEnums.Delay]: '已延期',
  [DelayRiskEnums.DelayCompletion]: '延期完成',
  [DelayRiskEnums.NormalCompletion]: '正常完成'
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
export const Field = {
  [FieldEnums.Promotional]: '宣传片',
  [FieldEnums.Advertising]: '广告片',
  [FieldEnums.Micro]: '微电影',
  [FieldEnums.Documentary]: '纪录片',
  [FieldEnums.Short]: '短视频'
}
