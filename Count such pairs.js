// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target 

function countSuchPairs(N,K,A){
   
    count= 0;
for(i=0; i<N; i++){
    
    // var sum = 0;
for(j=i+1; j<N; j++){
    
    sum = A[i] + A[j]; 
    // console.log(sum);
    if(sum==K){
        count++
    }
}
}
    console.log(count);
}
