const object =  [ { x: 1, y: 1 },
               { x: 2, y: 3 },
               { x: 3, y: 3 },
               { x: 3, y: 4 },
               { x: 4, y: 5 } ]

//console.log(object);               


//console.log(object[0].x);
//console.log(object.length);
let ct = 0;

for (let i = 0; i <= object.length-1 ; i++){
   console.log(object[i]);
   if(object[i].x==object[i].y){
      ct = ct + 1
   }
   
   
}

console.log(ct);