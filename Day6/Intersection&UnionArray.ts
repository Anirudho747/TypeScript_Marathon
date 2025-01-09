let arr5:number[]  = [1,2,3,4,5,6,7,8,9,10];
let arr6:number[] = [2,4,6,8,10];

let unionArray:number[] = [];
let intersectionArray:number[] = [];

for(let i=0;i<arr5.length;i++)
{
    if(arr6.includes(arr5[i]))
    {
       // console.log("Line 11")
        intersectionArray.push(arr5[i]);
    }

    if(!unionArray.includes(arr5[i])){
        unionArray.push(arr5[i]);
    }
}

for(let i=0;i<arr6.length;i++)
{
    if(arr5.includes(arr6[i]) && (!intersectionArray.includes(arr6[i])))
    {
        // console.log("Line 11")
        intersectionArray.push(arr6[i]);
    }

    if(!unionArray.includes(arr6[i])){
        unionArray.push(arr6[i]);
    }
}

console.log(intersectionArray);
console.log("________________");
console.log(unionArray);