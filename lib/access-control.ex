def auth_user( _, %{context: %{user_id: nil}}) do
  {:error, "Error Logged"}
end
def auth_user{ _, %{context: %{user_id: user_id}}} do
  {:ok, %{}}
end

object :member_query_root do
  field :member, :authenticated_user do
    resolve &auth_user/2
  end
end

object :authenticated_user_mutation do
  field :add_comment, :_, do: resolve &_
  field :close_account, :_, do: resolve &_
  _
end

object :member_mutation_root do
  field :member, :authenticated_user_mutation do
    resolve &auth_user/2
  end
end

object :query, do: import_fields :member_query_root
object :mutation, do: import_fields :member_mutation_root
