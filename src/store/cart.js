export default function cartReducer(state = {}, action){
    switch (action.type) {
        case ADD_PRODUCE:
            const newState = { ...state };
            newState[action.id] = {
                id: action.id,
                count: 1
            };
            return newState;
        case REMOVE_PRODUCE:
            const newState2 = { ...state };
            delete newState2[action.id];
            return newState2;
        case UPDATE_PRODUCE:
            const newState3 = { ...state };
            newState3[action.update.id].count = action.update.count;
            return newState3;
        case PURCHASE:
            return {};
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

const REMOVE_PRODUCE = 'cart/REMOVE_PRODUCE';

export const removeProduce = (id) => {
    return ({
        type: REMOVE_PRODUCE,
        id: id
    })
}

const UPDATE_PRODUCE = 'cart/UPDATE_PRODUCE';

export const updateProduce = (id, count) => {
    return ({
        type: UPDATE_PRODUCE,
        update: {
            id: id,
            count: count
        }
    })
}

const PURCHASE = 'cart/PURCHASE';

export const purchase = () => {
    return ({
        type: PURCHASE
    })
}
