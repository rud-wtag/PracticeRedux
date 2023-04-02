const initialState = {
  lastId: 3,
  students: [
    {
      id: 1,
      name: "mr.x",
      grade: "A",
    },
    {
      id: 2,
      name: "mr.y",
      grade: "B",
    },
    {
      id: 3,
      name: "mr.z",
      grade: "A",
    },
  ],
};
export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STUDENT":
      return {
        ...state,
        lastId: state.lastId + 1,
        students: [
          ...state.students,
          { id: state.lastId + 1, ...action.payload },
        ],
      };
    case "DELETE_STUDENT":
      const filteredStudents = state.students.filter(
        (student) => student.id !== action.payload
      );
      return { ...state, students: filteredStudents };
    case "EDIT_STUDENT":
      const updated = state.students.map((student) => {
        if (student.id === action.payload.id)
          return { ...student, ...action.payload };
        return student;
      });
      return {
        ...state,
        students: updated,
      };
    default:
      return state;
  }
};
