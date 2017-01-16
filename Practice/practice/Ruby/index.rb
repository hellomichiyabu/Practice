words = { "apple" => "りんご", "dog" => "犬", "book" => "本", "milk" => "牛乳", "library" => "図書館" }

# 変数loop_countに0を代入してください
loop_count = 0

# 変数correct_countに0を代入してください
correct_count = 0

puts "英単語ゲームスタート！stopと入力したら中断できます。"

words.each do |key,value|
  puts "#{value}に対応する英単語を入力してください。"

  answer = gets.chomp

  if answer == "stop"
    break
  elsif answer == key
    puts "正解です。"
    # correct_countの値を1増やしてください
    correct_count += 1
  else
    puts "不正解です。"
  end

  # loop_countの値を1増やしてください
  loop_count += 1
end

# percentageメソッドを定義してください。
def percentage(a, b)
  if b == 0
    return 0
  end
  a * 100 / b
end

puts "あなたの正解率は#{percentage(correct_count, loop_count)}パーセントです"
