import { useReducer, useEffect, useCallback } from 'react';

const initialState = {
  isAlert: false,
  alert: {
    message: null,
    alertType: null,
  },
};

const alertReducer = (currentAlert, action) => {
  switch (action.type) {
    case 'SET':
      return {
        isAlert: true,
        alert: { alertType: action.alertType, message: action.message },
      };
    case 'CLEAR':
      return initialState;
    default:
      console.log('THIS SHOULD NOT HAPPEN');
  }
};
// test commit

const useAlert = () => {
  const [alert, dispatchAlert] = useReducer(alertReducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (alert.isAlert) {
        dispatchAlert({ type: 'CLEAR' });
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);

  const setAlert = useCallback((type, message) => {
    dispatchAlert({ type: 'CLEAR' });
    dispatchAlert({ type: 'SET', alertType: type, message: message });
  }, []);

  // const clearAlert = useCallback(() => {
  //   dispatchAlert({type: 'CLEAR'})
  // }, []);

  return {
    isAlert: alert.isAlert,
    message: alert.alert.message,
    type: alert.alert.alertType,
    setAlert: setAlert,
  };
};

export default useAlert;
