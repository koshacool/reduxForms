import { AUTH_LOGGED_IN_SUCCESS, AUTH_LOGGED_IN_FAIL } from '../actions';

const initState = {
  isLoggedIn: false,
  isChecked: false,
  onLoginRedirect: false,
};

export default (state = initState, { type, payload = { onLoginRedirect: false } }) => {
  switch (type) {
    case AUTH_LOGGED_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isChecked: true,
        onLoginRedirect: payload.onLoginRedirect,
      };

    case AUTH_LOGGED_IN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isChecked: true,
      };

    default:
      return state;
  }
};
