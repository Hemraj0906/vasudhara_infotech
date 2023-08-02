// start project command npm run dev
// question is assingment 
// to create crud operation on 2 category
// code assigment problem
* Any Two of These Three

1.Pattern

	   1
 	  234
         56789
ans->   const pattern=(n)=>{
    let str="";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            str+=j;
        }
        str+="\n";
    }
    return str;
}
console.log(pattern(5));

2. reverse string in Javascript with out using reverse() function
code->
  function reverseString(str){
    let reversedStr="";
    for(let i=str.length-1;i >=0;i--){
        reversedStr +=str[i];
        
    }
    return reversedStr
}
console.log(reverseString("hemraj"))

3. Write a JavaScript program to sort a list of elements using [3,0,2,5,-1,4,1].(without using sort function);
code sorting=>

function sortArray(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp
      }
    }
  }
  return arr;
}
const arr=[3,0,2,5,-1,4,1];
const sortArr=sortArray(arr);
console.log(sortArr);

