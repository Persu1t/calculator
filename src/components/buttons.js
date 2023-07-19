import React from 'react'
import styles from "../styles/buttons.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { actions, calculatorSelector } from '../redux/calculatorSlice'

const Buttons = () => {
    const zeroButton = ["0"]
    const buttons = ["1", "2", "3"]
    const secondRowButtons = ["4", "5", "6"]
    const thirdRowButtons = ["7", "8", "9"]
    const { isOperable } = useSelector(calculatorSelector)
    const operationsButtons = ["+", "-", "*", "/"]
    const dispatch = useDispatch()

    function handleButtonsClick(button) {
        dispatch(actions.initialNumberCheck(button))
    }

    function handleOperationButtonClick(operation) {
        dispatch(actions.operationInput(operation))
    }

    function secondNumber(button) {
        dispatch(actions.secondNumberInput(button))
    }

    function performOperation() {
        dispatch(actions.outPutAfterOperation())
    }

    function handleCancle() {
        dispatch(actions.clearScreen())
    }

    return (
        <>
            <div className={styles.buttonsContainer}>
                <ul className={styles.numberButtons}>
                    <li className={styles.zeroButtonLi}>
                        <div className={styles.zeroBtncontainer}>
                            {zeroButton.map((button, i) => (<button className={styles.btnZero} key={i} onClick={isOperable ? () => secondNumber(button) : () => handleButtonsClick(button)}>{button}</button>))}
                        </div>
                        
                        <button className={styles.btn} onClick={performOperation}>=</button>
                    </li>
                    <li>{buttons.map((button, i) => (
                        <button className={styles.btn} key={i} onClick={isOperable ? () => secondNumber(button) : () => handleButtonsClick(button)}>{button}</button>
                    ))}
                    </li>
                    <li>
                        {secondRowButtons.map((button, i) => (
                            <button className={styles.btn} key={i} onClick={isOperable ? () => secondNumber(button) : () => handleButtonsClick(button)}>{button}</button>
                        ))}
                    </li>
                    <li>
                        {thirdRowButtons.map((button, i) => (
                            <button className={styles.btn} key={i} onClick={isOperable ? () => secondNumber(button) : () => handleButtonsClick(button)}>{button}</button>
                        ))}
                    </li>
                </ul>
                <div className={styles.operationButtons}>
                    {operationsButtons.map((operation, i) => (
                        <button className={styles.btn} key={i} onClick={() => handleOperationButtonClick(operation)}>{operation}</button>
                    ))}

                    <div className={styles.equalsAndCancel}>
                        <button className={styles.btn} onClick={handleCancle}>C</button>
                    </div>
                </div>



            </div>

        </>

    )
}

export default Buttons