import { createContext, useReducer, useContext } from "react";
import dataReducer, { initialState } from "./dataReducer";
import produce from 'immer'

const DataContext = createContext(initialState)

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, initialState);

    function saveFormData(newData, boardIndex) {
        let data = (state.newData)
        const nextState = produce(data, draftState => {
            draftState[boardIndex].columns[0].tasks.push(newData)
        })
        dispatch({
            type: 'SAVE_DATA',
            payload: nextState

        });
    }

    const value = {
        boards: state,
        saveFormData
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