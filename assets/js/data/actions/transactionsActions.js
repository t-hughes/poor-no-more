import data from '../data';

export const getTransactions = () => {
  return dispatch => {
    data.getTransactions()
    .then(response => {
      if (response.errors)
        dispatch({
          type: "TRANSACTIONS_ERROR",
          errors: response.errors
        })
      else
        response.data.transactions.map(x => x.amount = parseFloat(x.amount));
        dispatch({
          type: "TRANSACTIONS",
          transactions: response.data.transactions
        });
    }).then(error => {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        errors: error
      })
    });
  };
};

export const createTransaction = payload => {
  return dispatch => {
    data.createTransaction(payload)
    .then(response => {
      if (response.errors)
        dispatch({
          type: "TRANSACTIONS_ERROR",
          errors: response.errors
        })
      else
        response.data.transactions.map(x => x.amount = parseFloat(x.amount));
        dispatch({
          type: "TRANSACTIONS",
          transactions: response.data.transactions
        });
    }).then(error => {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        errors: error
      })
    });
  }
};

export const deleteTransaction = id => {
  return dispatch => {
    data.deleteTransaction(id)
    .then(response => {
      if (response.errors)
        dispatch({
          type: "TRANSACTIONS_ERROR",
          errors: response.errors
        })
      else
        response.data.transactions.map(x => x.amount = parseFloat(x.amount));
        dispatch({
          type: "TRANSACTIONS",
          transactions: response.data.transactions
        });
    }).then(error => {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        errors: error
      })
    });
  }
};
