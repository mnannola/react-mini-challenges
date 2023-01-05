import { useReducer } from "react";

const Button = ({handleClick, children}) => {
    return (
        <button onClick={handleClick} className="px-5 py-3 mx-1 border border-gray-400 bg-teal-300">{children}</button>
    )
}

const initialState = {
    counter: 0,
    increment: 1,
}

const reducer = (state, action) => {
    const {increment, counter} = state;
    switch (action.type) {
        case "reset":
            return initialState;            
        case "addToCounter":
            return {...state, counter: counter + increment};
        case "subtractFromCounter":
            return {...state, counter: counter - increment};
        case "setIncrement":
            return {...state, increment: parseInt(action.incrementValue, 10)}
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { counter, increment } = state;    
    return (
        <div className="text-center py-4">
            <h1 className="font-bold text-5xl">{counter}</h1>
            <div className="py-5">
                <Button handleClick={() => dispatch({type: "subtractFromCounter"})}>-</Button>
                <Button handleClick={() => dispatch({type: "addToCounter"})}>+</Button>                
            </div>
            <div className="py-2">
                <label htmlFor="incrementInput">Increment/Decrement by: </label>
                <input 
                    className="border border-solid-2 w-12" 
                    id="incrementInput" 
                    type="number"
                    value={increment}
                    min="1"
                    onChange={e => dispatch({type: "setIncrement", incrementValue: e.target.value})}>
                </input>
            </div>

            <div className="py-2">
                <Button handleClick={() => dispatch({type: "reset"})}>Reset</Button>
            </div>
            
        </div>
    )
}