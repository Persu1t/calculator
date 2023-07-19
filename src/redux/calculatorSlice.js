const { createSlice } = require("@reduxjs/toolkit") ;

const initialState = {
    initialNumber: "0",
    secondnumber: "",
    isOperable: false,
    operation: ""

}

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers:{
        initialNumberCheck: (state, action)=>{
            if(state.initialNumber === "0"){
                state.initialNumber = action.payload
            }
            else if(state.initialNumber.length < 10){
                state.initialNumber = state.initialNumber + action.payload
            }
            console.log(state.initialNumber)
        },
        operationInput:(state, action) => {
            state.isOperable = true
            state.operation = action.payload
            console.log(state.operation)
            console.log(state.isOperable)
        },

        secondNumberInput: (state, action) => {
            if(state.secondnumber.length < 10){
                state.secondnumber = state.secondnumber+action.payload
            }
        },
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
        clearScreen: (state, action) => {
            state.initialNumber = "0"
            state.secondnumber= ""
            state.isOperable = false
            state.operation = ""
        }
    }
})

export const calculatorReducer = calculatorSlice.reducer
export const actions = calculatorSlice.actions
export const calculatorSelector = (state)=>state.calculatorReducer