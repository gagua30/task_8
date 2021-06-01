let house = new Map ([
   ["door", "white"],
   ["window", "black"],
   ["tabel", "brown"]
 ])
 for (let key of house.keys()){
   console.log(" ключ - " + key);
 }
 for (let val of house.values()){
   console.log(" Значение - " +  val);
 }