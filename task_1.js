let message = prompt ('Введите значение')

if( message % 2 == 0){
  console.log (Number(message) + " четное число");
}   else if ( message % 2 == 1) {
  console.log (Number(message) + " нечетное число");
} else if ( message  == "NaN") {
  console.log (message + " это NaN");
} else {
  console.log ("Упс, кажется, вы ошиблись");
}