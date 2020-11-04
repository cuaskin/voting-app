import React from 'react';
import { isServer } from 'helpers/utils';
import { initializeStore } from 'store/store';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const getOrCreateStore = (initialState?: InitialState) => {
  if (isServer) {
    return initializeStore(initialState);
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  const store = window[__NEXT_REDUX_STORE__];
  return store;
};

export default (App) => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }
      return {
        ...appProps,
        initialReduxState: { ...reduxStore.getState() },
      };
    }
    reduxStore;
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
