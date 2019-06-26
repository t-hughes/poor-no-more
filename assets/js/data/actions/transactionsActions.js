import data from '../data';

const mapResponseData = transactions => transactions.map(transaction => {
  if (transaction.amount !== undefined || transaction.amount !== null) {
    transaction.amount = parseFloat(transaction.amount);
  }
  return transaction;
});

const dispatchError = (error, dispatch) => {
  dispatch({
      type: "TRANSACTIONS_ERROR",
      errors: error
    });
}

const dispatchSuccess = (transactions, dispatch) => {
  dispatch({
    type: "TRANSACTIONS",
    transactions: mapResponseData(transactions)
  });
}

const successCallback = dispatch => response => {
  if (response.errors) {
    dispatchError(response.errors, dispatch);
    return response;
  }
  dispatchSuccess(response.data.transactions, dispatch);
}


export const getTransactions = () => {
  return dispatch => {
    data.getTransactions()
      .then(successCallback(dispatch))
      .catch(error => { dispatchError(error, dispatch); });
  };
};

export const createTransaction = payload => {
  return dispatch => {
    data.createTransaction(payload)
      .then(successCallback(dispatch))
      .catch(error => { dispatchError(error, dispatch); });
  }
};

export const deleteTransaction = id => {
  return dispatch => {
    data.deleteTransaction(id)
      .then(successCallback(dispatch))
      .catch(error => { dispatchError(error, dispatch); });
  }
};