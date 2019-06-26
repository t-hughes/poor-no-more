defmodule PoorNoMore.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :name, :string
      add :category, :string
      add :merchant, :string
      add :amount, :decimal
      add :description, :string

      timestamps()
    end

  end
end
