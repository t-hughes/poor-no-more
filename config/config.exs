# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :poor_no_more,
  ecto_repos: [PoorNoMore.Repo]

# Configures the endpoint
config :poor_no_more, PoorNoMoreWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "axezDQgnRGbUD7fHsF9PfkV6v6BBQ0pJWmd9rxKIUPXvN9cYMaVRDPxQ7vqGFwK2",
  render_errors: [view: PoorNoMoreWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PoorNoMore.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
