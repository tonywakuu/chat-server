# lib/cache.ex
defmodule Cache do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, :empty, [name: :cache])
  end

  def handle_call(:get, _from, state) do
    {:reply, state, state}
  end

  def handle_cast({:save, new}, _state) do
    {:noreply, new}
  end
end
