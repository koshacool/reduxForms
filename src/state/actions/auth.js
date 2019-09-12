export const AUTH_LOGGED_IN_SUCCESS = '[AUTH] - Logged in success';
export const AUTH_LOGGED_IN_FAIL = '[AUTH] - Logged in fail';
export const AUTH_CLICK_LOGOUT = '[AUTH] - Click logout button';
export const AUTH_SERVER_RESPONSE_UNAUTHORIZED = '[AUTH] - Server response unauthorized';

export const setAuthLoggedInSuccess = payload => ({
  type: AUTH_LOGGED_IN_SUCCESS,
  payload,
});

export const setAuthLoggedInFail = () => ({
  type: AUTH_LOGGED_IN_FAIL,
});

export const onServerResponseUnauthorized = () => ({
  type: AUTH_SERVER_RESPONSE_UNAUTHORIZED,
});

export const onClickLogout = () => ({
  type: AUTH_CLICK_LOGOUT,
});

