// import {
//   userReset,
// } from '../actions/';
// import { storageAccessToken, storageIsSAWAccount } from '../../helpers/storage';
// import { toogleAccountBar } from '../../helpers/';
// import { isIframeDocument } from '../../helpers/isGameRunning.js';


export const logoutUserOnServerResponseUnauthorized = ({ dispatch, getState }) => next => action => {
  next(action);
  // const { type } = action;
  // const { auth: { isLoggedIn } } = getState();
  //
  // switch (type) {
  //   case AUTH_CLICK_LOGOUT:
  //     storageAccessToken.remove();
  //     storageIsSAWAccount.remove();
  //     break;
  //   case AUTH_SERVER_RESPONSE_UNAUTHORIZED:
  //     // Logout user only in main document (not inside iframe)
  //     if (!isIframeDocument()) {
  //       storageAccessToken.remove();
  //       storageIsSAWAccount.remove();
  //
  //       // eslint-disable-next-line max-depth
  //       if (isLoggedIn) {
  //         toogleAccountBar(true);
  //         dispatch(userReset());
  //         dispatch(setAuthLoggedInFail());
  //       }
  //     }
  // }
};

export default [
  logoutUserOnServerResponseUnauthorized,
];
