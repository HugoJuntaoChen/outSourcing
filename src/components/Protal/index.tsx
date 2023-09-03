import React from 'react'
import { DeleteModal, UpdateModal } from './components'
import { type ProtalProps, ProtalTypeEnum } from './type'

const Protal: React.FC<ProtalProps> = ({ children, type, ...props }) => {
  switch (type) {
    case ProtalTypeEnum.DELETE:
      return <DeleteModal {...props} />
    case ProtalTypeEnum.EDIT:
      return (
        <UpdateModal {...props}>
          {children}
        </UpdateModal>
      )
    case ProtalTypeEnum.VIEW:
      return <div></div>
    case ProtalTypeEnum.FORM:
      return <div></div>
    case ProtalTypeEnum.MODAL:
      return <div></div>

    default:
      return <div></div>
  }
}

export default Protal
