import mockData from './mockData'

export const initialState = {
    mockData
}

const dataReducer = (initialState, action) => {

    switch (action.type) {

        case 'getcomments': {
            let boards = initialState[0]
            return boards.find(board => boards.indexOf(board).toString() === action.index)
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