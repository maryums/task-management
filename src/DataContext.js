import { createContext, useReducer, useContext } from "react";

import dataReducer, { initialState } from "./dataReducer";

const DataContext = createContext(initialState)



export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, initialState);

    function handleGetBoard(index) {
        dispatch({
            type: 'getcomments',
            index: index
        });
    }

    const value = {
        boards: state.mockData[0].boards,
        handleGetBoard

    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}


const useData = () => {
    const context = useContext(DataContext);

    if (context === undefined) {
        throw new Error("useData must be used within DataContext");
    }

    return context;
};

export default useData;