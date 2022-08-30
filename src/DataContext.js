import { createContext, useReducer, useContext } from "react";
import dataReducer, { initialState } from "./dataReducer";
import produce from 'immer'

const DataContext = createContext(initialState)

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, initialState);

    function saveFormData(newData, boardIndex, statusIndex) {
        let data = (state.newData)

        const nextState = produce(data, draftState => {
            draftState[boardIndex].columns[statusIndex].tasks.push(newData)
        })

        dispatch({
            type: 'SAVE_DATA',
            payload: nextState

        });
    }

    function editFormData(editedData, boardIndex, statusIndex, taskIndex) {
        let data = (state.newData)

        const nextState = produce(data, draftState => {
            draftState[boardIndex].columns[statusIndex].tasks[taskIndex] = editedData
        })

        dispatch({
            type: 'EDIT_DATA',
            payload: nextState

        });

    }


    const value = {
        boards: state,
        saveFormData,
        editFormData
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