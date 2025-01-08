import promptSync from 'prompt-sync';
const prompt = promptSync();

let target = Number(prompt("Enter number which you want to check "));
let otherNumber;

for(let i=2;i<target/2;i++)
{
    if(isPrimeNumber(i))
    {
        if(isPrimeNumber(target-i))
        {
            console.log(`Sum of ${i} and ${target-i} is ${target} `)
        }
    }
}

function isPrimeNumber(tgt:number)
{
    let isPrime = true;
    for(let i=2;i<tgt/2;i++)
    {
        if( tgt % i === 0)
        {
            isPrime = false;
        }
        if(!isPrime)
            break;
    }
    return isPrime;
}
