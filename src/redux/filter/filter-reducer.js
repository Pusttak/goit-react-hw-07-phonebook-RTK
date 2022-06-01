const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter/valueChange':
      return payload;

    default:
      return state;
  }
};

export default filterReducer;
