import { actionTypes } from "@redux/constants/actionTypes";
export const setStudent = (student) => {
  return {
    type: actionTypes.SET_STUDENT,
    payload: student,
  };
};

export const deleteStudent = (students) => {
  return {
    type: actionTypes.DELETE_STUDENT,
    payload: students,
  };
};

export const editStudent = (students) => {
  return {
    type: actionTypes.EDIT_STUDENT,
    payload: students,
  };
};
