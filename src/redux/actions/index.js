import { ADD_CANDIDATE, FILTER} from "../constants/action-types";

export function addCandidate(details) {

    return{ type: ADD_CANDIDATE, details}
}

export function filterBy(filters) {
    return{ type: FILTER, filters}
}


