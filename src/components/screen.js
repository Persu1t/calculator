// Screen component
import React from 'react'
import styles from "../styles/screen.module.css"
// importing the useSelector hoook from the react-redux
import { useSelector } from 'react-redux'
// importing calculatorSelector from redux
import { calculatorSelector } from '../redux/calculatorSlice'
const Screen = () => {
  // destructuring all the necessary state from redux
    let  { initialNumber, operation, secondnumber, isOperable }= useSelector(calculatorSelector)
  return (
    <div>
      {/* Using all the necessary state from redux which are destructured from above */}
        <span className={styles.initialNumber}>{initialNumber}</span> {isOperable ? <><span className={styles.operation}>{operation}</span> <span className={styles.secondnumber}>{secondnumber}</span></>: null}
    </div>
  )
}

export default Screen