export const ADD_STUDENT = "ADD_STUDENT";
export const UPDATE_DETAILS = "UPDATE_DETAILS";
export const DELETE_DETAILS = "DELETE_DETAILS";

export const addStudentAction = (payload) => {
    return {
    type: ADD_STUDENT,
    payload
    };
};

export const updateDetailsAction = (payload) => {
    return {
    type: UPDATE_DETAILS,
    payload
    };
};

export const deleteDetailsAction = (payload) => {
    return {
    type: DELETE_DETAILS,
    payload
    };
};