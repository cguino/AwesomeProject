const initialState = {users: []};

export const rootReducer = (state = initialState, {type, ...payload}) => {
  switch (type) {
    case 'LOAD_SUCCESS':
      return {...state, users: payload.payload.data.data};
    default:
      return state;
  }
};
