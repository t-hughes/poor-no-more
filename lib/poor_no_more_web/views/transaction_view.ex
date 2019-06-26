defmodule PoorNoMoreWeb.TransactionView do
  use PoorNoMoreWeb, :view

  def render("index.json", %{transactions: transactions}) do
    %{
      transactions: Enum.map(transactions, &transactions_json/1)
    }
  end

  def render("show.json", %{transaction: transaction}) do
    %{
      transaction: transactions_json(transaction)
    }
  end

  def transactions_json(transaction) do
    %{
      id: transaction.id,
      name: transaction.name,
      category: transaction.category,
      merchant: transaction.merchant,
      amount: transaction.amount,
      description: transaction.description
    }
  end

end
