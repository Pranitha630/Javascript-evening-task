//47
function lastword(str){
    
   let length=0
   let len=str.length-1

   while(len>=0 && str[len]=== ' '){
    len--
   }
   while(len>=0 && str[len]!==' '){
    length++

len--
}
return length
  
    

}
console.log(lastword('Because React-Bootstrap doesnt depfgend'))
console.log('----------');

//48


//49
function sqqrt(num){
let squar=Math.sqrt(num)
console.log(squar);

}
sqqrt(20)
//50
function sum(numerForSum){
    while(numerForSum>=10){
    let strnum=String(numerForSum).split('')
   
    
    
   numerForSum=strnum.reduce((prev,curr)=>
    prev+parseInt(curr)
  ,0)}
   console.log(numerForSum

   );
   
}
sum(12345678)
//51
function evennum(arrayOfNum){
let sum=0
for(i=0;i<arrayOfNum.length;i++){
    if(arrayOfNum[i]%2==0){
        sum+=arrayOfNum[i]
    }
    return sum
}
console.log(sum);

}
//evennum([1,2,4,6,8,9,4,3,6,7])
let array3=[1,2,4,6,7,4,3]
let funary=evennum(array3)
console.log(funary);

