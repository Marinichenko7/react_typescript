import React from 'react';
import cl from './MyButton.module.scss'

interface MyButtonProps {
    children?: React.ReactNode,
    props?: React.ReactNode,
    onClick: () => void
}

const MyButton: React.FC<MyButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myBtn}>
            {children}
        </button>
    )
}

export default MyButton