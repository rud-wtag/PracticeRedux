import { actionTypes } from "@redux/constants/actionTypes";
export const setStudent = (student) => {
  return {
    type: actionTypes.SET_STUDENT,
    payload: student,
  };
};

export const deleteStudent = (studentId) => {
  return {
    type: actionTypes.DELETE_STUDENT,
    payload: studentId,
  };
};

export const editStudent = (student) => {
  return {
    type: actionTypes.EDIT_STUDENT,
    payload: student,
  };
};
