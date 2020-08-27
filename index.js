// Your code here
/*
`mapToNegativize(sourceArray)`
- `mapToNoChange(sourceArray)`
- `mapToDouble(sourceArray)`
- `mapToSquare(sourceArray)`*/
sourceArray = [1,2,3];
function mapToNegativize(sourceArray){
 let  newArray =[];
 for(let i=0;i<sourceArray.length;i++)
 newArray[i]= sourceArray[i]*-1;
return newArray;
}
mapToNegativize(sourceArray);
function mapToNoChange(sourceArray){
  return sourceArray;
}
mapToNegativize(sourceArray);
function mapToDouble(sourceArray){
  let newArray=[];
  for(let i=0;i<sourceArray.length;i++)
  newArray[i]= sourceArray[i]*2;
return newArray;
}
function mapTosquare(sourceArray){
  let newArray=[];
  for(let i=0;i<sourceArray.length;i++)
  newArray[i]=   Math.pow(sourceArray[i],2);
  Math.pow(sourceArray[i],2)
return newArray;
}
