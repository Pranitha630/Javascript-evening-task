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
console.log('------------------------------------------------------------------');

//55
function ascend(ascarr){
for(let i=0;i<ascarr.length;i++){
    for(let j=0;j<ascarr.length;j++){
        if(ascarr[j]>ascarr[j+1]){
            let temp=ascarr[j]
            ascarr[j]=ascarr[j+1]
           ascarr[j+1]=temp
        }
    }
    
}
console.log(ascarr);

}
ascend([5,4,3,2,6,9,1])

//56 length of the  longest string
function strlength(longstr){
    let lost=longstr.join('')
    let spllost=lost.split(' ')
   
    
    let count=0
    let word=''
    for(let i=0;i<spllost.length;i++){
       if(count<spllost[i].length){
        count=spllost[i].length
word=spllost[i]
       }
    }
    console.log(count);
    console.log(word);
    
    
    // console.log(lost);
    
    
}
strlength(['Write a program to find the length of the longest consecutive sequence in an array.'])

//57 && 58
function intersec(arr1,arr2){
let newarr=[]
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            newarr.push(arr1[i])
        }
    }
}
console.log(newarr);

}
intersec([1,2,3,4,5],[2,3,4,6,7])

//59
function frequency(strfre){
// let obj = {};
let arraaa=[]
for(let i=0;i<strfre.length;i++)
{
  if(arraaa[strfre[i]]==undefined)
  {
   arraaa[strfre[i]]=1;
  }
  else
  {
    arraaa[strfre[i]]+=1;
  }
}
console.log(arraaa);
debugger;
}
frequency('jananiroshinidharaniprani')

//60

function occu(strCharOcc){
let word=i
let count=0
for(i=0;i<strCharOcc.length;i++){
    if(strCharOcc[i]===word){
        count++
    }

}
console.log(count);

}
occu('jananiroshinidharaniprani')