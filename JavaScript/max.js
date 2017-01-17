var scores = {Taro: 72, Ken: 93, Tom: 85, John: 68};

// この下にコードを書いてください
for(key in scores){
  console.log(key + "さんは" + scores[key] + "点です");
}

var i=0;
var sum=0;

for (var key in scores){
  sum+=scores[key];
  i++;
}
var average = sum / i;
  console.log("平均点は" + average + "点です。");

// 最高点を入れるための変数
var bestScore = 0;
// 最高点の人の名前を入れるための変数
var name = '';
for (key in scores){
  if(scores[key]>average){
      console.log(key + "さんは平均点より上です");
    }else if(scores[key]==average){
      console.log(key + "さんは平均点と同じです");
    }else{
      console.log(key+ "さんは平均点より下です");
    }

    if (scores[key] > bestScore) {
    // その点数でbestScoreを上書きする
    bestScore = scores[key];
    // 最高点を持つ人の名前を上書き
    name = key;
    }
  }

console.log(name + 'さんが最高点です');
