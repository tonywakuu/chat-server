def graphql_plug(conn, opts) do
  schema =
    if internal_request?(conn) do
      InternalSchema
    else
      PublicSchema
    end
  opts = Keyword.put(opts, :schema_mod, schema)
  Absinthe.plug.call(conn, opts)
end
