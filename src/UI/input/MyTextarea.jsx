import React from 'react'
import cl from './MyTextarea.module.scss'

const MyTextarea = ({...props}) => {
  return (
    <textarea {...props} className={cl.myTextarea} />
  )
}

export default MyTextarea