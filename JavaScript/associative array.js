var persons = {
  Taro: {height: 1.7, weight: 70},
  Ken: {height: 1.6, weight: 65},
  Tom: {height: 1.8, weight: 72},
  John: {height: 1.8, weight: 58},
};

// この下にコードを書いてください

for (var key in persons) {

  console.log(key + 'さん');
  console.log('身長は' + persons[key].height + 'mです');
  console.log('体重は' + persons[key].weight + 'kgです');
  console.log('BMIは' + Math.round(persons[key].weight/persons[key].height/persons[key].height) + 'です');
}
