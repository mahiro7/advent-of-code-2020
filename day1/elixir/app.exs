{:ok,  x} =  File.read("./numbers.txt")
numbers = 
  x 
  |> String.split
  |> Enum.map(&String.to_integer/1)

[{a, b} | _] = for i <- numbers, j <- numbers, i + j == 2020, do: {i, j}
[{d, e, f} | _] = for i <- numbers, j <- numbers, k <- numbers, i + j + k == 2020, do: {i, j, k}

IO.puts "Part One: \n #1: #{a} \n #2: #{b} \n Answer: #{a*b} \n\n"
IO.puts "Part Two: \n #1: #{d} \n #2: #{e} \n #3: #{f} \n Answer: #{d*e*f}"

