import { FETCH_API, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  totalValue: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((e) => e !== 'USDT'),
    };

  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
      totalValue: state.totalValue + action.payload.totalValue,
    };

  default:
    return state;
  }
};

export default wallet;
