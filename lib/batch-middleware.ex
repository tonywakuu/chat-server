object :post do
  field :name, :string
  field :author, :user do
    resolve fn post, _, _ ->
      batch({ __MODULE__, :users_by_id}, post.author_id, fn batch_results ->
        { :ok, Map.get(batch_results, post.author_id)}
      end
    )end
  end
end

def users_by_id(_, user_id) do
  users = Repo.all from u in User, where: u.id in ^user_ids
  Map.new(users, fn user -> {user.id, user} end)
end
