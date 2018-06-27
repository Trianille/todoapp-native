import * as types from "../constants/ActionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          head: action.head,
          body: action.body,
          importance: action.importance,
          timed: action.timed,
          timeEnds: action.timeEnds,
          expired: false,
          completed: false
        }
      ];
    case types.COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      );
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case types.EXPIRED_TODO:
      return state.map(
        todo => (todo.id === action.id ? {...todo, expired: true} : todo)
      );
    default:
      return state;
  }
};

export default todos;
