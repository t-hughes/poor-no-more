defmodule PoorNoMoreWeb.TransactionController do
  use PoorNoMoreWeb, :controller

  alias PoorNoMore.Expenses
  alias PoorNoMore.Expenses.Transaction

  def index(conn, _params) do
    transactions = Expenses.list_transactions()
    render conn, "index.json", transactions: transactions
  end

  def new(conn, _params) do
    changeset = Expenses.change_transaction(%Transaction{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"transaction" => transaction_params}) do
    case Expenses.create_transaction(transaction_params) do
      {:ok, _transaction} ->

        transactions = Expenses.list_transactions()
        render conn, "index.json", transactions: transactions

    end
  end

# used for debugging
  # def create(conn, params), do: throw params

  def show(conn, %{"id" => id}) do
    transaction = Expenses.get_transaction!(id)
    render(conn, "show.json", transaction: transaction)
  end

  def edit(conn, %{"id" => id}) do
    transaction = Expenses.get_transaction!(id)
    changeset = Expenses.change_transaction(transaction)
    render(conn, "edit.html", transaction: transaction, changeset: changeset)
  end

  def update(conn, %{"id" => id, "transaction" => transaction_params}) do
    transaction = Expenses.get_transaction!(id)

    case Expenses.update_transaction(transaction, transaction_params) do
      {:ok, transaction} ->

        render conn, "index.json", transaction: transaction

    end
  end

  def delete(conn, %{"id" => id}) do
    transaction = Expenses.get_transaction!(id)
    {:ok, _transaction} = Expenses.delete_transaction(transaction)

      transactions = Expenses.list_transactions()
      render conn, "index.json", transactions: transactions

  end
end