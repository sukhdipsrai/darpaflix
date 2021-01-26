import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.jsx'
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
      preloadedState = {
        session: {
          currentUser: window.currentUser
        }
      };
    }
    debugger
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);
})