def print_hand(hand, name='ゲスト'):
    hands = ['グー','チョキ','パー']

    # リストhandsを用いて、選択した手が出力されるように書き換えましょう
    print(name + 'は' + hands[hand] + 'を出しました')

print('じゃんけんをはじめます')
player_name = input('名前を入力してください：')
print('何を出しますか？（0: グー, 1: チョキ, 2: パー）')


player_hand = int(input('数字で入力してください：'))

print_hand(player_hand, player_name)
