let numbers=[3, 23, 7, 17, 42, 9, 22, 4, 33, 88, 13, 27, 10, 64];
 document.getElementById("array").textContent=numbers.join(",");
const odd =document.getElementById("odd");
const even=document.getElementById("even");
const result=document.getElementById("result");
odd.addEventlistener("click",()=>{
  let oddnumbers=numbers.filter(num=>num%2!==0);
  result,textContent="odd numbers:"+oddnumbers.join(",")
});
even.addEventlistener("click",()=>{
 let evennumbers=numbers.filter(num=>num%2==0);
  result,textContent="even numbers:"+evennumbers.join(",")
});
  