import { Dispatch } from 'redux';

export const resetStore = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'RESET_STORE',
  });
};
