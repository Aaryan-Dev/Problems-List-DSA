// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target 


function countSuchPairs(N,K,A){
   
    let count = 0;
for(i=0; i<A.length; i++){
    let sum = 0;
for(j=i; j<A.length; j++){
    sum = sum + A[j];
 //   console.log(sum);
    if(sum===K){
        count++
    }
}
}
console.log(count);

}
valueK