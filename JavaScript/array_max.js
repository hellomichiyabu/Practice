var scores = [72, 93, 85, 68];
console.log('scores: ' + scores);

// この下にコードを書いてください
var sum= function(sum){
  var sum =0;
  for(var i = 0, len = scores.length;i<len ; i++){
    sum += scores[i];
  }
  return sum;
}
console.log('平均点は' + sum(scores)/scores.length + '点です');
console.log('最高点は' + Math.max.apply(null, scores) + '点です');
