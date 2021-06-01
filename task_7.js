let arr = [ 'dsdas', 3, 4, 6, 8, 0];
let even = 0;
let odd= 0;

for(i = 0; i < arr.length; i++){
  if(typeof arr[i] === "string"){
    console.log(arr[i] + ' является строкой!, необходимо ввести число')
  }else if (typeof arr[i] === "object")   {
    console.log('вы ввели null!')
  }else if ( arr[i] === 0)   {
    console.log('вы ввели Ноль в массив, введите число больше 0!')
  }else if (arr[i] % 2 == 0){
    even++;
  } else{
    odd++;
  }
} 

console.log( even+ ' четных чисел')
console.log( odd+ ' нечетных чисел')
