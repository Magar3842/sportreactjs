import { Button } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { counterReducer, init, initialState } from "../reducers/counterReducer";
import { types } from "../types/types";

const Counter = () => {

    const [counter, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button colorScheme='green' onClick={() => {
                dispatch({ type: types.incrementar })
            }}>
                Sumar
            </Button>
            <Button colorScheme='green' onClick={() => {
                let numero = Math.random()
                dispatch({ type: types.decrementar, payload: numero })
            }}>
                Restar
            </Button>
            <Button colorScheme='green' onClick={() => {
                dispatch({ type: types.reset })
            }}>
                Reset
            </Button>
        </div>
    );
};

export default CounterDos;