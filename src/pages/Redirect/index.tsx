import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const Redirect = () => {
  const history = useNavigate()
  useEffect(() => {
    history('/personnel/inside')
  }, [])
  return (
    <div></div>
  )
}

export default Redirect
