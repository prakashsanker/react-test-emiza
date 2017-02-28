import fetch from 'isomorphic-fetch';
export const REQUEST_DELIVERIES = "FETCH_DELIVERIES";

export function requestDeliveries() {
  return {
    type: REQUEST_DELIVERIES,
    status: 'sent',
  }
}


export const RECEIVE_DELIVERIES = "RECEIVE_DELIVERIES";

export function receiveDeliveries(json) {
  return {
      type: RECEIVE_DELIVERIES,
      deliveries: json,
      status: 'successful',
  };
}

const testData =
{
  "Data":[
     {
       "Docket":"D1001",
       "Customer":"Customer Name 1",
       "AT":"Delhi",
       "Status":"On_Time"
     },
     {
       "Docket":"D1002",
       "Customer":"Customer Name 2",
       "AT":"Mumbai",
       "Status":"Delayed"
     },
     {
       "Docket":"D1003",
       "Customer":"Customer Name 3",
       "AT":"Delhi",
       "Status":"On_Time"
     },
      {
       "Docket":"D1004",
       "Customer":"Customer Name 4",
       "AT":"Chennai",
       "Status":"On_Time"
     },
     {
       "Docket":"D1005",
       "Customer":"Customer Name 5",
       "AT":"Mumbai",
       "Status":"Delayed"
     },
     {
       "Docket":"D1006",
       "Customer":"Customer Name 6",
       "AT":"Pune",
       "Status":"On_Time"
     },
     {
       "Docket":"D1007",
       "Customer":"Customer Name 7",
       "AT":"Chennai",
       "Status":"Delayed"
     },
     {
       "Docket":"D1008",
       "Customer":"Customer Name 8",
       "AT":"Pune",
       "Status":"On_Time"
     },
     {
       "Docket":"D1009",
       "Customer":"Customer Name 9",
       "AT":"Hydrabad",
       "Status":"On_Time"
     },
     {
       "Docket":"D1010",
       "Customer":"Customer Name 10",
       "AT":"Chennai",
       "Status":"On_Time"
     }
   ]
};

export function fetchDeliveries() {

  let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': "text/plain"
    });
    return function(dispatch) {
      dispatch(requestDeliveries());
      return fetch(`http://192.168.1.9:8080/UserManagement/rest/UserService/data`, {
          method: 'GET',
          headers: header,
          body: null,
          credentials: "same-origin",
        })
        .then(response => {
          console.log(response);
          return testData.Data;
        })
        .then(json => {
          dispatch(receiveDeliveries(json));
        })
        .catch(response => {
          dispatch(receiveDeliveries(testData.Data));
        })
    }
}





/* TODO: Add error actions as we assume happy path
export const FETCH_DELIVERIES_ERROR = "FETCH_DELIVERIES_ERROR";

export function fetchDeliveriesError(json) {
  return {
      type: FETCH_DELIVERIES_ERROR,
  }
}

*/
