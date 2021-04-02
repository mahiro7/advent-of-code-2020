defmodule App do
  alias App.Pswd

  defmodule Pswd do
    defstruct [
      a: nil,
      b: nil,
      key: nil,
      pswd: nil
    ]
  end

  def main do
    part1 = get_list()
    |> Enum.map(fn x ->
      get_pswd(x)
      |> part_one
    end)
    |> Enum.filter(fn y -> y == true end)
    |> length

    part2 = get_list()
    |> Enum.map(fn x ->
      get_pswd(x)
      |> part_two
    end)
    |> Enum.filter(fn x -> x == true end)
    |> length

    IO.puts ("Part one: #{part1} \nPart two: #{part2}")
  end

  def get_list do
    {_, input} = File.read("input.txt")
    input
    |> String.split("\r\n")
  end

  def get_pswd(line) do
    [a, b, key, _, pswd] = String.split(line, [" ", ":", "-"])
    %Pswd{
      a: String.to_integer(a), 
      b: String.to_integer(b), 
      key: key, 
      pswd: pswd
    }
  end

  def part_one(%Pswd{a: a, b: b, key: key, pswd: pswd}) do
    original_size = String.length(pswd)
    new_size = pswd
               |> String.replace(key, "")
               |> String.length
    appears = original_size - new_size
    
    appears >= a && appears <= b
  end

  def part_two(%Pswd{a: a, b: b, key: key, pswd: pswd}) do
    String.at(pswd, a - 1) == key && String.at(pswd, b - 1) != key ||
    String.at(pswd, a - 1) != key && String.at(pswd, b - 1) == key
  end

end

App.main
