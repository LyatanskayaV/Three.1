(function(){
  var mas = {},
       i, tmp;
  for (i = 0; i <= 999; i += 1) {
       tmp = i % 10 + ((i % 100) - (i % 10)) / 10 + (i / 100) ^ 0;
       if (mas[tmp] === undefined) {
           mas[tmp] = 1;
       } else {
           mas[tmp] += 1;
       }
  }
  tmp = 0;
  for (i in mas) {
      tmp += mas[i] * mas[i];
  }
  console.log("Количество счастливых билетиков = " + tmp);
}())
