defmodule PoorNoMore.ExpensesTest do
  use PoorNoMore.DataCase

  alias PoorNoMore.Expenses

  describe "transactions" do
    alias PoorNoMore.Expenses.Transaction

    @valid_attrs %{amount: "120.5", category: "some category", description: "some description", merchant: "some merchant", name: "some name"}
    @update_attrs %{amount: "456.7", category: "some updated category", description: "some updated description", merchant: "some updated merchant", name: "some updated name"}
    @invalid_attrs %{amount: nil, category: nil, description: nil, merchant: nil, name: nil}

    def transaction_fixture(attrs \\ %{}) do
      {:ok, transaction} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Expenses.create_transaction()

      transaction
    end

    test "list_transactions/0 returns all transactions" do
      transaction = transaction_fixture()
      assert Expenses.list_transactions() == [transaction]
    end

    test "get_transaction!/1 returns the transaction with given id" do
      transaction = transaction_fixture()
      assert Expenses.get_transaction!(transaction.id) == transaction
    end

    test "create_transaction/1 with valid data creates a transaction" do
      assert {:ok, %Transaction{} = transaction} = Expenses.create_transaction(@valid_attrs)
      assert transaction.amount == Decimal.new("120.5")
      assert transaction.category == "some category"
      assert transaction.description == "some description"
      assert transaction.merchant == "some merchant"
      assert transaction.name == "some name"
    end

    test "create_transaction/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Expenses.create_transaction(@invalid_attrs)
    end

    test "update_transaction/2 with valid data updates the transaction" do
      transaction = transaction_fixture()
      assert {:ok, %Transaction{} = transaction} = Expenses.update_transaction(transaction, @update_attrs)
      assert transaction.amount == Decimal.new("456.7")
      assert transaction.category == "some updated category"
      assert transaction.description == "some updated description"
      assert transaction.merchant == "some updated merchant"
      assert transaction.name == "some updated name"
    end

    test "update_transaction/2 with invalid data returns error changeset" do
      transaction = transaction_fixture()
      assert {:error, %Ecto.Changeset{}} = Expenses.update_transaction(transaction, @invalid_attrs)
      assert transaction == Expenses.get_transaction!(transaction.id)
    end

    test "delete_transaction/1 deletes the transaction" do
      transaction = transaction_fixture()
      assert {:ok, %Transaction{}} = Expenses.delete_transaction(transaction)
      assert_raise Ecto.NoResultsError, fn -> Expenses.get_transaction!(transaction.id) end
    end

    test "change_transaction/1 returns a transaction changeset" do
      transaction = transaction_fixture()
      assert %Ecto.Changeset{} = Expenses.change_transaction(transaction)
    end
  end
end
