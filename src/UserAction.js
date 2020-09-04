export const loadUsers = () => {
  return {
    type: 'LOAD',
    payload: {
      request: {
        url: '/users',
      },
    },
  };
};
