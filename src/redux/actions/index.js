import { ADD_CANDIDATE, FILTER_BY_LOCATION} from "../constants/action-types";

export function addCandidate(details) {

    return{ type: ADD_CANDIDATE, details}
}

export function filterByLocation(location) {

    return{ type: FILTER_BY_LOCATION, location}
}


