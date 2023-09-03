import { analysisApi } from '@/api'
import { useState } from 'react'
import type { Analysis, GetAnalysisRequest, GetAnalysisResponse } from '@/types'

export const useGetgAnalysisCost = () => {
  const [data, setData] = useState<Analysis>()
  const [loading, setLoading] = useState(false)

  const getAnalysisCost = async (data?: GetAnalysisRequest) => {
    setLoading(true)

    try {
      const result: GetAnalysisResponse = await analysisApi.getAnalysisCost(data)

      setData(result?.data)
    } catch (error) {} finally {
      setLoading(false)
    }
  }

  return { data, loading, getAnalysisCost }
}

export const useGetgAnalysisSchedule = () => {
  const [data, setData] = useState<Analysis>()
  const [loading, setLoading] = useState(false)

  const getAnalysisSchedule = async (data?: GetAnalysisRequest) => {
    setLoading(true)

    try {
      const result: GetAnalysisResponse = await analysisApi.getAnalysisSchedule(data)
      setData(result?.data)
    } catch (error) {} finally {
      setLoading(false)
    }
  }

  return { data, loading, getAnalysisSchedule }
}
