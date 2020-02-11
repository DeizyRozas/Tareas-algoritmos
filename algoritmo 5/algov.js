function resetNegativos(x){
    for(i=0; i<x.length; i++){
      if(x[i]<0){
        x[i]=0
      }
    }
    return x;
  }
  arr= resetNegativos([1,2,-1,-3]);
  console.log (arr);


  function moverAdelante(x){
    var temp=[];
    for(var i=1; i<x.length; i++){
      temp[i-1]=x[i];
    }
    x=temp;
    x.push(0);
    return x
  }
  arr= moverAdelante([1,2,3,4,5]);
  console.log(arr);




  function reverso(x){
    var temp=[];
    for(var i=0; i<x.length; i++){
        temp[i]=x[x.length-1-i];
    }
    x=temp;
    return x;
  }
  arr= reverso([1,2,3,4,5]);
  console.log (arr);

  Crea una función que cambie un array repitiendo sus valores originales 
  (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) 
  debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

  