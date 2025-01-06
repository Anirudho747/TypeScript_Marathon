let arr1 = [8,2,2,3,5,1,2,3,9,4,7,6];

let temp:number;

for (let i = 0; i < arr1.length; i++)
{
    for(let j = i+1; j < arr1.length; j++)
    {
        if (arr1[i] >arr1[j])
        {
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}

console.log(arr1);