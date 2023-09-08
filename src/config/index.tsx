import { DelayRisk, DelayRiskEnums, FieldMap, IdentityMap, LevelEnums } from '@/enums/config'
import { getOptionOfEnum, getOptionOfMap } from '@/utils'
import { Tag } from 'antd'
import moment from 'moment'
import { type ReactNode } from 'react'

// 级别配置
export const LevelOptions = getOptionOfEnum(LevelEnums)

// 视频领域
export const FieldOptions = getOptionOfMap(FieldMap)

// 银行'
const bankList = [
  '中国银行',
  '中国工商银行',
  '中国农业银行',
  '中国建设银行',
  '招商银行',
  '中国邮政储蓄银行',
  '交通银行',
  '中国光大银行',
  '中信银行',
  '广发银行',
  '北京银行',
  '长沙银行',
  '成都银行',
  '重庆银行',
  '大连银行',
  '广州银行',
  '贵阳银行',
  '杭州银行',
  '河北银行',
  '内蒙古银行',
  '江苏银行',
  '南昌银行',
  '南京银行',
  '宁波银行',
  '宁夏银行',
  '青岛银行',
  '青海银行',
  '上海银行',
  '天津银行',
  '温州银行',
  '西安银行',
  '包商银行',
  '北京农村商业银行',
  '渤海银行',
  '中国民生银行',
  '浙商银行',
  '郑州银行',
  '恒丰银行',
  '富滇银行',
  '福建海峡银行',
  '广西北部湾银行',
  '韩亚银行',
  '汉口银行',
  '华夏银行',
  '徽商银行',
  '兴业银行',
  '企业银行',
  '吉林银行',
  '晋商银行',
  '乌鲁木齐银行',
  '龙江银行',
  '平安银行',
  '齐鲁银行',
  '上海浦东发展银行',
  '上海农商银行',
  '深圳农村商业银行',
  '友利银行',
  '厦门银行',
  '锦州银行',
  '营口银行',
  '阜新银行',
  '苏州银行',
  '浙江稠州商业银行',
  '台州银行',
  '浙江泰隆商业银行',
  '赣州银行',
  '齐商银行',
  '烟台银行',
  '莱商银行',
  '德州银行',
  '临商银行',
  '珠海华润银行',
  '广东南粤银行',
  '东莞银行',
  '柳州银行',
  '桂林银行',
  '昆仑银行',
  '广州农商银行',
  '重庆农村商业银行',
  '天津农村合作银行',
  '微众银行'
]
export const BankOptions = bankList.map(i => ({ label: i, value: i }))

export const LevelIcon = (level: LevelEnums) => {
  switch (level) {
    case LevelEnums.P1:
    case LevelEnums.P2:
    case LevelEnums.P3:
      return <Tag color="red">{LevelEnums[level]}</Tag>
    case LevelEnums.P4:
    case LevelEnums.P5:
    case LevelEnums.P6:
    case LevelEnums.P7:
      return <Tag color="orange">{LevelEnums[level]}</Tag>
    case LevelEnums.P8:
    case LevelEnums.P9:
    case LevelEnums.P10:
      return <Tag color="blue">{LevelEnums[level]}</Tag>

    default:
      return <>-</>
  }
}

// 项目状态
export const DelayRiskOptions = getOptionOfMap(DelayRisk)

export const DelayRiskIcon = (delayRisk: DelayRiskEnums, render?: any) => {
  const text = render ? render(DelayRisk[delayRisk]) : DelayRisk[delayRisk]
  switch (delayRisk) {
    case DelayRiskEnums.Pending:
      return <Tag color='magenta'>{text}</Tag>
    case DelayRiskEnums.DelayRisk:
      return <Tag color='yellow'>{text}</Tag>
    case DelayRiskEnums.Delay:
      return <Tag color='red'>{text}</Tag>
    case DelayRiskEnums.DelayCompletion:
      return <Tag color='orange'>{text}</Tag>
    case DelayRiskEnums.NormalCompletion:
      return <Tag color='green'>{text}</Tag>
    default:
      return <>-</>
  }
}

// 身份
export const IdentityOptions = getOptionOfMap(IdentityMap)

// 车辆类型
export const vehicleList = ['微型货车', '轻型货车', '中型货车', '重型货车', '轻型越野车', '中型越野车', '重型越野车', '超重型越野车', '轻型自卸车', '中型自卸车', '重型自卸车', '矿用自卸车', '半挂牵引车', '全挂牵引车', '箱式汽车', '罐式汽车', '起重举升车', '仓栅式车', '特种结构车', '专用自卸车', '微型客车', '轻型客车', '中型客车', '大型客车', '特大型客车', '微型轿车', '普通级轿车', '中级轿车', '中高级轿车', '高级轿车', '轻型半挂车', '中型半挂车', '重型半挂车', '超重半挂车']
export const VehicleOptions = vehicleList.map(i => ({ label: i, value: i }))

export enum CustomItemEnum {
  Money = 'Money',
  Time = 'Time',
  TimeStr = 'TimeStr'
}

export const CustomItemStrategy: Record<CustomItemEnum, (record: { value?: any }) => ReactNode> = {
  [CustomItemEnum.Money]: ({ value }) => value ? Number(value) / 100 : value,
  [CustomItemEnum.Time]: ({ value }) => moment.unix(value ?? 0).format('YYYY-MM-DD HH:MM:SS'),
  [CustomItemEnum.TimeStr]: ({ value }) => moment(new Date(value)).format('YYYY-MM-DD HH:MM:SS')
}
