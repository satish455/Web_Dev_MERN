


function solve(arr){
    let res=[];
   for(let item of arr){
    if(typeof(item)==='string'){
        res.push(item);
    }
   
   }
   return res;
}



function solve1(arr){
    let res=[];
   for(let item of arr){
    if(typeof(item)==='number'){
        res.push(item);
    }
   
   }
   return res;
}



function solve2(arr){
    let res=[];
   for(let item of arr){
    if(typeof(item)==='boolean'){
        res.push(item);
    }
   
   }
   return res;
}


let arr=[100,'ram',true,false]

console.log(solve(arr));

console.log(solve1(arr));
console.log(solve2(arr));