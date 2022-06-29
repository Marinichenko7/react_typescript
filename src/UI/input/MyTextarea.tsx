import React from 'react'
import cl from './MyTextarea.module.scss'

const MyTextarea = ({...props}: React.HTMLProps<HTMLTextAreaElement>) => {
  return (
    <textarea {...props} className={cl.myTextarea} />
  )
}

export default MyTextarea