import produceData from '../mockData/produce.json';

export default function produceReducer(state = {}, action){
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach( p => {
                newState[p.id] = p;
            })
            return newState;
        case CHANGE_LIKE:
            const newState2 = { ...state };
            newState2[action.produce.id].liked = !newState2[action.produce.id].liked;
            return newState2;
        default:
            return state;
    };
}

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
    return ({
        type: POPULATE,
        produce: produceData
    })
}

const CHANGE_LIKE = 'produce/CHANGE_LIKE';

export const changeLike = (produce) => {
    return ({
        type: CHANGE_LIKE,
        produce
    })
}

export const getAllProduce = (state) => Object.values(state.produce);
