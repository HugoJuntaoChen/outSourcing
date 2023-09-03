
export interface Analysis {
  project_num: number
  worker_num_avg: number
  project_avg_cycle: number
  project_delay_count: number
  project_delay_risk_count: number
  project_delay_percent: number
  project_delay_risk_percent: number
  person_avg_schedule: number
  person_avg_throughput_percent: number
  job_cost_data: [
    {
      job_type: number
      cost?: number
      produce?: number

      delay_count?: number
      delay_risk_count?: number
    }
  ]
  level_cost_data: [
    {
      level: number
      cost?: number
      produce?: number

      delay_count?: number
      delay_risk_count?: number
    }
  ]
}

export interface GetAnalysisRequest {
  time_left_range: number
  time_right_range: number
  company_id: number | string
}

export interface GetAnalysisResponse {
  data: Analysis
}

export interface CostPieConfig {
  jobs: string[]
  levels: string[]
  jobCost: number[]
  jobProduce: number[]
  levelCost: number[]
  levelProduce: number[]
}

export interface SchedulePieConfig {
  jobs: string[]
  levels: string[]
  jobDelayCount: number[]
  jobDelayRiskCount: number[]
  levelDelayCount: number[]
  levelDelayRiskCount: number[]
}
