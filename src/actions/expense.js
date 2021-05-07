import {
  FETCH_WEEKLY_EXPENSE_SUCCESS,
  FETCH_WEEKLY_EXPENSE_FAIL,
  FETCH_MONTHLY_EXPENSE_SUCCESS,
  FETCH_MONTHLY_EXPENSE_FAIL,
  FETCH_YEARLY_EXPENSE_SUCCESS,
  FETCH_YEARLY_EXPENSE_FAIL
} from './types';
// import { setAlert } from './alert';
import axios from 'axios';
const base_url = 'https://finance-tracker-server.herokuapp.com';
// const base_url = 'http://localhost:3500';

export const getWeeklyExpense = userIdd => async dispatch => {
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }
  const body = JSON.stringify({
    startDate: week[0],
    endDate: week[6]
  });
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  try {
    const response = await axios.post(
      base_url + `/api/users/${userIdd}/calculate/week`,
      body,
      config
    );
    console.log(response);
    dispatch({
      type: FETCH_WEEKLY_EXPENSE_SUCCESS,
      payload: response.data
    });
    // history.push('/dashboard');
    // dispatch(setAlert('Items were fetched successfully', 'success'));
  } catch (error) {
    dispatch({
      type: FETCH_WEEKLY_EXPENSE_FAIL,
      payload: error
    });
    // dispatch(setAlert(error.response.data.error, 'danger'));
  }
};
export const getMonthlyExpense = userIdd => async dispatch => {
  var date = new Date();

  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  // console.log(month);
  const body = JSON.stringify({
    startDate: firstDay,
    endDate: lastDay
  });
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  try {
    const response = await axios.post(
      base_url + `/api/users/${userIdd}/calculate/month`,
      body,
      config
    );
    console.log(response);
    dispatch({
      type: FETCH_MONTHLY_EXPENSE_SUCCESS,
      payload: response.data.items[0]
    });
    // history.push('/dashboard');
    // dispatch(setAlert('Items were fetched successfully', 'success'));
  } catch (error) {
    dispatch({
      type: FETCH_MONTHLY_EXPENSE_FAIL,
      payload: error
    });
    // dispatch(setAlert(error.response.data.error, 'danger'));
  }
};
export const getYearlyExpense = userIdd => async dispatch => {
  let firstDay = new Date(new Date().getFullYear(), 0, 1).toISOString();
  let lastDay = new Date().toISOString();
  const body = JSON.stringify({
    startDate: firstDay,
    endDate: lastDay
  });
  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  try {
    const response = await axios.post(
      base_url + `/api/users/${userIdd}/calculate/year`,
      body,
      config
    );
    console.log(response);
    dispatch({
      type: FETCH_YEARLY_EXPENSE_SUCCESS,
      payload: response.data
    });
    // history.push('/dashboard');
    // dispatch(setAlert('Items were fetched successfully', 'success'));
  } catch (error) {
    dispatch({
      type: FETCH_YEARLY_EXPENSE_FAIL,
      payload: error
    });
    // dispatch(setAlert(error.response.data.error, 'danger'));
  }
};


export const getWeeklyInitial = async (dispatch,userIdd) => {
  let curr = new Date();
let week = [];

for (let i = 1; i <= 7; i++) {
  let first = curr.getDate() - curr.getDay() + i;
  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
  week.push(day);
}  
 const body = JSON.stringify({
   startDate:week[0],endDate:week[6]
 });
 const config = {
   headers: { 'Content-Type': 'application/json' }
 };
try {
    const response = await axios.post(base_url + `/api/users/${userIdd}/calculate/week`,body,config);
    console.log(response);
    dispatch({
      type: FETCH_WEEKLY_EXPENSE_SUCCESS,
      payload: response.data
    });
    // history.push('/dashboard');
    // dispatch(setAlert('Items were fetched successfully', 'success'));
  } catch (error) {
    dispatch({
      type: FETCH_WEEKLY_EXPENSE_FAIL,
      payload: error
    });
    // dispatch(setAlert(error.response.data.error, 'danger'));
  }
}

export const getMonthlyInitial = async (dispatch,userIdd) => {
  var date = new Date();
 
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
 
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); 
   // console.log(month);
   const body = JSON.stringify({
     startDate: firstDay,
     endDate: lastDay
   });
   const config = {
     headers: { 'Content-Type': 'application/json' }
   };
   try {
     const response = await axios.post(base_url + `/api/users/${userIdd}/calculate/month`,body,config);
     console.log(response);
     dispatch({
       type: FETCH_MONTHLY_EXPENSE_SUCCESS,
       payload: response.data.items[0]
     });
     // history.push('/dashboard');
     // dispatch(setAlert('Items were fetched successfully', 'success'));
   } catch (error) {
     dispatch({
       type: FETCH_MONTHLY_EXPENSE_FAIL,
       payload: error
     });
     // dispatch(setAlert(error.response.data.error, 'danger'));
   }
 };
 export const getYearlyInitial = async (dispatch,userIdd) => {
   let firstDay = new Date(new Date().getFullYear(), 0, 1).toISOString();
 let lastDay = new Date().toISOString();
 const body = JSON.stringify({
   startDate: firstDay,
   endDate: lastDay
 });
 const config = {
   headers: { 'Content-Type': 'application/json' }
 };
   try {
     const response = await axios.post(base_url + `/api/users/${userIdd}/calculate/year`,body,config);
     console.log(response);
     dispatch({
       type: FETCH_YEARLY_EXPENSE_SUCCESS,
       payload: response.data
     });
     // history.push('/dashboard');
     // dispatch(setAlert('Items were fetched successfully', 'success'));
   } catch (error) {
     dispatch({
       type: FETCH_YEARLY_EXPENSE_FAIL,
       payload: error
     });
     // dispatch(setAlert(error.response.data.error, 'danger'));
   }
 };