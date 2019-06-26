defmodule PoorNoMoreWeb.PageController do
  use PoorNoMoreWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
