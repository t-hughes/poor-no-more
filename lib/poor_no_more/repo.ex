defmodule PoorNoMore.Repo do
  use Ecto.Repo,
    otp_app: :poor_no_more,
    adapter: Ecto.Adapters.Postgres
end
