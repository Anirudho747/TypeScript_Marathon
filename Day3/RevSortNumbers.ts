let arr2 = [8,2,2,3,5,1,2,3,9,4,7,6];

let temp2:number;

for (let i = 0; i < arr2.length; i++)
{
    for(let j = i+1; j < arr2.length; j++)
    {
        if (arr2[i] < arr2[j])
        {
            temp2 = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp2;
        }
    }
}

console.log(arr2);