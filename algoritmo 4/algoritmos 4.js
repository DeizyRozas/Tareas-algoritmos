
/*function numerosmayores(p){
  var Y=3;
  var x=0;
  for (var i=0; i<p.length; i++){
    if(p[i]>Y){
      x=x+1;
    }
  }
 return (x+' números son mayores que '+Y);
}
console.log (numerosmayores([1,8,5,2]));




function minmaxprom(arr){
  var min= arr[0];
  var max= arr[0];
  var prom= arr[0];
  for(var i=1; i<arr.length; i++){
    if(min>arr[i]){
      min=arr[i];
    }

    if(max<arr[i]){
      max=arr[i];
    }

    prom=prom+arr[i];
    
  } 
  console.log(min)
  console.log(max);
  prom=prom/arr.length;
  console.log (prom);
}

minmaxprom([1,7,12,3]);







function reemplazonegativos(u){
for(var i=0; i< u.length ; i++){
  if(u[i]<0){
    u[i]='Dojo';
  }
}
return (u);
}
console.log(reemplazonegativos([1,2,-3,-5,5]));*/






function removerRango(arr,s,f){
  var temp=0;
  for(var i=0; i<arr.length; i++){
    if(i==s){
      for(var x=s; x<=f; x++){
        temp=arr[arr.length-1];
        arr[arr.length-1]=arr[x];
        arr[x]=temp;
        arr.pop();
      }
    }
  }
return(arr);
}

console.log(removerRango([20,30,40,50,60,70],2,4));