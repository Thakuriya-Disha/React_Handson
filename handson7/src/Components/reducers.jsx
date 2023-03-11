import { ADD_STUDENT, UPDATE_DETAILS, DELETE_DETAILS } from "./actions";

const initialState = {
    studentList:[],
    eachStudentDetails:{}
};

const StudentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_STUDENT: {
            return{...state};
        }
        case UPDATE_DETAILS: {
            return{...state};
        }
        case DELETE_DETAILS: {
            return{...state};
        }
    }
    return state;
};

export default StudentReducer;