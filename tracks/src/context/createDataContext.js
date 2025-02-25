import React, { useReducer } from "react";

export default (reducer, action, defaultValue) => {
    const Context = React.createContext();
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in action) {
            boundActions[key] = action[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )

    };
    return { Context, Provider };
}
