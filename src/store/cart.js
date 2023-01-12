export default function cartReducer(state = {}, action){
    switch (action.type) {
        case ADD_PRODUCE:
            const id = action.id;
            const newState = { ...state };
            newState[id] = {
                id: id,
                count: 1
            };
            return newState;
        default:
            return state;
    }
}

const ADD_PRODUCE = 'cart/ADD_PRODUCE';

export const addProduce = (id) => {
    return ({
        type: ADD_PRODUCE,
        id: id
    })
}
