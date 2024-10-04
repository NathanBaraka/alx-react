import { Map } from 'immutable';
import fetch from 'node-fetch'; // Adjust if needed for your project setup

export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications: data,
});

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));

    return fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch(() => {
        dispatch(setLoadingState(false));
      });
  };
};

