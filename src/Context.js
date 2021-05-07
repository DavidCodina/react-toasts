import React, { useState, createContext } from 'react';

export const Context  = createContext({});
export const Consumer = Context.Consumer;


export const Provider = (props) => {
  const [ toasts, setToasts ] = useState([]);

  // A helper function to create Toasts.
  // This makes it easier for the user to define new toasts
  // without having to interact directly with the toasts array.
  const createToast = (config = {}) => {
    config.header   = config.header   || "Header Goes Here:";
    config.body     = config.body     || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    config.theme    = config.theme    || "primary";
    config.duration = config.duration || 5000;

    const newToast = {
      header:  config.header,
      body:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      classes: `toast toast-${config.theme} rounded-3 fade show`,
      duration: config.duration
    };

    setToasts(currentToasts => [ ...currentToasts, newToast ]);
  }

  return (
    <Context.Provider value={{ toasts, setToasts, createToast }}>
      { props.children }
    </Context.Provider>
  );
};
