defmodule PoorNoMoreWeb.Router do
  use PoorNoMoreWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PoorNoMoreWeb do
    pipe_through :api

    get "/transactions", TransactionController, :index
    get "/transactions/:id", TransactionController, :show
    post "/transactions", TransactionController, :create
    put "/transactions/:id", TransactionController, :update
    delete "/transactions/:id", TransactionController, :delete
  end

  scope "/", PoorNoMoreWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end

end