import { ADD_CANDIDATE, FILTER } from "../constants/action-types";

const initialState = {
    candidates: [],
    filters: {
        position:"",
        experience:"",
        availibility:"",
        location:""
    },
    filteredCandidates:[]
};

function rootReducer(state = initialState, action ){
    if (action.type === ADD_CANDIDATE) {
        return Object.assign({}, state, {
            candidates: state.candidates.concat(action.details)
          });
      }
    if (action.type === FILTER) {

        return Object.assign({}, state, {            
            filteredCandidates: state.candidates.filter((candidate) => {
                return (candidate.location).includes(action.filters.location) && (candidate.experience).includes(action.filters.experience) && (candidate.position).includes(action.filters.position) && (candidate.availibility).includes(action.filters.availibility)
                // candidate.experience === action.filters.experience && candidate.availibility === action.filters.availibility && candidate.position === action.filters.position
            })
          });
      }
    return state;
}

export default rootReducer;
