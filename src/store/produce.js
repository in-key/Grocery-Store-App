import produceData from '../mockData/produce.json';

export default function produceReducer(state = {}, action){
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach( p => {
                newState[p.id] = p;
            })
            return newState;
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
