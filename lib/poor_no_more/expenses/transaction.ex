defmodule PoorNoMore.Expenses.Transaction do
  use Ecto.Schema
  import Ecto.Changeset

  schema "transactions" do
    field :amount, :decimal
    field :category, :string
    field :description, :string
    field :merchant, :string
    field :name, :string

    timestamps()
  end

  def changeset(transaction, attrs) do
    transaction
    |> cast(attrs, [:name, :category, :merchant, :amount, :description])
    |> validate_required([:name, :category, :merchant, :amount, :description])
  end
end
