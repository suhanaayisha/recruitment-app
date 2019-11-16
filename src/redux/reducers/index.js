import { ADD_CANDIDATE, FILTER_BY_LOCATION } from "../constants/action-types";

const initialState = {
    candidates: [],
    filteredCandidates: []
};

function rootReducer(state = initialState, action ){
    if (action.type === ADD_CANDIDATE) {
        return Object.assign({}, state, {
            candidates: state.candidates.concat(action.details)
          });
      }
    if (action.type === FILTER_BY_LOCATION) {
        if (action.location === "All"){
            return Object.assign({}, state, {
                filteredCandidates: state.candidates
              });
        }
        return Object.assign({}, state, {            
            filteredCandidates: state.candidates.filter((candidate) => {
                return candidate.location === action.location
            })
          });
      }
    return state;
}

export default rootReducer;