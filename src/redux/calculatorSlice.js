// importing createSlice from redux
const { createSlice } = require("@reduxjs/toolkit") ;

const initialState = {
    initialNumber: "0",
    secondnumber: "",
    isOperable: false,
    operation: ""

}
//  making slice named as calculatorSlice
const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers:{
        // first reducer function is initial number input and check
        initialNumberCheck: (state, action)=>{
            if(state.initialNumber === "0"){
                state.initialNumber = action.payload
            }
            else if(state.initialNumber.length < 10){
                state.initialNumber = state.initialNumber + action.payload
            }
            console.log(state.initialNumber)
        },
        // second reducer function operation is input of operation like + - / or *
        operationInput:(state, action) => {
            state.isOperable = true
            state.operation = action.payload
            console.log(state.operation)
            console.log(state.isOperable)
        },

        // third reducer function is input of the second number 

        secondNumberInput: (state, action) => {
            if(state.secondnumber.length < 10){
                state.secondnumber = state.secondnumber+action.payload
            }
        },

        // fourth reducer function is making the operation happening and making it eqaul to initialNumber for the more operation
        outPutAfterOperation: (state) => {
            if(state.operation === "+" ){
                state.initialNumber = Number(state.initialNumber)+ Number(state.secondnumber)
                state.isOperable = false
                state.secondnumber = ""
            }
            if(state.operation === "-" ){
                state.initialNumber = Number(state.initialNumber)- Number(state.secondnumber)
                state.isOperable = false
                state.secondnumber = ""
            }
            if(state.operation === "*" ){
                state.initialNumber = Number(state.initialNumber)* Number(state.secondnumber)
                state.isOperable = false
                state.secondnumber = ""
            }
            if(state.operation === "/" ){
                state.initialNumber = Number(state.initialNumber)/ Number(state.secondnumber)
                state.isOperable = false
                state.secondnumber = ""
            }
            
        },

        // fifth reducer function is clear input for making input and every thing clear.
        clearScreen: (state, action) => {
            state.initialNumber = "0"
            state.secondnumber= ""
            state.isOperable = false
            state.operation = ""
        }
    }
})

// exporting all the necessary methods
export const calculatorReducer = calculatorSlice.reducer
export const actions = calculatorSlice.actions
export const calculatorSelector = (state)=>state.calculatorReducer