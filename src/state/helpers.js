import store from './store';

export const getAppFromStore = () => store.getState().app;
