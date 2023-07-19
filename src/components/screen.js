import React from 'react'
import styles from "../styles/screen.module.css"
import { useSelector } from 'react-redux'
import { calculatorSelector } from '../redux/calculatorSlice'
const Screen = () => {
    let  { initialNumber, operation, secondnumber, isOperable }= useSelector(calculatorSelector)
  return (
    <div>
        <span className={styles.initialNumber}>{initialNumber}</span> {isOperable ? <><span className={styles.operation}>{operation}</span> <span className={styles.secondnumber}>{secondnumber}</span></>: null}
    </div>
  )
}

export default Screen