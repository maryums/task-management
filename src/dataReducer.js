import mockData from './mockData'

let newData = mockData[0].boards

export const initialState = {
    newData
}

const dataReducer = (initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case 'SAVE_DATA': {
            console.log("SAVE_DATA", payload);

            return {
                ...initialState,
                newData: payload
            }
        }

        case 'EDIT_DATA': {
            console.log("EDIT_DATA", payload);

            return {
                ...initialState,
                newData: payload
            }
        }


        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }



}

export default dataReducer