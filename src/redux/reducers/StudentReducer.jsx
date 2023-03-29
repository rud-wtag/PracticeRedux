const initialState = {
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
    case "ADD_STUDENT":
      return action.student;
    case "UPDATE_STUDENT":
      return action.student;
    case "DELETE_STUDENT":
      return action.student;
    case "EDIT_STUDENT":
      return action.student;
    default:
      return state;
  }
};
