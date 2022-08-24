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


        // case 'changed': {
        //   return tasks.map(t => {
        //     if (t.id === action.task.id) {
        //       return action.task;
        //     } else {
        //       return t;
        //     }
        //   });
        // }

        // case 'deleted': {
        //   return tasks.filter(t => t.id !== action.id);
        // }

        default: {
            throw Error('Unknown action: ' + action.type);
        }

    }



}

export default dataReducer