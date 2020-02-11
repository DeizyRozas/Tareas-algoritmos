function printAverage (x){
  sum = 0;
 
  for (var i=0; i<x.length; i++){
    sum += x[i];
  }
 sum= sum/x.length;
 return sum;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
 
y = printAverage([2,5,8]);
console.log(y); // should log 5




 function returnOddArray(y){
  var odd=[];
  for(i=1; i<=y;i++){
    if(i%2===1){
      odd.push(i);
    }
  }
  return odd;

}
y = returnOddArray(255);
console.log(y);




function squareValue(x){
  
  for( var i=0;i<x.length; i++){
    x[i]=x[i]*x[i];
  }
  return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
 
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]