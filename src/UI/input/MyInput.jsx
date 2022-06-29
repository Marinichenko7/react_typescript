import React from 'react';
import cl from './MyInput.module.scss'


const MyInput = (props) => {
    return (
        <input {...props} className={cl.myInput} />
    )
}

export default MyInput